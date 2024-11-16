import React from 'react';

const ProductSidebar = ({ sidebarData, onFilterChange, activeFilter }) => {
  return (
    <aside className="bg-white rounded-xl shadow-lg p-6 md:m-6 border border-gray-200">
      {/* Header Section */}
      <div className="pb-5 border-b border-gray-200">
        <h1 className="font-bold text-2xl text-blue-700 mb-2">Shop by</h1>
        <h2 className="text-lg text-gray-700 font-semibold">
          {sidebarData.Title}
        </h2>
      </div>
      
      {/* Links Section */}
      <ul className="mt-6 space-y-3">
        {sidebarData.Links.map((link, index) => (
          <li key={index} className="space-y-1">
            {/* Main Category */}
            <button 
              className={`w-full px-4 py-2.5 text-left rounded-md font-medium
                ${activeFilter === link.filterValue 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
              onClick={() => onFilterChange(link.filterValue)}
            >
              {link.title}
            </button>

            {/* SubLinks */}
            {link.subLinks && (
              <ul className="ml-4 space-y-1 border-l-2 border-gray-100">
                {link.subLinks.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <button
                      className={`w-full px-4 py-2 text-left text-sm font-medium
                        ${activeFilter === subLink.filterValue 
                          ? 'text-blue-700 bg-blue-50' 
                          : 'text-gray-600 hover:text-gray-900'
                        }`}
                      onClick={() => onFilterChange(subLink.filterValue)}
                    >
                      {subLink.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Reset filter button */}
      <div className="mt-8 pt-5 border-t border-gray-200">
        <button 
          onClick={() => onFilterChange(null)}
          className="w-full px-5 py-2.5 text-sm font-medium text-gray-600 
            bg-gray-50 border border-gray-200 rounded-md 
            hover:bg-gray-100 hover:text-gray-700"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
};

export default ProductSidebar;