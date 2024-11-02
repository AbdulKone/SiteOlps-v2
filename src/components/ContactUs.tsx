import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'reels',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">Get in Touch</h2>
            <p className="text-gray-300">
              Ready to bring your vision to life? Contact us for collaborations,
              inquiries, or custom projects.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-gray-300">contact@olympeusrecord.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-gray-300">Los Angeles, CA</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-8 rounded-lg"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2 text-white">
              Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white"
            >
              <option value="reels">Reels Production</option>
              <option value="clips">Music Video Production</option>
              <option value="photo">Photography</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactUs;