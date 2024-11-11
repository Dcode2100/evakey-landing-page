import React from 'react'

const ProductSidebar = ({ sidebarData, onFilterChange, activeFilter }) => {
  return (
    <aside className="bg-white rounded-xl shadow-lg p-8 md:m-6 border border-gray-100">
      {/* Header Section */}
      <div className="space-y-2 pb-6 border-b border-gray-100">
        <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Shop by
        </h1>
        <h2 className="text-lg text-gray-600 font-medium">
          {sidebarData.Title}
        </h2>
      </div>
      
      {/* Links Section */}
      <ul className="mt-8 flex flex-row flex-wrap lg:flex-col gap-3">
        {sidebarData.Links.map((link, index) => (
          <li key={index} className="w-full">
            <button 
              className={`
                group relative w-full px-6 py-3 rounded-lg transition-all duration-300
                flex items-center justify-between
                ${activeFilter === link.filterValue 
                  ? 'bg-blue-50 text-blue-600 font-medium shadow-sm' 
                  : 'hover:bg-gray-50 text-gray-600'
                }
              `}
              onClick={() => onFilterChange(link.filterValue)}
            >
              <span className="flex items-center gap-3">
                {link.title}
              </span>
              
              {/* Hover effect */}
              <span className={`
                absolute left-0 top-0 h-full w-1 rounded-l-lg transition-all duration-300
                ${activeFilter === link.filterValue 
                  ? 'bg-blue-500' 
                  : 'bg-transparent group-hover:bg-gray-200'
                }
              `} />
            </button>
          </li>
        ))}
      </ul>

      {/* Optional: Add a reset filter button */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <button 
          onClick={() => onFilterChange(null)}
          className="w-full px-6 py-2.5 text-sm text-gray-500 hover:text-gray-700
            rounded-lg border border-gray-200 hover:border-gray-300
            transition-all duration-300"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
};

export default ProductSidebar