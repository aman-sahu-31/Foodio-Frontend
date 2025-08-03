import React, { useState } from 'react';
import data from '../Add Card/AddOnsData.json';

function AddOnsCard() {
  const item = data.find((d) => d.id === 1); // Change to dynamic ID if needed

  if (!item || !item.addOns) {
    return <div className="text-red-500 text-center mt-4">Invalid or missing data.</div>;
  }

  const { basePrice, addOns, title } = item;
  const [selected, setSelected] = useState({});

  const handleChange = (section, itemName) => {
    const sectionSelected = selected[section] || [];
    const isChecked = sectionSelected.includes(itemName);
    const sectionLimit = addOns[section].limit;

    let updated = [...sectionSelected];
    if (isChecked) {
      updated = updated.filter(i => i !== itemName);
    } else if (updated.length < sectionLimit) {
      updated.push(itemName);
    }

    setSelected({ ...selected, [section]: updated });
  };

  const totalAddOn = Object.values(selected).reduce((sum, arr) => sum + arr.length, 0);

  const totalPrice =
    basePrice +
    Object.entries(selected).reduce((sum, [section, items]) => {
      return (
        sum +
        items.reduce((itemSum, name) => {
          const item = addOns[section].items.find(i => i.name === name);
          return itemSum + (item?.price || 0);
        }, 0)
      );
    }, 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-bold text-green-600">
            🟢 {title || "Customized Meal"}
          </h2>
          <button
            onClick={() => setSelected({})}
            className="text-blue-600 text-sm font-semibold hover:underline"
          >
            Reset
          </button>
        </div>

        {/* One Single Scrollable Area for All Content */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-5">
          {Object.entries(addOns).map(([section, { limit, items }]) => (
            <div key={section} className="border rounded-lg p-3 bg-gray-50">
              <h3 className="font-semibold text-black">{section}</h3>
              <p className="text-sm text-gray-500 mb-2">Choose up to {limit}</p>
              <div className="space-y-2">
                {items.map((item) => (
                  <label
                    key={item.name}
                    className="flex justify-between items-center border px-3 py-2 rounded cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={(selected[section] || []).includes(item.name)}
                        onChange={() => handleChange(section, item.name)}
                      />
                      <span className="text-black">{item.name}</span>
                    </div>
                    <span className="text-black">₹ {item.price}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-indigo-700 text-white flex justify-between items-center px-4 py-3 rounded-b-lg">
          <span className="text-sm font-semibold">
            {totalAddOn} Add-on | ₹ {totalPrice}
          </span>
          <button className="bg-white text-indigo-700 px-4 py-1 rounded font-bold">
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOnsCard;
