import React, { useState } from "react";
import MedicineContext from "./MedicineContext";

const MedicineContextProvider = (props) => {
  const [medicineList, setMedicineList] = useState([]);

  const addMedicine = (newData) => {
    setMedicineList((prev) => [...prev, newData]);
  };

  const decrementQuantity = (id) => {
    const updatedData = medicineList.map((medicine) => {
      if (medicine.id === id) {
        return {
          ...medicine,
          quantity: Math.max(0, medicine.quantity - 1),
        };
      }
      return medicine;
    });
    setMedicineList(updatedData);
  };

  const medContext = {
    data: medicineList,
    addMedicine: addMedicine,
    decrementQuantity: decrementQuantity,
  };
  return (
    <MedicineContext.Provider value={medContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineContextProvider;
