import React from "react";

const tabs = [
  { id: "events", label: "Events" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "services", label: "Our Services" },
];

const SalonTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex border-b bg-white">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex-1 py-3 text-center text-sm font-medium ${
            activeTab === tab.id
              ? "border-b-2 border-orange-500 text-orange-500"
              : "text-gray-500"
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SalonTabs;
