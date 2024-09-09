import React from "react";
import "../../assets/CSS/Blog.css"; 
const Blog = () => {
  return (
    <div className="p-6 md:p-12 lg:p-16">
      <div className="grid grid-cols-1 gap-10 pt-16 md:grid-cols-2 lg:grid-cols-2">
        {[
          {
            title:
              "How will you improve the performance of a React Application?",
            content:
              "1. Keeping component state local where necessary. \n2. Memoizing React components to prevent unnecessary re-renders. \n3. Code-splitting in React using dynamic import(). \n4. Windowing or list virtualization in React. \n5. Lazy loading images in React.",
          },
          {
            title:
              "What are the different ways to manage a state in a React application?",
            content:
              "1. Local state. \n2. Global state. \n3. Server state. \n4. URL state.",
          },
          {
            title: "How does prototypical inheritance work?",
            content:
              "The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.",
          },
          {
            title: "What is a unit test? Why should write unit tests?",
            content:
              "Unit tests are typically automated tests written and run by software developers to ensure that a section of an application meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.",
          },
          {
            title: "Why you do not set the state directly in React?",
            content:
              "One should never update the state directly because of the following reasons: \nIf you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.",
          },
        ].map((post, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white rounded-lg shadow-lg"
          >
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-800 uppercase border-b-2 border-gray-500">
                {post.title}
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                {post.content.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
