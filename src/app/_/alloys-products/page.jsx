"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedAlloy, setSelectedAlloy] = React.useState("free-cutting");

  const brassAlloys = [
    { id: "free-cutting", name: "Free Cutting", active: true },
    { id: "free-cutting-forging", name: "Free Cutting and Forging" },
    { id: "high-tensile", name: "High Tensile" },
    { id: "naval-brass", name: "Naval Brass" },
    { id: "forging-brass-rods", name: "Forging Brass Rods" },
  ];

  const alloyData = {
    "free-cutting": {
      title: "Free Cutting",
      description:
        "Free cutting brass is specifically designed for high-speed machining operations. With excellent machinability due to the addition of lead, this alloy is ideal for producing precision components that require extensive machining. It offers superior surface finish and dimensional accuracy, making it perfect for mass production of intricate parts.",
      chemicalProperties: [
        { element: "Copper (Cu)", min: "60.0", max: "63.0" },
        { element: "Zinc (Zn)", min: "35.0", max: "38.0" },
        { element: "Lead (Pb)", min: "2.5", max: "3.7" },
        { element: "Iron (Fe)", min: "-", max: "0.35" },
        { element: "Aluminum (Al)", min: "-", max: "0.05" },
        { element: "Tin (Sn)", min: "-", max: "0.3" },
      ],
      physicalProperties: [
        { property: "Density", value: "8.5", unit: "g/cm³" },
        { property: "Melting Point", value: "900-940", unit: "°C" },
        { property: "Thermal Conductivity", value: "120", unit: "W/m.K" },
        { property: "Electrical Conductivity", value: "26", unit: "% IACS" },
        { property: "Coefficient of Expansion", value: "20.5", unit: "μm/m.K" },
        { property: "Elastic Modulus", value: "100", unit: "GPa" },
      ],
    },
    "free-cutting-forging": {
      title: "Free Cutting and Forging",
      description:
        "This versatile brass alloy combines the excellent machinability of free cutting brass with enhanced forging properties. It's engineered to perform exceptionally well in both hot and cold forging operations while maintaining superior machining characteristics. Perfect for components requiring both forging and subsequent machining operations.",
      chemicalProperties: [
        { element: "Copper (Cu)", min: "57.0", max: "60.0" },
        { element: "Zinc (Zn)", min: "37.0", max: "40.0" },
        { element: "Lead (Pb)", min: "1.5", max: "2.5" },
        { element: "Iron (Fe)", min: "-", max: "0.30" },
        { element: "Aluminum (Al)", min: "-", max: "0.05" },
        { element: "Manganese (Mn)", min: "-", max: "0.10" },
      ],
      physicalProperties: [
        { property: "Density", value: "8.4", unit: "g/cm³" },
        { property: "Melting Point", value: "890-920", unit: "°C" },
        { property: "Thermal Conductivity", value: "115", unit: "W/m.K" },
        { property: "Electrical Conductivity", value: "28", unit: "% IACS" },
        { property: "Coefficient of Expansion", value: "20.0", unit: "μm/m.K" },
        { property: "Elastic Modulus", value: "105", unit: "GPa" },
      ],
    },
    "high-tensile": {
      title: "High Tensile",
      description:
        "High tensile brass offers exceptional strength and durability, making it ideal for demanding applications where mechanical properties are critical. This alloy provides excellent resistance to stress corrosion cracking and maintains its strength across a wide temperature range. Perfect for structural components and high-stress applications.",
      chemicalProperties: [
        { element: "Copper (Cu)", min: "56.0", max: "60.0" },
        { element: "Zinc (Zn)", min: "38.0", max: "42.0" },
        { element: "Aluminum (Al)", min: "0.8", max: "1.5" },
        { element: "Iron (Fe)", min: "-", max: "0.40" },
        { element: "Manganese (Mn)", min: "0.1", max: "0.8" },
        { element: "Lead (Pb)", min: "-", max: "0.20" },
      ],
      physicalProperties: [
        { property: "Density", value: "8.2", unit: "g/cm³" },
        { property: "Melting Point", value: "880-900", unit: "°C" },
        { property: "Thermal Conductivity", value: "130", unit: "W/m.K" },
        { property: "Electrical Conductivity", value: "32", unit: "% IACS" },
        { property: "Coefficient of Expansion", value: "19.8", unit: "μm/m.K" },
        { property: "Elastic Modulus", value: "110", unit: "GPa" },
      ],
    },
    "naval-brass": {
      title: "Naval Brass",
      description:
        "Naval brass contains tin which provides exceptional corrosion resistance, particularly in marine environments. This alloy is specifically designed for shipbuilding and marine applications where exposure to saltwater demands superior corrosion resistance. It offers excellent strength and ductility while maintaining resistance to dezincification.",
      chemicalProperties: [
        { element: "Copper (Cu)", min: "59.0", max: "62.0" },
        { element: "Zinc (Zn)", min: "37.5", max: "39.5" },
        { element: "Tin (Sn)", min: "0.7", max: "1.2" },
        { element: "Lead (Pb)", min: "-", max: "0.20" },
        { element: "Iron (Fe)", min: "-", max: "0.10" },
        { element: "Aluminum (Al)", min: "-", max: "0.02" },
      ],
      physicalProperties: [
        { property: "Density", value: "8.5", unit: "g/cm³" },
        { property: "Melting Point", value: "900-930", unit: "°C" },
        { property: "Thermal Conductivity", value: "125", unit: "W/m.K" },
        { property: "Electrical Conductivity", value: "28", unit: "% IACS" },
        { property: "Coefficient of Expansion", value: "20.2", unit: "μm/m.K" },
        { property: "Elastic Modulus", value: "105", unit: "GPa" },
      ],
    },
    "forging-brass-rods": {
      title: "Forging Brass Rods",
      description:
        "Specially formulated forging brass rods designed for hot and cold forging applications. These rods offer excellent formability, superior grain flow characteristics, and maintain structural integrity during complex forging operations. Ideal for producing forged components with enhanced mechanical properties and dimensional stability.",
      chemicalProperties: [
        { element: "Copper (Cu)", min: "58.0", max: "61.0" },
        { element: "Zinc (Zn)", min: "38.0", max: "41.0" },
        { element: "Lead (Pb)", min: "0.8", max: "1.5" },
        { element: "Iron (Fe)", min: "-", max: "0.25" },
        { element: "Aluminum (Al)", min: "-", max: "0.05" },
        { element: "Silicon (Si)", min: "-", max: "0.05" },
      ],
      physicalProperties: [
        { property: "Density", value: "8.4", unit: "g/cm³" },
        { property: "Melting Point", value: "890-915", unit: "°C" },
        { property: "Thermal Conductivity", value: "118", unit: "W/m.K" },
        { property: "Electrical Conductivity", value: "27", unit: "% IACS" },
        { property: "Coefficient of Expansion", value: "20.1", unit: "μm/m.K" },
        { property: "Elastic Modulus", value: "103", unit: "GPa" },
      ],
    },
  };

  const currentAlloy = alloyData[selectedAlloy];

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
                <button className="text-[#B5A642] border-b-2 border-[#B5A642] px-3 py-2 text-sm font-medium flex items-center">
                  Alloys <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h4 className="font-bold text-sm bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                      Brass
                    </h4>
                  </div>
                  {brassAlloys.map((alloy) => (
                    <button
                      key={alloy.id}
                      onClick={() => setSelectedAlloy(alloy.id)}
                      className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {alloy.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-[#B5A642] px-3 py-2 text-sm font-medium flex items-center">
                  Products <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="/products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Rods
                  </a>
                  <a
                    href="/products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Hollow
                  </a>
                  <a
                    href="/products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Ingots/Billets
                  </a>
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
              <a href="#" className="block py-2 text-[#B5A642] font-medium">
                Alloys
              </a>
              <a
                href="/products"
                className="block py-2 text-gray-700 hover:text-[#B5A642]"
              >
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
            {currentAlloy.title}
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center items-center text-gray-300 text-sm">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-gray-300">Alloys</span>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-[#D4AF37]">{currentAlloy.title}</span>
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
                <h3 className="text-xl font-bold text-gray-800 mb-6">ALLOYS</h3>

                <div className="space-y-2">
                  <div className="pb-2 mb-4 border-b border-gray-200">
                    <h4 className="font-bold text-lg bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent mb-3">
                      Brass
                    </h4>
                    <ul className="space-y-2 ml-4">
                      {brassAlloys.map((alloy) => (
                        <li key={alloy.id}>
                          <button
                            onClick={() => setSelectedAlloy(alloy.id)}
                            className={`block w-full text-left py-2 px-3 rounded transition-all duration-200 ${
                              selectedAlloy === alloy.id
                                ? "bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white font-medium"
                                : "text-gray-600 hover:text-[#B5A642] hover:bg-gray-100"
                            }`}
                          >
                            <i className="fas fa-chevron-right mr-2 text-xs"></i>
                            {alloy.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:w-3/4">
              <div className="bg-white">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  {currentAlloy.title}
                </h2>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    {currentAlloy.description}
                  </p>
                </div>

                {/* Chemical Properties Table */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Chemical Properties
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white">
                          <th className="px-6 py-4 text-left font-semibold">
                            Element
                          </th>
                          <th className="px-6 py-4 text-center font-semibold border-l border-white/20">
                            Min %
                          </th>
                          <th className="px-6 py-4 text-center font-semibold border-l border-white/20">
                            Max %
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentAlloy.chemicalProperties.map((prop, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-gray-100 transition-colors`}
                          >
                            <td className="px-6 py-4 font-medium text-gray-800 border-b border-gray-200">
                              {prop.element}
                            </td>
                            <td className="px-6 py-4 text-center text-gray-700 border-l border-b border-gray-200">
                              {prop.min}
                            </td>
                            <td className="px-6 py-4 text-center text-gray-700 border-l border-b border-gray-200">
                              {prop.max}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Physical Properties Table */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Physical Properties
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white">
                          <th className="px-6 py-4 text-left font-semibold">
                            Property
                          </th>
                          <th className="px-6 py-4 text-center font-semibold border-l border-white/20">
                            Value
                          </th>
                          <th className="px-6 py-4 text-center font-semibold border-l border-white/20">
                            Unit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentAlloy.physicalProperties.map((prop, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-gray-100 transition-colors`}
                          >
                            <td className="px-6 py-4 font-medium text-gray-800 border-b border-gray-200">
                              {prop.property}
                            </td>
                            <td className="px-6 py-4 text-center text-gray-700 border-l border-b border-gray-200">
                              {prop.value}
                            </td>
                            <td className="px-6 py-4 text-center text-gray-700 border-l border-b border-gray-200">
                              {prop.unit}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="/contact-us">
                    <button className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 w-full sm:w-auto">
                      Contact for Pricing
                    </button>
                  </a>
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
            <a href="/alloys-products" className="hover:text-[#B5A642]">
              Alloys
            </a>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-[#B5A642]">{currentAlloy.title}</span>
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