function YourComponent({ productName, total, handleAddToCart }) {
  const handleClick = () => {
    const item = {
      name: productName,
      total,
    };
    handleAddToCart(item);
  };

  return (
    <div className="your-component">
      <h3>{productName}</h3>
      <p>Total: {total}</p>
      <button onClick={handleClick}>Finalizar compras</button>
    </div>
  );
}

export default YourComponent;