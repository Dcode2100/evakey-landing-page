import React from 'react'

const ProductSidebar = ({ sidebarData }) => {
  return (
    <div className="m-6 ">
      <p className="font-bold">Shop by</p>
      <h2 className="text-xl font-bold mt-4">{sidebarData.Title}</h2>
      <ul className="mt-4">
        {sidebarData.Links.map((link, index) => (
          <li key={index} className="my-2">
            <a href={link.path} className="hover:text-blue-600">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSidebar