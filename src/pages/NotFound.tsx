import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
 <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
  <div className="text-center px-4">
    <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
    <p className="text-2xl font-medium text-gray-600 mb-2">Page Not Found</p>
    <p className="text-gray-500 mb-6">Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
    <a
      href="/"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
    >
      Go Back Home
    </a>
  </div>
</div>
  );
};

export default NotFound;
