import { createContext, useContext } from "react";
export const MedicineContext = createContext({
  medicines: [
    {
      id: 1,
      name: "",
      description: "",
      price: 0,
      quantity: "",
    },
  ],
  addMedicine: (medicine) => {},
  updateMedicine: (id) => {},
});

//Create medicine custom hook
export const useMedicine = () => {
  return useContext(MedicineContext);
};

export const MedicineProvider = MedicineContext.Provider;
