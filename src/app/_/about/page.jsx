"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("overview");

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

  const milestones = [
    {
      year: "1988",
      title: "Company Founded",
      description:
        "SKI established in Mumbai, India with a vision to excel in brass alloy manufacturing.",
      icon: "fas fa-rocket",
    },
    {
      year: "1995",
      title: "First Major Expansion",
      description:
        "Expanded manufacturing facility to 5,000 sq.m with advanced extrusion equipment.",
      icon: "fas fa-industry",
    },
    {
      year: "2001",
      title: "ISO 9001 Certification",
      description:
        "Achieved ISO 9001 quality management certification, ensuring world-class standards.",
      icon: "fas fa-certificate",
    },
    {
      year: "2008",
      title: "Global Expansion",
      description:
        "Established international partnerships and began exporting to 25+ countries.",
      icon: "fas fa-globe",
    },
    {
      year: "2015",
      title: "Technology Upgrade",
      description:
        "Invested in state-of-the-art machinery and automation systems.",
      icon: "fas fa-cogs",
    },
    {
      year: "2020",
      title: "Sustainability Initiative",
      description:
        "Launched renewable energy program with 4.10 MW solar installation.",
      icon: "fas fa-leaf",
    },
    {
      year: "2023",
      title: "Production Milestone",
      description:
        "Achieved annual production capacity of 23,000 MT with 4500+ size variations.",
      icon: "fas fa-trophy",
    },
  ];

  const leadership = [
    {
      name: "Rajesh Kumar",
      position: "Chairman & Managing Director",
      experience: "35+ years",
      image: "/leadership-rajesh.jpg",
      bio: "Visionary leader who founded SKI in 1988 and has guided the company to become a global leader in brass alloy extrusions.",
      expertise: [
        "Strategic Planning",
        "Business Development",
        "Industry Relations",
      ],
    },
    {
      name: "Priya Sharma",
      position: "Chief Executive Officer",
      experience: "25+ years",
      image: "/leadership-priya.jpg",
      bio: "Operations expert with extensive experience in manufacturing excellence and quality management systems.",
      expertise: [
        "Operations Management",
        "Quality Systems",
        "Process Optimization",
      ],
    },
    {
      name: "Dr. Amit Patel",
      position: "Chief Technology Officer",
      experience: "20+ years",
      image: "/leadership-amit.jpg",
      bio: "Metallurgical engineer specializing in brass alloy development and advanced manufacturing technologies.",
      expertise: ["Metallurgy", "R&D", "Product Development"],
    },
    {
      name: "Sunita Gupta",
      position: "Chief Financial Officer",
      experience: "18+ years",
      image: "/leadership-sunita.jpg",
      bio: "Financial strategist with expertise in international business and sustainable growth initiatives.",
      expertise: [
        "Financial Planning",
        "International Trade",
        "Sustainability",
      ],
    },
  ];

  const values = [
    {
      title: "Quality Excellence",
      description:
        "Unwavering commitment to delivering products that exceed industry standards and customer expectations.",
      icon: "fas fa-star",
    },
    {
      title: "Innovation",
      description:
        "Continuous investment in research, technology, and process improvements to stay ahead of industry trends.",
      icon: "fas fa-lightbulb",
    },
    {
      title: "Customer Focus",
      description:
        "Building long-term partnerships through exceptional service, reliability, and customized solutions.",
      icon: "fas fa-handshake",
    },
    {
      title: "Sustainability",
      description:
        "Environmental responsibility through renewable energy, waste reduction, and sustainable manufacturing practices.",
      icon: "fas fa-leaf",
    },
    {
      title: "Integrity",
      description:
        "Conducting business with honesty, transparency, and ethical practices in all our relationships.",
      icon: "fas fa-shield-alt",
    },
    {
      title: "Excellence",
      description:
        "Pursuing perfection in every aspect of our operations, from manufacturing to customer service.",
      icon: "fas fa-medal",
    },
  ];

  const awards = [
    {
      year: "2023",
      title: "Export Excellence Award",
      organization: "Government of India",
      description:
        "Recognition for outstanding contribution to exports and foreign exchange earnings.",
    },
    {
      year: "2022",
      title: "Best Manufacturing Company",
      organization: "Indian Metal Industry Association",
      description:
        "Awarded for excellence in manufacturing processes and quality standards.",
    },
    {
      year: "2021",
      title: "Sustainability Leadership Award",
      organization: "Green Business Council",
      description:
        "Recognition for renewable energy initiatives and environmental responsibility.",
    },
    {
      year: "2020",
      title: "Innovation in Metallurgy",
      organization: "National Institute of Technology",
      description:
        "Award for breakthrough developments in brass alloy compositions.",
    },
    {
      year: "2019",
      title: "Quality Excellence Award",
      organization: "Bureau of Indian Standards",
      description:
        "Recognition for maintaining highest quality standards in manufacturing.",
    },
  ];

  const facilities = [
    {
      name: "Main Manufacturing Unit",
      area: "10,000 sq.m",
      capacity: "18,000 MT/year",
      equipment: [
        "6 Extrusion Presses",
        "Heat Treatment Furnaces",
        "Quality Testing Lab",
      ],
      description:
        "Primary production facility with state-of-the-art extrusion equipment and automated systems.",
    },
    {
      name: "Secondary Processing Unit",
      area: "3,500 sq.m",
      capacity: "5,000 MT/year",
      equipment: [
        "CNC Machining Centers",
        "Drawing Machines",
        "Surface Treatment",
      ],
      description:
        "Specialized facility for secondary operations and custom finishing processes.",
    },
    {
      name: "Quality Control Laboratory",
      area: "1,500 sq.m",
      capacity: "500 tests/day",
      equipment: ["Spectrometers", "Tensile Testing", "Metallography Lab"],
      description:
        "Advanced testing facility ensuring all products meet international standards.",
    },
    {
      name: "Research & Development Center",
      area: "2,000 sq.m",
      capacity: "R&D Projects",
      equipment: ["Pilot Plant", "Material Testing", "Simulation Software"],
      description:
        "Innovation hub for developing new alloys and improving manufacturing processes.",
    },
  ];

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
                className="text-[#B5A642] border-b-2 border-[#B5A642] px-3 py-2 text-sm font-medium"
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
              <a
                href="/products"
                className="block py-2 text-gray-700 hover:text-[#B5A642]"
              >
                Products
              </a>
              <a
                href="/about"
                className="block py-2 text-[#B5A642] font-medium"
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
      <section className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
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
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-medium tracking-wider">
                SINCE 1988
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              About SKI
            </h1>
            <p className="text-xl md:text-2xl text-[#D4AF37] font-light mb-8 max-w-3xl mx-auto">
              Three Decades of Excellence in Brass Alloy Manufacturing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200">
                Our Story
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-200">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gray-50 sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                id: "overview",
                name: "Company Overview",
                icon: "fas fa-building",
              },
              { id: "milestones", name: "Milestones", icon: "fas fa-timeline" },
              { id: "leadership", name: "Leadership", icon: "fas fa-users" },
              { id: "facilities", name: "Facilities", icon: "fas fa-industry" },
              { id: "awards", name: "Awards", icon: "fas fa-trophy" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      {activeTab === "overview" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gray-800">OUR </span>
                <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                  STORY
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to global leadership in brass alloy
                manufacturing
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-6">
                    Founded in{" "}
                    <span className="font-semibold text-[#B5A642]">1988</span>{" "}
                    in Mumbai, India, SKI began as a vision to create excellence
                    in brass alloy manufacturing. What started as a small
                    operation has grown into a globally recognized leader in the
                    industry, serving customers across{" "}
                    <span className="font-semibold text-[#B5A642]">
                      25+ countries
                    </span>
                    .
                  </p>
                  <p className="mb-6">
                    Our journey has been marked by continuous innovation,
                    unwavering commitment to quality, and a deep understanding
                    of our customers' evolving needs. Today, we operate from an{" "}
                    <span className="font-semibold text-[#B5A642]">
                      18,500 sq.m facility
                    </span>{" "}
                    with a team of over{" "}
                    <span className="font-semibold text-[#B5A642]">
                      450 skilled professionals
                    </span>
                    .
                  </p>
                  <p>
                    With an annual production capacity of{" "}
                    <span className="font-semibold text-[#B5A642]">
                      23,000 MT
                    </span>{" "}
                    and the ability to produce over{" "}
                    <span className="font-semibold text-[#B5A642]">
                      4,500 different sizes
                    </span>
                    , we continue to set new benchmarks in the brass alloy
                    extrusion industry.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#B5A642]/10 to-[#D4AF37]/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-industry text-white text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Manufacturing Excellence
                    </h3>
                    <p className="text-gray-600">
                      State-of-the-art facilities with cutting-edge technology
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Values */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="text-gray-800">OUR </span>
                  <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                    VALUES
                  </span>
                </h3>
                <p className="text-lg text-gray-600">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-[#B5A642]/5 hover:to-[#D4AF37]/5"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${value.icon} text-white text-xl`}></i>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Statistics */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">SKI at a Glance</h3>
                <p className="text-gray-300">
                  Key numbers that define our success
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">
                    35+
                  </div>
                  <div className="text-sm text-gray-300">
                    Years of Excellence
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">
                    450+
                  </div>
                  <div className="text-sm text-gray-300">Skilled Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">
                    25+
                  </div>
                  <div className="text-sm text-gray-300">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">
                    4500+
                  </div>
                  <div className="text-sm text-gray-300">Product Sizes</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Milestones Timeline */}
      {activeTab === "milestones" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gray-800">OUR </span>
                <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                  JOURNEY
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key milestones that shaped our path to excellence
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#B5A642] to-[#D4AF37] rounded-full"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                      }`}
                    >
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center ${
                              index % 2 === 0 ? "ml-auto mr-4" : "mr-auto ml-4"
                            }`}
                          >
                            <i
                              className={`${milestone.icon} text-white text-lg`}
                            ></i>
                          </div>
                          <div
                            className={
                              index % 2 === 0 ? "text-right" : "text-left"
                            }
                          >
                            <div className="text-2xl font-bold text-[#B5A642]">
                              {milestone.year}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Leadership Team */}
      {activeTab === "leadership" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gray-800">OUR </span>
                <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                  LEADERSHIP
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced leaders driving innovation and excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-white text-2xl"></i>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-[#B5A642] font-medium mb-2">
                          {leader.position}
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          Experience: {leader.experience}
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {leader.bio}
                        </p>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">
                            Areas of Expertise:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {leader.expertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-[#B5A642]/10 text-[#B5A642] rounded-full text-sm font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Facilities */}
      {activeTab === "facilities" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gray-800">OUR </span>
                <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                  FACILITIES
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art manufacturing and testing facilities
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-lg flex items-center justify-center mr-4">
                        <i className="fas fa-industry text-white text-lg"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {facility.name}
                        </h3>
                        <p className="text-[#B5A642] font-medium">
                          {facility.area} • {facility.capacity}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {facility.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        Key Equipment:
                      </h4>
                      <div className="space-y-1">
                        {facility.equipment.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <i className="fas fa-check-circle text-[#B5A642] mr-2"></i>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="text-gray-800">QUALITY </span>
                  <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                    CERTIFICATIONS
                  </span>
                </h3>
                <p className="text-lg text-gray-600">
                  International standards and certifications we maintain
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-certificate text-white text-xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    ISO 9001:2015
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Quality Management System certification ensuring consistent
                    quality standards
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-leaf text-white text-xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    ISO 14001
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Environmental Management System for sustainable
                    manufacturing practices
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-shield-alt text-white text-xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    OHSAS 18001
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Occupational Health and Safety Management System
                    certification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Awards & Recognition */}
      {activeTab === "awards" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gray-800">AWARDS & </span>
                <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                  RECOGNITION
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry recognition for our commitment to excellence
              </p>
            </div>

            <div className="space-y-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center">
                        <i className="fas fa-trophy text-white text-xl"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800">
                          {award.title}
                        </h3>
                        <span className="text-2xl font-bold text-[#B5A642]">
                          {award.year}
                        </span>
                      </div>
                      <p className="text-[#B5A642] font-medium mb-2">
                        {award.organization}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sustainability Section */}
            <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="text-gray-800">SUSTAINABILITY </span>
                  <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                    INITIATIVES
                  </span>
                </h3>
                <p className="text-lg text-gray-600">
                  Our commitment to environmental responsibility
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-solar-panel text-white text-xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    Renewable Energy
                  </h4>
                  <p className="text-2xl font-bold text-green-600 mb-2">
                    4.10 MW
                  </p>
                  <p className="text-gray-600 text-sm">
                    Solar power installation reducing carbon footprint
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-recycle text-white text-xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    Waste Reduction
                  </h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">95%</p>
                  <p className="text-gray-600 text-sm">
                    Material recycling and waste minimization programs
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-water text-white text-xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    Water Conservation
                  </h4>
                  <p className="text-2xl font-bold text-[#B5A642] mb-2">60%</p>
                  <p className="text-gray-600 text-sm">
                    Water recycling and conservation systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with SKI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust SKI for their copper
            alloy requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200">
              Get in Touch
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-200">
              Request Quote
            </button>
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
    </div>
  );
}

export default MainComponent;