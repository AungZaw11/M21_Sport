import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100 text-center">
      <h1 className="mb-4 text-8xl font-extrabold text-blue-500">404</h1>
      <p className="mb-8 text-xl text-gray-700">Oops! Page not found.</p>
      <Link
        to="/"
        className="rounded-full bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
}

export default Error;
