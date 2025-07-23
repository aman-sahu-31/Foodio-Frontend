import menubar from "../Pages/Json-File/Menubar.json";
export default function Menubar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 p-6">
      {menubar.map((item) => (
        <card key={item.name} className="text-center shadow-sm">
          <cardContent className="flex flex-col items-center p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-cover rounded-full mb-4"
            />
            <p className="text-lg font-medium">{item.name}</p>
          </cardContent>
        </card>
      ))}
    </div>
  );
}