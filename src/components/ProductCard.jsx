function ProductCard({ name, price, image }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
      <div className="flex h-64 w-full items-center justify-center overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500">${price}</p>
        </div>
        <button className="transform rounded-md bg-blue-500 px-4 py-2 text-white transition-transform hover:scale-105 hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
