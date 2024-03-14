import { useState } from "react";
import ShoeContext from "../context/ShoeContext";

const ShoeContextProvider = (props) => {
  const [shoeList, setShoeList] = useState([]);
  const addShoeList = (newList) => {
    setShoeList((prev) => [...prev, newList]);
  };

  const decrementQuantity = (id, size) => {
    console.log(id, size);
    const updatedData = shoeList.map((shoe) => {
      if (shoe.id === id && size === "large") {
        return {
          ...shoe,
          large: Math.max(0, shoe.large - 1),
        };
      }
      if (shoe.id === id && size === "medium") {
        return {
          ...shoe,
          medium: Math.max(0, shoe.medium - 1),
        };
      }
      if (shoe.id === id && size === "small") {
        return {
          ...shoe,
          small: Math.max(0, shoe.small - 1),
        };
      }
      return shoe;
    });
    setShoeList(updatedData);
  };

  const shoeContext = {
    data: shoeList,
    addShoe: addShoeList,
    decrementQuantity: decrementQuantity,
  };
  return (
    <ShoeContext.Provider value={shoeContext}>
      {props.children}
    </ShoeContext.Provider>
  );
};

export default ShoeContextProvider;
