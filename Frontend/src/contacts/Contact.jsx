import React from "react";
import Navbar from "../components/Navbar"; // Ensure correct import path

function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0F172A] text-white p-6">
        <div className="max-w-screen-md mx-auto">
          <br />
          <br />
          <br />

          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="mb-4">
            Have questions, feedback, or need assistance? We'd love to hear from you! Use the form below or reach out via the provided contact details.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 bg-gray-900 text-white border border-gray-600 rounded"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-gray-900 text-white border border-gray-600 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-2 bg-gray-900 text-white border border-gray-600 rounded"
                rows="4"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Contact Details</h2>
            <p>Email: support@bookstore.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Book Street, Read City, Knowledge Land</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
