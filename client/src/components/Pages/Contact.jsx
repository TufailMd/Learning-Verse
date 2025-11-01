import React, { useState } from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", category: "", message: "" });
      setErrors({});
    }, 4000);
  };

  const contactReasons = [
    {
      icon: <ChatBubbleOutlineIcon fontSize="large" />,
      title: "Report an Issue",
      description: "Found a broken link or incorrect material? Let us know.",
      color: "bg-red-50 text-red-600 border-red-200",
    },
    {
      icon: <SendIcon fontSize="large" />,
      title: "Contribute Materials",
      description: "Have study notes or PDFs to share? We welcome contributions!",
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: "Suggest Features",
      description: "Got ideas to improve the platform? Share your suggestions.",
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      icon: <ChatBubbleOutlineIcon fontSize="large" />,
      title: "General Inquiry",
      description: "Questions or feedback about Learnify Verse? Reach out!",
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
  ];

  const categories = [
    "Report Broken Link",
    "Contribute Study Material",
    "Request New Content",
    "Feature Suggestion",
    "General Feedback",
    "Technical Support",
    "Other",
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="inline-block mb-4">
          <div className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            📬 We're Here to Help
          </div>
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
          Contact Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Have questions about study materials? Want to contribute? Need help
          navigating the platform? We're here to assist you every step of the
          way.
        </p>
      </section>

      {/* Contact Reasons */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          How Can We Help You?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactReasons.map((reason, index) => (
            <div
              key={index}
              className={`${reason.color} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-sm opacity-80">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <a
                  href="mailto:learnifyverse@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-teal-100 text-teal-600 p-3 rounded-lg group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <EmailIcon />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Us</p>
                    <p className="text-gray-900 font-semibold">
                      learnifyverse@gmail.com
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      We reply within 24 hours
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                    <RoomIcon />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Location</p>
                    <p className="text-gray-900 font-semibold">Bharūch, Gujarat</p>
                    <p className="text-xs text-gray-500 mt-1">India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    <ChatBubbleOutlineIcon />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Support Hours</p>
                    <p className="text-gray-900 font-semibold">24/7 Online</p>
                    <p className="text-xs text-gray-500 mt-1">Always here to help</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4 font-medium">
                  Connect with the team:
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-teal-600 hover:text-white text-gray-600 p-3 rounded-lg transition-colors"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-teal-600 hover:text-white text-gray-600 p-3 rounded-lg transition-colors"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href="mailto:learnifyverse@gmail.com"
                    className="bg-gray-100 hover:bg-teal-600 hover:text-white text-gray-600 p-3 rounded-lg transition-colors"
                  >
                    <EmailIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl shadow-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">By the Numbers</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-3xl font-bold">1000+</p>
                  <p className="text-sm opacity-90">Study Materials</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">7</p>
                  <p className="text-sm opacity-90">Semesters Covered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24h</p>
                  <p className="text-sm opacity-90">Avg. Response Time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircleIcon className="!w-24 !h-24 text-green-500 animate-bounce mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 text-lg mb-2">
                    Thank you for reaching out to Learnify Verse.
                  </p>
                  <p className="text-gray-500">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 ${
                          errors.name ? "border-red-500" : "border-gray-200"
                        } rounded-xl focus:outline-none focus:border-teal-500 transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        } rounded-xl focus:outline-none focus:border-teal-500 transition-colors`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 ${
                        errors.category ? "border-red-500" : "border-gray-200"
                      } rounded-xl focus:outline-none focus:border-teal-500 transition-colors bg-white`}
                    >
                      <option value="">Select a category...</option>
                      {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border-2 ${
                        errors.message ? "border-red-500" : "border-gray-200"
                      } rounded-xl focus:outline-none focus:border-teal-500 transition-colors resize-none`}
                      placeholder="Tell us more about your inquiry..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    Send Message
                    <SendIcon />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 py-10 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Answers
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                How can I contribute study materials?
              </h4>
              <p className="text-gray-600">
                Simply fill out the contact form above, select "Contribute Study
                Material" as the category, and let us know what you'd like to share.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                I found a broken link. What should I do?
              </h4>
              <p className="text-gray-600">
                Please report it using the contact form with the "Report Broken
                Link" category. Include the subject name and link if possible, and
                we'll fix it promptly.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Can I request materials for a specific subject?
              </h4>
              <p className="text-gray-600">
                Absolutely! Use the "Request New Content" category in the form above
                and specify which subject or semester you need materials for.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
