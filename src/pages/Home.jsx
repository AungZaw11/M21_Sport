import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-100 px-6 text-center">
      <div className="max-w-2xl">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-800 md:text-6xl">
          Welcome to <span className="text-blue-500">Fashion Shop</span>
        </h1>
        <p className="mb-8 text-lg text-gray-600 md:text-xl">
          Discover your next favorite outfit. Trendy, comfortable, and
          affordable.
        </p>
        <Link
          to="/shop"
          className="inline-block transform rounded-full bg-blue-500 px-8 py-3 text-lg text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-600"
        >
          Start Shopping
        </Link>
      </div>
    </section>
  );
}

export default Home;
