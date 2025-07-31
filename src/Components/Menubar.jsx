import menubar from "../Pages/Json-File/Menubar.json";
import { useNavigate } from "react-router-dom";

export default function Menubar() {
  const navigate = useNavigate();

  if (!Array.isArray(menubar) || menubar.length === 0) {
    return <div className="p-4 text-gray-600">No menubar available.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 p-6">
      {menubar.map((item) => (
        <div
          key={item.name}
          className="text-center bg-white rounded-lg shadow hover:shadow-md p-4 cursor-pointer transition-all"
          onClick={() => navigate(`/menubar/${item.name}`)}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-medium text-gray-800">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
