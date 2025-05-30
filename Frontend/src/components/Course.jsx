import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        console.log(response.data);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Header Section */}
        <div className="p-20 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Discover a curated collection of books and courses designed to
            inspire, educate, and empower. Whether you're diving into a new
            topic or building on your knowledge, there's something here for
            everyone. Enjoy exploring, learning, and growing with us!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        {/* Book Cards Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.length > 0 ? (
            book.map((item) => <Cards key={item.id} item={item} />)
          ) : (
            <p className="col-span-full text-center">
              No courses available at the moment. Please check back later!
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Course;
