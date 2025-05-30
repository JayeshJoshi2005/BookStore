import React from "react";
import Navbar from "../components/Navbar"; // Ensure the path is correct

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0F172A] text-white p-6">
        <div className="max-w-screen-md mx-auto">
          <br />
          <br />
          <br />
          
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="mb-4">
            Welcome to <strong>BookStore</strong>, your one-stop destination for all things books! Whether you're an avid reader, a casual browser, or looking for a gift, we offer a vast selection of books across various genres, from timeless classics to the latest bestsellers.
          </p>
          <p className="mb-4">
            At <strong>BookStore</strong>, we believe in the power of reading to inspire, inform, and transform. Our mission is to provide a seamless and enjoyable experience for book lovers, ensuring you have access to the latest literary treasures and all-time favorites.
          </p>
          <p className="mb-4">
            Our user-friendly platform allows you to easily browse, search, and purchase books with just a few clicks. We are committed to delivering exceptional customer service and a passion for literature.
          </p>
          <p>
            Join our community of readers, explore new stories, and let <strong>BookStore</strong> be your gateway to a world of imagination.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
