import { useState, useEffect, useContext } from "react";
import Heading from "./Shared/Heading";
import { ThemeContext } from "../provider/ThemeProvider";

const Blog = () => {
  const { isToggled } = useContext(ThemeContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/blogs.json");
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto">
      <Heading
        title="Our Latest Blogs"
        subtitle="Explore our latest articles to stay updated on everything cinema, entertainment, and more!"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 lg:px-0">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`card card-compact h-[219px] md:h-[255px] lg:h-[330px]  shadow-xl
                shadow-primary rounded-xl ${
                  isToggled
                    ? "bg-[#ffffff] text-darkSlate"
                    : "bg-card text-ivory"
                }`}
          >
            {/* Blog Image */}

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-24 md:h-32 lg:h-44 object-cover  rounded-t-2xl"
            />

            {/* Blog Content */}
            <div className="p-3 lg:p-6 space-y-2">
              <h3
                className="text-sm md:text-base lg:text-xl font-bold"
                title={blog.title}
              >
                {blog.title?.substring(0, 20)}
              </h3>
              <p
                className="text-xs md:text-sm lg:text-base flex-grow opacity-70 pb-1 lg:pb-3"
                title={blog.excerpt}
              >
                {blog.excerpt?.substring(0, 60)}
              </p>
              <a
                href={blog.link}
                className=" font-semibold border px-2 rounded-full 
                text-xs lg:text-base"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
