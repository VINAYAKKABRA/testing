"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState("rods");

  const brassAlloys = [
    { id: "free-cutting", name: "Free Cutting" },
    { id: "free-cutting-forging", name: "Free Cutting and Forging" },
    { id: "high-tensile", name: "High Tensile" },
    { id: "naval-brass", name: "Naval Brass" },
    { id: "forging-brass-rods", name: "Forging Brass Rods" },
  ];

  const productCategories = [
    { id: "rods", name: "Rods", icon: "fas fa-grip-lines" },
    { id: "hollow", name: "Hollow", icon: "fas fa-circle-notch" },
    { id: "ingots-billets", name: "Ingots/Billets", icon: "fas fa-cubes" },
  ];

  const productData = {
    rods: {
      title: "Brass Rods",
      description:
        "High-quality brass rods manufactured through precision extrusion processes. Available in various cross-sectional shapes and sizes to meet diverse industrial requirements. Our rods offer excellent machinability, corrosion resistance, and dimensional accuracy.",
      products: [
        {
          name: "Round Rods",
          image:
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          description:
            "Precision extruded brass round rods in various diameters",
          sizes: "Diameter: 1.5mm to 125mm, Length: Up to 6 meters",
        },
        {
          name: "Square Rods",
          image:
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          description: "Square brass rods with excellent finish and precision",
          sizes: "Side: 3mm to 100mm, Length: Up to 6 meters",
        },
        {
          name: "Rectangular Rods",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          description: "Rectangular brass rods for construction and machinery",
          sizes: "Width x Height: 5mm x 10mm to 80mm x 120mm",
        },
        {
          name: "Hexagonal Rods",
          image:
            "https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          description: "Hexagonal brass rods for specialized applications",
          sizes: "Across Flats: 5mm to 75mm, Length: Up to 6 meters",
        },
      ],
      specifications: {
        "Diameter Range": "1.5mm to 125mm",
        Length: "Up to 6 meters",
        Tolerance: "±0.05mm to ±0.1mm",
        "Surface Finish": "Bright, Polished, Mill Finish",
        Straightness: "±1mm per meter",
        Standards: "IS 319, ASTM B16, EN 12163",
      },
      packingTypes: [
        "Wooden Crates with protective wrapping",
        "Steel Pallets for heavy sections",
        "Plastic wrapping for corrosion protection",
        "Custom packaging as per customer requirements",
      ],
      applicativeSectors: [
        "Automotive Components",
        "Electrical & Electronics",
        "Plumbing & Sanitary Fittings",
        "Marine Hardware",
        "Precision Instruments",
        "Decorative Applications",
        "Fasteners & Hardware",
        "Valve Components",
      ],
    },
    hollow: {
      title: "Brass Hollow Sections",
      description:
        "Seamless brass hollow sections and tubes manufactured through precision extrusion. Available in round, square, rectangular, and custom profiles with excellent dimensional accuracy and surface finish.",
      products: [
        {
          name: "Round Tubes",
          image:
            "https://images.unsplash.com/photo-1558618047-3c8f6d0d9e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          description: "Seamless brass round tubes for various applications",
          sizes: "OD: 6mm to 100mm, Wall Thickness: 0.5mm to 10mm",
        },
        {
          name: "Square Tubes",
          image:
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          description: "Square brass tubes with precision dimensions",
          sizes: "Side: 10mm to 80mm, Wall Thickness: 1mm to 8mm",
        },
        {
          name: "Rectangular Tubes",
          image:
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          description: "Rectangular brass tubes for structural applications",
          sizes: "Dimensions: 15mm x 25mm to 60mm x 100mm",
        },
        {
          name: "Capillary Tubes",
          image:
            "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          description: "Precision capillary tubes for instrumentation",
          sizes: "OD: 0.5mm to 6mm, Wall Thickness: 0.1mm to 1mm",
        },
      ],
      specifications: {
        "Outer Diameter": "6mm to 100mm",
        "Wall Thickness": "0.5mm to 10mm",
        Length: "Up to 6 meters",
        Tolerance: "±0.1mm to ±0.2mm",
        "Surface Finish": "Bright, Annealed, Mill Finish",
        Standards: "IS 407, ASTM B135, EN 12164",
      },
      packingTypes: [
        "Bundled with steel strapping",
        "Wooden crates for protection",
        "Plastic end caps to prevent damage",
        "Individual wrapping for precision tubes",
      ],
      applicativeSectors: [
        "Heat Exchangers",
        "Condenser Tubes",
        "Hydraulic Systems",
        "Pneumatic Applications",
        "Architectural Hardware",
        "Furniture Components",
        "Marine Applications",
        "HVAC Systems",
      ],
    },
    "ingots-billets": {
      title: "Brass Ingots & Billets",
      description:
        "High-purity brass ingots and precision-cast billets manufactured from premium raw materials. Available in various alloy compositions and sizes, suitable for further processing and manufacturing applications.",
      products: [
        {
          name: "Standard Ingots",
          image:
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          description: "Standard size brass ingots for general use",
          sizes: "Weight: 5kg to 500kg, Custom sizes available",
        },
        {
          name: "Extrusion Billets",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          description: "Round brass billets for extrusion processes",
          sizes: "Diameter: 50mm to 300mm, Length: 300mm to 1500mm",
        },
        {
          name: "Forging Billets",
          image:
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          description: "Square brass billets for forging applications",
          sizes: "Size: 80mm x 80mm to 200mm x 200mm",
        },
        {
          name: "Custom Alloy Ingots",
          image:
            "https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          description: "Custom brass alloy ingots to specification",
          sizes: "Weight: 10kg to 1000kg, Custom compositions",
        },
      ],
      specifications: {
        "Weight Range": "5kg to 1000kg",
        Purity: "99.5% minimum",
        "Alloy Compositions": "60+ different grades",
        Dimensions: "Custom sizes available",
        "Chemical Analysis": "Certified test reports",
        Standards: "IS 319, ASTM B30, EN 1982",
      },
      packingTypes: [
        "Wooden pallets with steel strapping",
        "Individual wrapping for protection",
        "Moisture-resistant packaging",
        "Stackable arrangement for efficient shipping",
      ],
      applicativeSectors: [
        "Foundries & Casting",
        "Extrusion Industry",
        "Rolling Mills",
        "Secondary Processing",
        "Alloy Manufacturing",
        "Research & Development",
        "Export Markets",
        "Metal Trading",
      ],
    },
  };

  const currentProduct = productData[selectedProduct];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                S
              </div>
              <span className="text-2xl font-bold text-gray-800">SKI</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-[#B5A642] px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-[#B5A642] px-3 py-2 text-sm font-medium flex items-center">
                  Alloys <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h4 className="font-bold text-sm bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                      Brass
                    </h4>
                  </div>
                  {brassAlloys.map((alloy) => (
                    <a
                      key={alloy.id}
                      href="/alloys-products"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {alloy.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <button className="text-[#B5A642] border-b-2 border-[#B5A642] px-3 py-2 text-sm font-medium flex items-center">
                  Products <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {productCategories.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <i className={`${product.icon} mr-2`}></i>
                      {product.name}
                    </button>
                  ))}
                </div>
              </div>
              <a
                href="/about"
                className="text-gray-700 hover:text-[#B5A642] px-3 py-2 text-sm font-medium"
              >
                About Us
              </a>
              <a
                href="/tools"
                className="text-gray-700 hover:text-[#B5A642] px-3 py-2 text-sm font-medium"
              >
                Tools
              </a>
            </nav>

            {/* Search and Contact */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-500 hover:text-[#B5A642]">
                <i className="fas fa-search"></i>
              </button>
              <a href="/contact-us">
                <button className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200">
                  Contact
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <a
                href="/"
                className="block py-2 text-gray-700 hover:text-[#B5A642]"
              >
                Home
              </a>
              <a
                href="/alloys-products"
                className="block py-2 text-gray-700 hover:text-[#B5A642]"
              >
                Alloys
              </a>
              <a href="#" className="block py-2 text-[#B5A642] font-medium">
                Products
              </a>
              <a
                href="/about"
                className="block py-2 text-gray-700 hover:text-[#B5A642]"
              >
                About Us
              </a>
              <a
                href="/tools"
                className="block py-2 text-gray-700 hover:text-[#B5A642]"
              >
                Tools
              </a>
              <a href="/contact-us">
                <button className="mt-4 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white px-6 py-2 rounded-full">
                  Contact
                </button>
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B5A642]/20 to-[#D4AF37]/20"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30h30v30H30V30zm15 15h15v15H45V45z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            {currentProduct.title}
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center items-center text-gray-300 text-sm">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-gray-300">Products</span>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-[#D4AF37]">{currentProduct.title}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  PRODUCTS
                </h3>

                <div className="space-y-2">
                  {productCategories.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product.id)}
                      className={`flex items-center w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                        selectedProduct === product.id
                          ? "bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white font-medium shadow-lg"
                          : "text-gray-700 hover:text-[#B5A642] hover:bg-gray-100"
                      }`}
                    >
                      <i className={`${product.icon} mr-3 text-lg`}></i>
                      {product.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:w-3/4">
              <div className="bg-white">
                {/* Product Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {currentProduct.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {currentProduct.description}
                  </p>
                </div>

                {/* Product Images Grid */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Our Products
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentProduct.products.map((product, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="font-bold text-xl text-gray-800 mb-3">
                            {product.name}
                          </h4>
                          <p className="text-gray-600 mb-3">
                            {product.description}
                          </p>
                          <div className="mb-4">
                            <span className="text-sm font-medium text-gray-700">
                              Available Sizes:
                            </span>
                            <p className="text-sm text-gray-600">
                              {product.sizes}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Technical Specifications
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(currentProduct.specifications).map(
                        ([key, value], index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                          >
                            <span className="font-medium text-gray-700">
                              {key}:
                            </span>
                            <span className="text-gray-600 text-right">
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Packing Types */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Packing Types
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentProduct.packingTypes.map((packing, index) => (
                      <div
                        key={index}
                        className="flex items-start p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <i className="fas fa-box text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700">{packing}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applicative Sectors */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Applicative Sectors
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {currentProduct.applicativeSectors.map((sector, index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gradient-to-br hover:from-[#B5A642]/5 hover:to-[#D4AF37]/5 transition-all duration-200"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-3">
                          <i className="fas fa-industry text-white text-lg"></i>
                        </div>
                        <p className="text-sm font-medium text-gray-700">
                          {sector}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact for Pricing */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl p-8 text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">
                      Contact for Pricing
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                      Get competitive quotes for{" "}
                      {currentProduct.title.toLowerCase()} based on your
                      specific requirements. Our experts will provide detailed
                      pricing and technical support.
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="/contact-us"
                        className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center"
                      >
                        <i className="fas fa-envelope mr-2"></i>
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Footer */}
      <section className="bg-gray-50 py-4 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-6 h-6 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded mr-3 flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <a href="/" className="hover:text-[#B5A642]">
              Home
            </a>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <a href="/products" className="hover:text-[#B5A642]">
              Products
            </a>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-[#B5A642]">{currentProduct.title}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                  S
                </div>
                <span className="text-2xl font-bold">SKI</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Leading manufacturer of premium brass alloy extrusions, serving
                industries worldwide with quality, precision, and innovation
                since 1988.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/alloys-products"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Alloys
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/tools"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tools
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
                Contact Info
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-[#B5A642]"></i>
                  123 Industrial Area, Mumbai, India
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2 text-[#B5A642]"></i>
                  +91 22 1234 5678
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-[#B5A642]"></i>
                  info@ski-alloys.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 SKI. All rights reserved. | Crafting Excellence in
              Brass Alloys
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;