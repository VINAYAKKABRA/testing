"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const heroSlides = [
    {
      title: "Premium Brass Alloy Extrusions",
      subtitle: "4500+ Sizes",
      description: "CRAFTING Excellence in Metal Solutions",
    },

    {
      title: "Pan India",
      subtitle: "Delivering excellence, nationwide",
      description: "SERVING Industries Nationally",
    },
  ];

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

  const stats = [
    { icon: "fas fa-calendar-alt", label: "Established in", value: "1947" },
    {
      icon: "fas fa-leaf",
      label: "Renewable Energy",
      value: "4.10",
      unit: "MW",
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
                  <a
                    href="/products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Extrusions
                  </a>
                  <a
                    href="/products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Rods & Bars
                  </a>
                  <a
                    href="/products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Custom Shapes
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
      <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
        {/* Background Pattern */}
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
                {heroSlides[currentSlide].description}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-2xl md:text-4xl text-[#D4AF37] font-light mb-8">
              {heroSlides[currentSlide].subtitle}
            </p>
            <a href="/alloys-products">
              <button className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Explore Now
              </button>
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-gradient-to-r from-[#B5A642] to-[#D4AF37]"
                  : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-lg flex items-center justify-center text-white font-bold text-2xl mr-4">
                S
              </div>
              <span className="text-4xl font-bold text-gray-800">SKI</span>
            </div>
            <p className="text-2xl text-[#B5A642] font-light italic mb-8">
              Shaping Excellence in
              <br />
              Brass Alloys
            </p>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-center text-gray-700 leading-relaxed">
            <p className="mb-6">
              Shri Krishna Metal Extruders Pvt. Ltd., Previously known as Shri
              Krishna Udyog, is headquartered in Bhandara, India, SKME has been
              a distinguished name in the Brass alloy extrusions industry since
              its inception in{" "}
              <span className="font-semibold text-[#B5A642]">1947</span>. SKME
              began as a humble workshop dedicated to creating exquisite brass
              utensils that cater to diverse industries. Over the decades, we
              have grown into a renowned name in the brass manufacturing sector,
              thanks to our commitment to excellence and our unique blend of
              traditional techniques with modern technology. As an{" "}
              <span className="font-semibold text-[#B5A642]">ISO 9001</span>
              -certified company has earned a stellar reputation, delivering
              over <span className="font-semibold text-[#B5A642]">
                2,400
              </span>{" "}
              customized shapes with an unwavering commitment to quality,
              innovation, and{" "}
              <span className="font-semibold text-[#B5A642]">
                timely delivery
              </span>
              .
            </p>

            <p className="mb-6">
              With an impressive annual production capacity of{" "}
              <span className="font-semibold text-[#B5A642]">23,000 MT</span>,
              SKI has emerged as a leader in the brass extrusion sector. Backed
              by cutting-edge infrastructure and a dedicated team of over{" "}
              <span className="font-semibold text-[#B5A642]">450</span> skilled
              professionals, we specialize in producing a diverse range of brass
              alloys. Our manufacturing capabilities are designed for
              versatility, accommodating dimensions from{" "}
              <span className="font-semibold text-[#B5A642]">
                1.5 mm to 125 mm
              </span>{" "}
              to cater to a wide array of industrial applications.
            </p>

            <p>
              In addition to our manufacturing excellence, SKI excels in{" "}
              <span className="font-semibold text-[#B5A642]">
                global logistics
              </span>
              , ensuring seamless, efficient delivery to clients worldwide.
              Recognized as a{" "}
              <span className="font-semibold text-[#B5A642]">
                multi-award-winning
              </span>{" "}
              organization, we continue to set new benchmarks in the industry,
              upholding a legacy of trust, innovation, and meticulous
              craftsmanship in Brass alloy extrusions.
            </p>
          </div>
        </div>
      </section>

      {/* Facts & Figures Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-800">FACTS</span>
              <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent"></span>
            </h2>
            <p className="text-xl text-gray-600">
              Where Scale Meets{" "}
              <span className="text-[#B5A642] font-semibold">Precision</span>,
              and Innovation Drives{" "}
              <span className="text-[#B5A642] font-semibold">Excellence</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-[#B5A642]/5 hover:to-[#D4AF37]/5"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-sm text-gray-600 mb-2 font-medium">
                  {stat.label}
                </h3>
                <div className="text-2xl font-bold text-gray-800 mb-1">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-sm text-gray-500 ml-1">
                      {stat.unit}
                    </span>
                  )}
                </div>
              </div>
            ))}
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
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
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
                    href="/tools"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tools
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

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;