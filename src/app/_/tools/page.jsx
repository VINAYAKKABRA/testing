"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Initialize state with inches as default units
  const initialState = {
    material: "brass",
    shape: "round",
    diameter: "",
    diameterUnit: "in", // Changed to inches
    length: "",
    lengthUnit: "in", // Changed to inches
    width: "",
    widthUnit: "in", // Changed to inches
    height: "",
    heightUnit: "in", // Changed to inches
    thickness: "",
    thicknessUnit: "in", // Changed to inches
    outerDiameter: "",
    outerDiameterUnit: "in", // Changed to inches
    innerDiameter: "",
    innerDiameterUnit: "in", // Changed to inches
    quantity: "1",
    result: null,
  };

  const [weightCalc, setWeightCalc] = React.useState(initialState);

  const brassAlloys = [
    { id: "free-cutting", name: "Free Cutting" },
    { id: "free-cutting-forging", name: "Free Cutting and Forging" },
    { id: "high-tensile", name: "High Tensile" },
    { id: "naval-brass", name: "Naval Brass" },
    { id: "forging-brass-rods", name: "Forging Brass Rods" },
  ];

  // Updated densities to match reference website
  const materialData = {
    copper: { name: "Copper", density: 8.92 }, // Updated density
    brass: { name: "Brass", density: 8.51 }, // Updated density
    bronze: { name: "Bronze", density: 8.8 }, // Updated density
  };

  const unitConversions = {
    mm: 1,
    cm: 10,
    m: 1000,
    in: 25.4,
    ft: 304.8,
  };

  const convertToMm = (value, unit) => {
    return parseFloat(value) * unitConversions[unit];
  };

  const calculateWeight = () => {
    const {
      material,
      shape,
      diameter,
      diameterUnit,
      length,
      lengthUnit,
      width,
      widthUnit,
      height,
      heightUnit,
      thickness,
      thicknessUnit,
      outerDiameter,
      outerDiameterUnit,
      innerDiameter,
      innerDiameterUnit,
      quantity,
    } = weightCalc;

    const density = materialData[material]?.density || 8.6;
    let volume = 0;

    switch (shape) {
      case "round":
        if (diameter && length) {
          const radiusMm = convertToMm(diameter, diameterUnit) / 2;
          const lengthMm = convertToMm(length, lengthUnit);
          volume = Math.PI * Math.pow(radiusMm, 2) * lengthMm;
        }
        break;
      case "square":
        if (width && length) {
          const widthMm = convertToMm(width, widthUnit);
          const lengthMm = convertToMm(length, lengthUnit);
          volume = Math.pow(widthMm, 2) * lengthMm;
        }
        break;
      case "rectangle":
        if (width && height && length) {
          const widthMm = convertToMm(width, widthUnit);
          const heightMm = convertToMm(height, heightUnit);
          const lengthMm = convertToMm(length, lengthUnit);
          volume = widthMm * heightMm * lengthMm;
        }
        break;
      case "hexagonal":
        if (width && length) {
          const widthMm = convertToMm(width, widthUnit);
          const lengthMm = convertToMm(length, lengthUnit);
          // Corrected hexagonal formula
          volume = (Math.sqrt(3) / 2) * Math.pow(widthMm, 2) * lengthMm;
        }
        break;
      case "octagon":
        if (width && length) {
          const widthMm = convertToMm(width, widthUnit);
          const lengthMm = convertToMm(length, lengthUnit);
          // Corrected octagon formula
          volume = 0.93 * Math.pow(widthMm, 2) * lengthMm;
        }
        break;
      case "hollow":
        if (outerDiameter && innerDiameter && length) {
          const outerRadiusMm =
            convertToMm(outerDiameter, outerDiameterUnit) / 2;
          const innerRadiusMm =
            convertToMm(innerDiameter, innerDiameterUnit) / 2;
          const lengthMm = convertToMm(length, lengthUnit);
          volume =
            Math.PI *
            (Math.pow(outerRadiusMm, 2) - Math.pow(innerRadiusMm, 2)) *
            lengthMm;
        }
        break;
    }

    if (volume > 0) {
      const weightKg = (volume / 1000000) * density * parseFloat(quantity);
      const weightLbs = weightKg * 2.20462;
      setWeightCalc((prev) => ({
        ...prev,
        result: { kg: weightKg.toFixed(5), lbs: weightLbs.toFixed(5) },
      }));
    }
  };

  const clearCalculator = () => {
    setWeightCalc(initialState);
  };

  const getShapeImage = (shape) => {
    const shapeImages = {
      // Dimension image for round shape
      round: (
        <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="#B5A642"
            strokeWidth="2"
          />
          <text
            x="40"
            y="45"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            D
          </text>
          <line
            x1="5"
            y1="40"
            x2="75"
            y2="40"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text
            x="40"
            y="30"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            Diameter
          </text>
        </svg>
      ),
      // Dimension image for square shape
      square: (
        <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
          <rect
            x="10"
            y="10"
            width="60"
            height="60"
            fill="none"
            stroke="#B5A642"
            strokeWidth="2"
          />
          <text
            x="40"
            y="45"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            W
          </text>
          <line
            x1="10"
            y1="5"
            x2="70"
            y2="5"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text
            x="40"
            y="20"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            Width
          </text>
        </svg>
      ),
      // Dimension image for rectangle shape
      rectangle: (
        <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
          <rect
            x="10"
            y="20"
            width="60"
            height="40"
            fill="none"
            stroke="#B5A642"
            strokeWidth="2"
          />
          <text
            x="40"
            y="43"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            W×H
          </text>
          <line
            x1="10"
            y1="15"
            x2="70"
            y2="15"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <line
            x1="5"
            y1="20"
            x2="5"
            y2="60"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text
            x="40"
            y="30"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            Width
          </text>
          <text
            x="15"
            y="15"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            Height
          </text>
        </svg>
      ),
      // Dimension image for hexagonal shape
      hexagonal: (
        <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
          <polygon
            points="40,10 60,25 60,55 40,70 20,55 20,25"
            fill="none"
            stroke="#B5A642"
            strokeWidth="2"
          />
          <text
            x="40"
            y="45"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            W
          </text>
          <line
            x1="20"
            y1="5"
            x2="60"
            y2="5"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text
            x="40"
            y="20"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            Width
          </text>
        </svg>
      ),
      // Dimension image for octagon shape
      octagon: (
        <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
          <polygon
            points="30,10 50,10 65,25 65,55 50,70 30,70 15,55 15,25"
            fill="none"
            stroke="#B5A642"
            strokeWidth="2"
          />
          <text
            x="40"
            y="45"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            W
          </text>
          <line
            x1="15"
            y1="5"
            x2="65"
            y2="5"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <text
            x="40"
            y="20"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            Width
          </text>
        </svg>
      ),
      // Dimension image for hollow shape
      hollow: (
        <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="#B5A642"
            strokeWidth="2"
          />
          <circle
            cx="40"
            cy="40"
            r="20"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
          />
          <text
            x="40"
            y="30"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            OD
          </text>
          <text
            x="40"
            y="50"
            textAnchor="middle"
            className="text-xs fill-gray-600"
          >
            ID
          </text>
          <line
            x1="5"
            y1="40"
            x2="20"
            y2="40"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <line
            x1="60"
            y1="40"
            x2="75"
            y2="40"
            stroke="#B5A642"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
        </svg>
      ),
    };
    return shapeImages[shape] || shapeImages.round;
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                S
              </div>
              <span className="text-2xl font-bold text-gray-800">SKI</span>
            </div>

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
                <button className="text-gray-700 hover:text-[#B5A642] px-3 py-2 text-sm font-medium flex items-center">
                  Products <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {productCategories.map((product) => (
                    <a
                      key={product.id}
                      href="/products"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <i className={`${product.icon} mr-2`}></i>
                      {product.name}
                    </a>
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
                className="text-[#B5A642] border-b-2 border-[#B5A642] px-3 py-2 text-sm font-medium"
              >
                Weight Calculator
              </a>
            </nav>

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

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>

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
                className="block py-2 text-[#B5A642] font-medium"
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

      <section className="relative h-[400px] bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B5A642]/20 to-[#D4AF37]/20"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30h30v30H30V30zm15 15h15v15H45V45z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-medium tracking-wider">
                ENGINEERING TOOLS
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Weight Calculator
            </h1>
            <p className="text-xl md:text-2xl text-[#D4AF37] font-light mb-8">
              Calculate Material Weight for Different Shapes
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-lg flex items-center justify-center mr-6">
                <i className="fas fa-weight text-white text-2xl"></i>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Weight Calculator
                </h2>
                <p className="text-gray-600 text-lg">
                  Calculate material weight based on dimensions and shape
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Material
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(materialData).map(([key, data]) => (
                      <button
                        key={key}
                        onClick={() =>
                          setWeightCalc((prev) => ({ ...prev, material: key }))
                        }
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          weightCalc.material === key
                            ? "border-[#B5A642] bg-[#B5A642]/10 text-[#B5A642]"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium">{data.name}</div>
                        <div className="text-xs text-gray-500">
                          {data.density} g/cm³
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Shape
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { key: "round", name: "Round" },
                      { key: "square", name: "Square" },
                      { key: "rectangle", name: "Rectangle" },
                      { key: "hexagonal", name: "Hexagonal" },
                      { key: "octagon", name: "Octagon" },
                      { key: "hollow", name: "Hollow" },
                    ].map((shape) => (
                      <button
                        key={shape.key}
                        onClick={() =>
                          setWeightCalc((prev) => ({
                            ...prev,
                            shape: shape.key,
                          }))
                        }
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          weightCalc.shape === shape.key
                            ? "border-[#B5A642] bg-[#B5A642]/10 text-[#B5A642]"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium text-sm">{shape.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {weightCalc.shape === "round" && (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Diameter
                          </label>
                          <input
                            type="number"
                            name="diameter"
                            value={weightCalc.diameter}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                diameter: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                            placeholder="Enter diameter"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Unit
                          </label>
                          <select
                            name="diameterUnit"
                            value={weightCalc.diameterUnit}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                diameterUnit: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                          >
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Length
                          </label>
                          <input
                            type="number"
                            name="length"
                            value={weightCalc.length}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                length: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                            placeholder="Enter length"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Unit
                          </label>
                          <select
                            name="lengthUnit"
                            value={weightCalc.lengthUnit}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                lengthUnit: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                          >
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {weightCalc.shape === "square" && (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Width
                          </label>
                          <input
                            type="number"
                            name="width"
                            value={weightCalc.width}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                width: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                            placeholder="Enter width"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Unit
                          </label>
                          <select
                            name="widthUnit"
                            value={weightCalc.widthUnit}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                widthUnit: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                          >
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Length
                          </label>
                          <input
                            type="number"
                            name="length"
                            value={weightCalc.length}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                length: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                            placeholder="Enter length"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Unit
                          </label>
                          <select
                            name="lengthUnit"
                            value={weightCalc.lengthUnit}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                lengthUnit: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                          >
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {weightCalc.shape === "rectangle" && (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Width
                          </label>
                          <input
                            type="number"
                            name="width"
                            value={weightCalc.width}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                width: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                            placeholder="Enter width"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Unit
                          </label>
                          <select
                            name="widthUnit"
                            value={weightCalc.widthUnit}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                widthUnit: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                          >
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Height
                          </label>
                          <input
                            type="number"
                            name="height"
                            value={weightCalc.height}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                height: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                            placeholder="Enter height"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Unit
                          </label>
                          <select
                            name="heightUnit"
                            value={weightCalc.heightUnit}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                heightUnit: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                          >
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Length
                          </label>
                          <input
                            type="number"
                            name="length"
                            value={weightCalc.length}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                length: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                            placeholder="Enter length"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Unit
                          </label>
                          <select
                            name="lengthUnit"
                            value={weightCalc.lengthUnit}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                lengthUnit: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                          >
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {(weightCalc.shape === "hexagonal" ||
                    weightCalc.shape === "octagon") && (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Width (Across Flats)
                          </label>
                          <input
                            type="number"
                            name="width"
                            value={weightCalc.width}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                width: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                            placeholder="Enter width"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Unit
                          </label>
                          <select
                            name="widthUnit"
                            value={weightCalc.widthUnit}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                widthUnit: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                          >
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Length
                          </label>
                          <input
                            type="number"
                            name="length"
                            value={weightCalc.length}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                length: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                            placeholder="Enter length"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Unit
                          </label>
                          <select
                            name="lengthUnit"
                            value={weightCalc.lengthUnit}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                lengthUnit: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                          >
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {weightCalc.shape === "hollow" && (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Outer Diameter
                          </label>
                          <input
                            type="number"
                            name="outerDiameter"
                            value={weightCalc.outerDiameter}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                outerDiameter: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                            placeholder="Enter outer diameter"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Unit
                          </label>
                          <select
                            name="outerDiameterUnit"
                            value={weightCalc.outerDiameterUnit}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                outerDiameterUnit: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                          >
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Inner Diameter
                          </label>
                          <input
                            type="number"
                            name="innerDiameter"
                            value={weightCalc.innerDiameter}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                innerDiameter: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                            placeholder="Enter inner diameter"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Unit
                          </label>
                          <select
                            name="innerDiameterUnit"
                            value={weightCalc.innerDiameterUnit}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                innerDiameterUnit: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                          >
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Length
                          </label>
                          <input
                            type="number"
                            name="length"
                            value={weightCalc.length}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                length: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                            placeholder="Enter length"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Unit
                          </label>
                          <select
                            name="lengthUnit"
                            value={weightCalc.lengthUnit}
                            onChange={(e) =>
                              setWeightCalc((prev) => ({
                                ...prev,
                                lengthUnit: e.target.value,
                              }))
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                          >
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={weightCalc.quantity}
                      onChange={(e) =>
                        setWeightCalc((prev) => ({
                          ...prev,
                          quantity: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                      placeholder="Number of pieces"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={calculateWeight}
                    className="flex-1 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Calculate Weight
                  </button>
                  <button
                    onClick={clearCalculator}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200"
                  >
                    Clear
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Shape Preview
                  </h3>
                  {getShapeImage(weightCalc.shape)}
                  <p className="text-sm text-gray-600 mt-3">
                    {weightCalc.shape.charAt(0).toUpperCase() +
                      weightCalc.shape.slice(1)}{" "}
                    Shape
                  </p>
                </div>

                {weightCalc.result && (
                  <div className="bg-gradient-to-r from-[#B5A642]/10 to-[#D4AF37]/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                      Calculated Weight
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-[#B5A642]">
                          {weightCalc.result.kg}
                        </div>
                        <div className="text-sm text-gray-600">
                          Kilograms (kg)
                        </div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-[#B5A642]">
                          {weightCalc.result.lbs}
                        </div>
                        <div className="text-sm text-gray-600">
                          Pounds (lbs)
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-600">
                        Material: {materialData[weightCalc.material].name} |
                        Density: {materialData[weightCalc.material].density}{" "}
                        g/cm³
                      </p>
                    </div>
                  </div>
                )}

                {!weightCalc.result && (
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-calculator text-gray-400 text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Ready to Calculate
                    </h3>
                    <p className="text-gray-600">
                      Enter dimensions and click "Calculate Weight" to see
                      results
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    href="/contact-us"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
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