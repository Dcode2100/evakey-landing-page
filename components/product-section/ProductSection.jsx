"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaChevronUp, FaChevronDown, FaArrowRight } from "react-icons/fa";

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [hoverTimer, setHoverTimer] = useState(null);

  const categories = [
    { id: "all", name: "All Products", filterValue: "all" },
    { id: "keychains", name: "Keychains", filterValue: "keychain" },
    { id: "bags", name: "Bags", filterValue: "bag" },
    { id: "promotional", name: "Promotional Items", filterValue: "promotional" },
    { id: "accessories", name: "Accessories", filterValue: "accessory" },
    { id: "stationery", name: "Stationery", filterValue: "stationery" },
    { id: "tech", name: "Tech Items", filterValue: "tech" }
  ];

  const products = [
    {
      id: 1,
      name: "Custom Logo Keychain",
      category: "keychain",
      image: "/rubberkeychain/rubber1.jpg",
      description: "Premium custom keychain with your brand logo",
      price: "₹150"
    },
    {
      id: 2,
      name: "Metal Business Card Holder",
      category: "accessory",
      image: "/assets/card.jpg",
      description: "Elegant metal business card holder",
      price: "₹200"
    },
    {
      id: 3,
      name: "Promotional Tote Bag",
      category: "bag",
      image: "/assets/p754503.avif",
      description: "Eco-friendly promotional tote bag",
      price: "₹300"
    },
    {
      id: 4,
      name: "Branded Pen Set",
      category: "stationery",
      image: "/assets/f1.png",
      description: "Professional branded pen set",
      price: "₹100"
    },
    {
      id: 5,
      name: "USB Drive Keychain",
      category: "tech",
      image: "/assets/f2.png",
      description: "Practical USB drive with keychain",
      price: "₹400"
    },
    {
      id: 6,
      name: "Custom Mug",
      category: "promotional",
      image: "/assets/f3.png",
      description: "Personalized promotional mug",
      price: "₹250"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProductHover = (productId) => {
    if (hoverTimer) clearTimeout(hoverTimer);
    
    const timer = setTimeout(() => {
      setHoveredProduct(productId);
    }, 2000);
    
    setHoverTimer(timer);
  };

  const handleProductLeave = () => {
    if (hoverTimer) clearTimeout(hoverTimer);
    setHoveredProduct(null);
  };

  const handleEnquire = (product) => {
    const message = `Hey there, I want to enquire about the product ${product.name}. Product details: ${product.description}`;
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8104780513";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    return () => {
      if (hoverTimer) clearTimeout(hoverTimer);
    };
  }, [hoverTimer]);

  return (
    <section id="products" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Explore by Category
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="space-y-2 max-h-96 overflow-y-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.filterValue)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === category.filterValue
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="flex justify-center space-x-2">
                <button className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
                  <FaChevronUp className="text-gray-600" />
                </button>
                <button className="w-8 h-8 bg-pink-200 border border-pink-300 rounded-full flex items-center justify-center hover:bg-pink-100">
                  <FaChevronDown className="text-pink-600" />
                </button>
              </div>

              <button className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                <span>All Categories</span>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="relative bg-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                  onMouseEnter={() => handleProductHover(product.id)}
                  onMouseLeave={handleProductLeave}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center animate-fade-in">
                      <div className="text-center space-y-4">
                        <h3 className="text-white text-xl font-bold">{product.name}</h3>
                        <p className="text-white/80 text-sm px-4">{product.description}</p>
                        <p className="text-white font-semibold">{product.price}</p>
                        <button
                          onClick={() => handleEnquire(product)}
                          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors animate-scale-in"
                        >
                          Enquire
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                    <p className="text-primary font-bold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="block lg:hidden mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
              Popular Products
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="bg-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => handleEnquire(product)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-600 mb-1">Light single chair</p>
                  <p className="text-primary font-bold text-sm">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2">
              <span>Explore all items</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
