import React from 'react';
import '../../assets/CSS/Blog.css'

const Blog = () => {
    return (
        <div className="grid grid-cols-1 gap-10 p-20 md:grid-cols-2 lg:grid-cols-2">
            <div className="shadow-xl card bg-base-100">
                <div className="card-body">
                    <h2 className="card-title">
                        How will you improve the performance of a React Application?
                    </h2>
                    <p>
                        1.Keeping component state local where necessary. <br />
                        2.Memoizing React components to prevent unnecessary re-renders.{" "}
                        <br /> 3.Code-splitting in React using dynamic import(). <br />{" "}
                        4.Windowing or list virtualization in React. <br />
                        5.Lazy loading images in React.
                    </p>
                </div>
            </div>
            <div className="shadow-xl card bg-base-100">
                <div className="card-body">
                    <h2 className="card-title">
                        What are the different ways to manage a state in a React
                        application?
                    </h2>
                    <p>
                        1.Local state. <br />
                        2.Global state. <br /> 3.Server state. <br /> 4.URL state.
                    </p>
                </div>
            </div>
            <div className="shadow-xl card bg-base-100">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>
                        The Prototypal Inheritance is a feature in javascript used to add
                        methods and properties in objects. It is a method by which an object
                        can inherit the properties and methods of another object.
                    </p>
                </div>
            </div>
            <div className="shadow-xl card bg-base-100">
                <div className="card-body">
                    <h2 className="card-title">
                        What is a unit test? Why should write unit tests?
                    </h2>
                    <p>
                        Unit tests are typically automated tests written and run by software
                        developers to ensure that a section of an application meets its
                        design and behaves as intended. In procedural programming, a unit
                        could be an entire module, but it is more commonly an individual
                        function or procedure.
                    </p>
                </div>
            </div>
            <div className="shadow-xl card bg-base-100">
                <div className="card-body">
                    <h2 className="card-title">
                        Why you do not set the state directly in React?
                    </h2>
                    <p>
                        One should never update the state directly because of the following
                        reasons: <br /> If you update it directly, calling the setState()
                        afterward may just replace the update you made. When you directly
                        update the state, it does not change this.state immediately.
                        Instead, it creates a pending state transition, and accessing it
                        after calling this method will only return the present value. You
                        will lose control of the state across all components.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;