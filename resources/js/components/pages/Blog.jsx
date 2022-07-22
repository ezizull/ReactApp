import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate();
    const navigateTo = (path, id) => {
        navigate(path, { state: { id: id } });
    };

    const [blogs, setBlogs] = useState([]);
    useEffect(async () => {
        await axios
            .get("http://localhost:8000/api/blogs")
            .then((response) => {
                setBlogs(response.data.blogs);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const upperSentence = (props) => {
        for (var i = 0; i < props.length; i++) {
            props[i] = props[i].charAt(0).toUpperCase() + props[i].slice(1);
        }

        return props.join(" ");
    };

    const lowerSentence = (props) => {
        for (var i = 0; i < props.length; i++) {
            props[i] = props[i].charAt(0).toLowerCase() + props[i].slice(1);
        }

        return props.slice(0, 2).join("-");
    };

    return (
        <section className="flex-col px-12 pb-20 min-h-screen h-full">
            <div className="flex-row space-x-6 justify-center mt-40 font-title">
                <div className="flex-col space-y-6 items-center w-1/2 h-auto">
                    {blogs.map((blog) => {
                        if (blog.id % 2 != 0 && blog.id < 10) {
                            const split = blog.title.split(" ");
                            const title = upperSentence(split);

                            const slug = lowerSentence(split);
                            return (
                                <div
                                    key={blog.id}
                                    onClick={() =>
                                        navigateTo(`/edit/${slug}`, blog.id)
                                    }
                                    className="post cursor-pointer flex-col bg-neutral-50 p-6 rounded w-full shadow h-40 transition-transform	ease-in-out duration-300 hover:scale-[1.02]"
                                >
                                    <h1 className="font-bold h-1/4 text-xl text-gray-800">
                                        {title}
                                    </h1>
                                    <p className="mt-4 h-3/4 text-gray-700">
                                        {blog.body}
                                    </p>
                                </div>
                            );
                        }
                    })}
                </div>
                <div className="flex-col space-y-6 items-center w-1/2 h-auto">
                    {blogs.map((blog) => {
                        if (blog.id % 2 == 0 && blog.id < 11) {
                            const split = blog.title.split(" ");
                            const title = upperSentence(split);

                            const slug = lowerSentence(split);
                            return (
                                <div
                                    key={blog.id}
                                    onClick={() =>
                                        navigateTo(`/edit/${slug}`, blog.id)
                                    }
                                    className="post cursor-pointer flex-col bg-neutral-50 p-6 rounded w-full shadow h-40 transition-transform	ease-in-out duration-300 hover:scale-[1.02]"
                                >
                                    <h1 className="font-bold h-1/4 text-xl text-gray-800">
                                        {title}
                                    </h1>
                                    <p className="mt-4 h-3/4 text-gray-700">
                                        {blog.body}
                                    </p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <div className="font-sans mt-10 w-full justify-center items-center">
                <Link to="/blogs/create">
                    <button
                        type="submit"
                        className="logo font-semibold text-base rounded bg-blue-500 text-white hover:bg-blue-600 h-12 p-1 w-36 shadow"
                    >
                        add new
                    </button>
                </Link>
            </div>
        </section>
    );
};
export default Blog;
