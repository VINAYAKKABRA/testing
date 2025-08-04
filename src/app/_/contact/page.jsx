"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("contact");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [careerData, setCareerData] = React.useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

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

  const offices = [
    {
      name: "Head Office - Mumbai",
      address:
        "Plot No. 123, Industrial Area, Andheri East, Mumbai - 400069, Maharashtra, India",
      phone: "+91 22 2821 4567",
      email: "info@ski-alloys.com",
      hours: "Monday - Saturday: 9:00 AM - 6:00 PM",
      type: "headquarters",
      coordinates: "19.1136° N, 72.8697° E",
    },
    {
      name: "Manufacturing Unit",
      address:
        "Survey No. 45/2, MIDC Industrial Area, Aurangabad - 431136, Maharashtra, India",
      phone: "+91 240 2345 678",
      email: "production@ski-alloys.com",
      hours: "Monday - Saturday: 8:00 AM - 8:00 PM",
      type: "manufacturing",
      coordinates: "19.8762° N, 75.3433° E",
    },
    {
      name: "Export Division",
      address:
        "Unit 12, Export House, Ballard Estate, Mumbai - 400001, Maharashtra, India",
      phone: "+91 22 6789 0123",
      email: "export@ski-alloys.com",
      hours: "Monday - Friday: 9:30 AM - 6:30 PM",
      type: "export",
      coordinates: "18.9388° N, 72.8354° E",
    },
  ];

  const departments = [
    {
      name: "General Inquiries",
      icon: "fas fa-info-circle",
      email: "info@ski-alloys.com",
      phone: "+91 22 2821 4567",
      description: "For general questions about our company and services",
    },
    {
      name: "Sales Team",
      icon: "fas fa-handshake",
      email: "sales@ski-alloys.com",
      phone: "+91 22 2821 4568",
      description: "Product inquiries, quotes, and order placement",
    },
    {
      name: "Technical Support",
      icon: "fas fa-cogs",
      email: "technical@ski-alloys.com",
      phone: "+91 22 2821 4569",
      description:
        "Technical specifications, material properties, and engineering support",
    },
    {
      name: "Quality Assurance",
      icon: "fas fa-certificate",
      email: "quality@ski-alloys.com",
      phone: "+91 22 2821 4570",
      description: "Quality concerns, certifications, and testing reports",
    },
    {
      name: "Export Department",
      icon: "fas fa-globe",
      email: "export@ski-alloys.com",
      phone: "+91 22 6789 0123",
      description: "International orders, shipping, and export documentation",
    },
    {
      name: "Human Resources",
      icon: "fas fa-users",
      email: "careers@ski-alloys.com",
      phone: "+91 22 2821 4571",
      description: "Career opportunities, recruitment, and employee relations",
    },
  ];

  const validateForm = (data, isCareer = false) => {
    const newErrors = {};

    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!data.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(data.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (isCareer) {
      if (!data.position.trim()) newErrors.position = "Position is required";
      if (!data.experience.trim())
        newErrors.experience = "Experience is required";
      if (!data.coverLetter.trim())
        newErrors.coverLetter = "Cover letter is required";
    } else {
      if (!data.company.trim()) newErrors.company = "Company is required";
      if (!data.subject.trim()) newErrors.subject = "Subject is required";
      if (!data.message.trim()) newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e, isCareer = false) => {
    e.preventDefault();
    const data = isCareer ? careerData : formData;
    const newErrors = validateForm(data, isCareer);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      if (isCareer) {
        setCareerData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          resume: null,
          coverLetter: "",
        });
      } else {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });
      }
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e, isCareer = false) => {
    const { name, value } = e.target;
    if (isCareer) {
      setCareerData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

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
              <button className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200">
                Contact
              </button>
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
              <button className="mt-4 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white px-6 py-2 rounded-full">
                Contact
              </button>
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
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-[#D4AF37] font-light mb-8 max-w-3xl mx-auto">
              Ready to discuss your copper alloy requirements? We're here to
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveTab("contact")}
                className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200"
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab("locations")}
                className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                Find Locations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-6 bg-gradient-to-r from-[#B5A642] to-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="flex items-center justify-center space-x-3">
              <i className="fas fa-phone text-xl"></i>
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-sm opacity-90">+91 22 2821 4567</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <i className="fas fa-envelope text-xl"></i>
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-sm opacity-90">info@ski-alloys.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <i className="fas fa-clock text-xl"></i>
              <div>
                <div className="font-semibold">Business Hours</div>
                <div className="text-sm opacity-90">
                  Mon-Sat: 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gray-50 sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "contact", name: "Contact Form", icon: "fas fa-envelope" },
              {
                id: "departments",
                name: "Departments",
                icon: "fas fa-building",
              },
              {
                id: "locations",
                name: "Locations",
                icon: "fas fa-map-marker-alt",
              },
              { id: "careers", name: "Careers", icon: "fas fa-briefcase" },
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

      {/* Contact Form */}
      {activeTab === "contact" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gray-800">SEND US A </span>
                <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                  MESSAGE
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have a question or need a quote? Fill out the form below and
                we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <form onSubmit={(e) => handleSubmit(e, false)}>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => handleInputChange(e, false)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request Quote</option>
                      <option value="technical">Technical Support</option>
                      <option value="quality">Quality Concern</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange(e, false)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange(e, false)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange(e, false)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange(e, false)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent ${
                          errors.company ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your company name"
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange(e, false)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter message subject"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange(e, false)}
                      rows="6"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your message or requirements"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        <span className="text-green-700">
                          Message sent successfully! We'll get back to you soon.
                        </span>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-paper-plane mr-2"></i>
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#B5A642]/10 to-[#D4AF37]/10 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Why Choose SKI?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="fas fa-clock text-[#B5A642] mt-1"></i>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Quick Response
                        </h4>
                        <p className="text-gray-600 text-sm">
                          We respond to all inquiries within 24 hours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="fas fa-user-tie text-[#B5A642] mt-1"></i>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Expert Consultation
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Technical experts to guide your material selection
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="fas fa-calculator text-[#B5A642] mt-1"></i>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Custom Quotes
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Detailed pricing for your specific requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="fas fa-shipping-fast text-[#B5A642] mt-1"></i>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Global Delivery
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Worldwide shipping with tracking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="font-semibold text-[#B5A642]">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Saturday</span>
                      <span className="font-semibold text-[#B5A642]">
                        9:00 AM - 2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-[#B5A642]/10 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <i className="fas fa-info-circle text-[#B5A642] mr-2"></i>
                      For urgent matters outside business hours, please email us
                      and we'll respond as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Departments */}
      {activeTab === "departments" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gray-800">OUR </span>
                <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                  DEPARTMENTS
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with the right team for your specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-[#B5A642]/5 hover:to-[#D4AF37]/5"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${dept.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {dept.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <i className="fas fa-envelope text-[#B5A642]"></i>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-gray-700 hover:text-[#B5A642]"
                      >
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <i className="fas fa-phone text-[#B5A642]"></i>
                      <a
                        href={`tel:${dept.phone}`}
                        className="text-gray-700 text-sm hover:text-[#B5A642]"
                      >
                        {dept.phone}
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="w-full bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                      Contact Department
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Locations */}
      {activeTab === "locations" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gray-800">OUR </span>
                <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                  LOCATIONS
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit us at our offices and manufacturing facilities across
                India
              </p>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-96 flex items-center justify-center border border-gray-300">
                <div className="text-center">
                  <i className="fas fa-map text-6xl text-[#B5A642] mb-4"></i>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-gray-600">
                    Map integration would be implemented here
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Showing SKI locations across India
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                          office.type === "headquarters"
                            ? "bg-gradient-to-r from-[#B5A642] to-[#D4AF37]"
                            : office.type === "manufacturing"
                            ? "bg-gradient-to-r from-blue-500 to-blue-600"
                            : "bg-gradient-to-r from-green-500 to-green-600"
                        }`}
                      >
                        <i
                          className={`fas ${
                            office.type === "headquarters"
                              ? "fa-building"
                              : office.type === "manufacturing"
                              ? "fa-industry"
                              : "fa-globe"
                          } text-white text-lg`}
                        ></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {office.name}
                        </h3>
                        <span
                          className={`text-sm px-2 py-1 rounded-full ${
                            office.type === "headquarters"
                              ? "bg-[#B5A642]/10 text-[#B5A642]"
                              : office.type === "manufacturing"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {office.type.charAt(0).toUpperCase() +
                            office.type.slice(1)}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <i className="fas fa-map-marker-alt text-[#B5A642] mt-1"></i>
                        <p className="text-gray-700 text-sm">
                          {office.address}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-phone text-[#B5A642]"></i>
                        <a
                          href={`tel:${office.phone}`}
                          className="text-gray-700 text-sm hover:text-[#B5A642]"
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-envelope text-[#B5A642]"></i>
                        <a
                          href={`mailto:${office.email}`}
                          className="text-gray-700 text-sm hover:text-[#B5A642]"
                        >
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-clock text-[#B5A642]"></i>
                        <p className="text-gray-700 text-sm">{office.hours}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-compass text-[#B5A642]"></i>
                        <p className="text-gray-700 text-sm">
                          {office.coordinates}
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                        Get Directions
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200">
                        <i className="fas fa-phone"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Careers */}
      {activeTab === "careers" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gray-800">JOIN OUR </span>
                <span className="bg-gradient-to-r from-[#B5A642] to-[#D4AF37] bg-clip-text text-transparent">
                  TEAM
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Build your career with a leading copper alloy manufacturer
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Career Form */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Career Inquiry Form
                </h3>
                <form onSubmit={(e) => handleSubmit(e, true)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={careerData.name}
                        onChange={(e) => handleInputChange(e, true)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={careerData.email}
                        onChange={(e) => handleInputChange(e, true)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={careerData.phone}
                        onChange={(e) => handleInputChange(e, true)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Position of Interest *
                      </label>
                      <select
                        name="position"
                        value={careerData.position}
                        onChange={(e) => handleInputChange(e, true)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent ${
                          errors.position ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select Position</option>
                        <option value="engineer">Metallurgical Engineer</option>
                        <option value="production">Production Manager</option>
                        <option value="quality">
                          Quality Control Specialist
                        </option>
                        <option value="sales">Sales Executive</option>
                        <option value="technician">
                          Production Technician
                        </option>
                        <option value="other">Other</option>
                      </select>
                      {errors.position && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.position}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <select
                      name="experience"
                      value={careerData.experience}
                      onChange={(e) => handleInputChange(e, true)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent ${
                        errors.experience ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select Experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="11-15">11-15 years</option>
                      <option value="15+">15+ years</option>
                    </select>
                    {errors.experience && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.experience}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Resume/CV
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#B5A642] transition-colors">
                      <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
                      <p className="text-gray-600">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          setCareerData((prev) => ({ ...prev, resume: file }));
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cover Letter *
                    </label>
                    <textarea
                      name="coverLetter"
                      value={careerData.coverLetter}
                      onChange={(e) => handleInputChange(e, true)}
                      rows="6"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#B5A642] focus:border-transparent ${
                        errors.coverLetter
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Tell us why you want to join SKI and what you can bring to our team..."
                    ></textarea>
                    {errors.coverLetter && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coverLetter}
                      </p>
                    )}
                  </div>

                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        <span className="text-green-700">
                          Application submitted successfully! We'll review and
                          get back to you.
                        </span>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#B5A642] to-[#D4AF37] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Submitting Application...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-paper-plane mr-2"></i>
                        Submit Application
                      </span>
                    )}
                  </button>
                </form>
              </div>

              {/* Career Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#B5A642]/10 to-[#D4AF37]/10 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Why Work at SKI?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="fas fa-chart-line text-[#B5A642] mt-1"></i>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Career Growth
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Clear advancement paths and skill development programs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="fas fa-users text-[#B5A642] mt-1"></i>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Great Team
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Work with 450+ skilled professionals and industry
                          experts
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="fas fa-cogs text-[#B5A642] mt-1"></i>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Latest Technology
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Work with cutting-edge manufacturing equipment
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="fas fa-heart text-[#B5A642] mt-1"></i>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Benefits Package
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Comprehensive health insurance, retirement plans, and
                          more
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Current Openings
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Metallurgical Engineer",
                        dept: "R&D",
                        type: "Full-time",
                      },
                      {
                        title: "Production Manager",
                        dept: "Manufacturing",
                        type: "Full-time",
                      },
                      {
                        title: "Quality Control Specialist",
                        dept: "Quality",
                        type: "Full-time",
                      },
                      {
                        title: "Sales Executive",
                        dept: "Sales",
                        type: "Full-time",
                      },
                      {
                        title: "Production Technician",
                        dept: "Manufacturing",
                        type: "Full-time",
                      },
                    ].map((job, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#B5A642]/5 transition-colors"
                      >
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {job.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {job.dept} • {job.type}
                          </p>
                        </div>
                        <button className="text-[#B5A642] hover:text-[#D4AF37] font-medium text-sm">
                          View Details
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
                  +91 22 2821 4567
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