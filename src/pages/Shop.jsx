import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "T-Shirt", price: 20, image: t1 },
  { id: 2, name: "Jean", price: 40, image: t2 },
  { id: 3, name: "Jacket", price: 60, image: t3 },
];

function Shop() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Our Latest Collection
      </h2>
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Shop;
