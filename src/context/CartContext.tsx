import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert, Linking} from 'react-native';
import api from '../services/api';
import {useAuth} from './AuthContext';
import formatCurrency from '../utils/formatCurrency';

interface IMedicine {
  medicine_id: string;
  name: string;
  manufacturer: string;
  image_url: string;
  price: number;
  uniquePrice: number;
  amount: number;
}

interface IPharmacie {
  pharmacie: {
    id: string;
    company_name: string;
    avatar: string;
    latitude: number;
    longitude: number;
    medicines: IMedicine[];
  };
}

interface IAddPharmacieMedicine {
  pharmacie: {
    id: string;
    company_name: string;
    avatar: string;
    latitude: number;
    longitude: number;
    medicines: IMedicine;
  };
}

interface ICartContextData {
  handleAddPharmacieAndMedicines(medicine: IAddPharmacieMedicine): void;
  handleRemoveMedicine(pharmacieId: string, medicineId: string): void;
  handleUpdateMedicineAmount(
    pharmacieId: string,
    medicineId: string,
    amount: string,
  ): void;
  handleTotalBudget(pharmacieId: string): void;
  handleSendBudget(pharmacieId: string): void;
  loading: boolean;
  total: number;

  pharmaciesInCart: IPharmacie[];
}

const CartContext = createContext<ICartContextData>({} as ICartContextData);

const CartProvider: React.FC = ({children}) => {
  const [pharmaciesInCart, setPharmaciesInCart] = useState<IPharmacie[]>([]);
  const [total, setTotal] = useState(0);
  const {user} = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadStorageGetData(): Promise<void> {
      const cart = await AsyncStorage.getItem('@BuscaFarm:cart');

      if (cart) {
        setPharmaciesInCart(JSON.parse(cart));
      }
    }
    loadStorageGetData();
  }, []);

  const handleTotal = useCallback(async () => {
    let totalM = 0;
    await AsyncStorage.setItem(
      '@BuscaFarm:cart',
      JSON.stringify(pharmaciesInCart),
    );

    pharmaciesInCart.forEach((p) => {
      totalM += p.pharmacie.medicines.length;
    });

    setTotal(totalM);
  }, [pharmaciesInCart]);

  const handleTotalBudget = useCallback(
    (pharmacieId) => {
      let totalValueBudget = 0;
      const findPharmacie = pharmaciesInCart.find(
        (p) => p.pharmacie.id === pharmacieId,
      );
      if (findPharmacie) {
        findPharmacie.pharmacie.medicines.forEach((m) => {
          totalValueBudget += m.price;
        });
      }
      return totalValueBudget;
    },
    [pharmaciesInCart],
  );

  const handleSendBudget = useCallback(
    async (pharmacieId, userId) => {
      setLoading(true);
      const findPharmacie = pharmaciesInCart.find(
        (p) => p.pharmacie.id === pharmacieId,
      );
      if (findPharmacie) {
        const medicines = findPharmacie.pharmacie.medicines.map((m) => {
          return {
            medicine_id: m.medicine_id,
            price: m.uniquePrice,
            amount: m.amount,
          };
        });
        try {
          const {data} = await api.post('budgets/create', {
            user_id: userId,
            pharmacie_id: pharmacieId,
            medicines,
          });
          setLoading(false);

          const updatedMedicines = pharmaciesInCart.filter(
            (p) => p.pharmacie.id !== pharmacieId,
          );
          setPharmaciesInCart(updatedMedicines);

          const message = `Olá, me chamo ${
            user.name
          }, e acabei de te enviar um orçamento. \n \n Id: ${
            data.id
          } \n Valor: ${formatCurrency(
            'pt-br',
            'BRL',
            Number(handleTotalBudget(pharmacieId)),
          )} `;

          Linking.openURL(
            `whatsapp://send?text=${message}&phone=5562984982049`,
          );
        } catch (error) {
          setLoading(false);
          Alert.alert(`Erro ao enviar orçamento: ${error}`);
        }
      }
    },
    [pharmaciesInCart],
  );

  const handleUpdateMedicineAmount = useCallback(
    (pharmacieId, medicineId, amount) => {
      const filteredPharmacies = pharmaciesInCart.map((p) => {
        if (p.pharmacie?.id === pharmacieId && amount) {
          return {
            pharmacie: {
              ...p.pharmacie,
              medicines: p.pharmacie.medicines.map((m) => {
                if (m.medicine_id === medicineId) {
                  return {
                    ...m,
                    amount: Number(amount),
                    price: m.uniquePrice * Number(amount),
                  };
                }
                return m;
              }),
            },
          };
        }

        return p;
      });

      setPharmaciesInCart(filteredPharmacies);
    },
    [pharmaciesInCart],
  );

  useEffect(() => {
    handleTotal();
  }, [handleTotal]);

  const handleRemoveMedicine = useCallback(
    (pharmacieId, medicineId) => {
      const filteredPharmacies = pharmaciesInCart.map((p) => {
        if (p.pharmacie?.id === pharmacieId) {
          return {
            pharmacie: {
              ...p.pharmacie,
              medicines: p.pharmacie.medicines.filter(
                (m) => m.medicine_id !== medicineId,
              ),
            },
          };
        }

        return p;
      });
      const updatedMedicines = filteredPharmacies.filter(
        (p) => p.pharmacie.medicines.length > 0,
      );
      setPharmaciesInCart(updatedMedicines);
    },
    [pharmaciesInCart],
  );

  const handleAddPharmacieAndMedicines = useCallback(
    (item) => {
      const {pharmacie} = item;

      const findPharmacie = pharmaciesInCart.findIndex(
        (o) => o.pharmacie?.id === pharmacie.id,
      );

      if (findPharmacie > -1) {
        const updatedPharmacies = pharmaciesInCart.map((p) => {
          if (p.pharmacie?.id === pharmacie.id) {
            const findMedicine = p.pharmacie.medicines.findIndex(
              (m) => m.medicine_id === pharmacie.medicines.medicine_id,
            );

            if (findMedicine > -1) {
              const updatedMedicines = p.pharmacie.medicines.map((m) => {
                if (m.medicine_id === pharmacie.medicines.medicine_id) {
                  return {
                    ...m,
                    amount: m.amount + 1,
                    uniquePrice: pharmacie.medicines.price,
                    price: m.price + pharmacie.medicines.price,
                  };
                }
                return m;
              });
              return {
                pharmacie: {
                  ...p.pharmacie,
                  medicines: updatedMedicines,
                },
              };
            }

            return {
              pharmacie: {
                ...p.pharmacie,
                medicines: [
                  ...p.pharmacie.medicines,
                  {
                    medicine_id: pharmacie.medicines.medicine_id,
                    amount: pharmacie.medicines.amount,
                    price: pharmacie.medicines.price,
                    uniquePrice: pharmacie.medicines.price,
                    image_url: pharmacie.medicines.image_url,
                    manufacturer: pharmacie.medicines.manufacturer,
                    name: pharmacie.medicines.name,
                  },
                ],
              },
            };
          }

          return p;
        });

        setPharmaciesInCart(updatedPharmacies);
      } else {
        setPharmaciesInCart((oldValue) => {
          return [
            ...oldValue,
            {
              pharmacie: {
                ...pharmacie,
                medicines: [
                  {
                    medicine_id: pharmacie.medicines.medicine_id,
                    amount: pharmacie.medicines.amount,
                    price: pharmacie.medicines.price,
                    uniquePrice: pharmacie.medicines.price,
                    image_url: pharmacie.medicines.image_url,
                    manufacturer: pharmacie.medicines.manufacturer,
                    name: pharmacie.medicines.name,
                  },
                ],
              },
            },
          ];
        });
      }
    },
    [pharmaciesInCart],
  );

  return (
    <CartContext.Provider
      value={{
        handleAddPharmacieAndMedicines,
        handleUpdateMedicineAmount,
        handleRemoveMedicine,
        handleTotalBudget,
        handleSendBudget,
        loading,
        total,
        pharmaciesInCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart(): ICartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartProvider');
  }

  return context;
}

export {CartProvider, useCart};
