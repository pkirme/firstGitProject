import { useCart, useMedicine } from "../../contexts";

function ShowMedicine() {
  const { medicines, updateMedicine } = useMedicine();
  const { addToCart } = useCart();
  const handleDecreaseQuantity = (medicine) => {
    const cartData={...medicine,quantity:1}
    addToCart(cartData);

    const id = medicine.id;
    let updateQuantity = "Out of stock";
    if (medicine.quantity > 1) {
      updateQuantity = medicine.quantity - 1;
    }

    const updatedMedicine = { ...medicine, quantity: updateQuantity };
    console.log(updatedMedicine);
    updateMedicine(id, updatedMedicine);
  };

  return (
    <ul>
      {medicines.map((medicine, index) => (
        <li key={index}>
          {medicine.name}-{medicine.description}-{medicine.price}-
          {medicine.quantity}
          <button onClick={() => handleDecreaseQuantity(medicine)}>Add</button>
        </li>
      ))}
    </ul>
  );
}

export default ShowMedicine;
