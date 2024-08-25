import React from 'react';
import b1 from "../assets/img/blog/b1.webp";
import b2 from "../assets/img/blog/b2.webp";
import b3 from "../assets/img/blog/b3.webp";

const blog = [
    {
        img: b1,
        title: "Grow your software & engineering career.",
        desc: "Explore steps to start and advance your software engineering career, from basic skills to growth strategies."
    },
    {
        img: b2,
        title: "Top 10 Tips for Coding Efficiency",
        desc: "Improve your coding efficiency with these top tips, designed to help you write cleaner, faster, and more effective code."
    },
    {
        img: b3,
        title: "Future of Software Development",
        desc: "Discover the latest trends in software development and how they are shaping the future of the tech industry."
    },
];

function Blog() {
  return (
    <>
    <section className='blog' id='blog'>
        <h3>OUR BLOG</h3>
        <h2>Recent from our Blog</h2>
        <div className='blogs'>
            {blog.map((post, index) => (
                <div className='blog-card' key={index}>
                    <img src={post.img} alt={post.title} />
                    <h4>{post.title}</h4>
                    <p>{post.desc}</p>
                </div>
            ))}
        </div>
    </section>
    </>
  );
}

export default Blog;
