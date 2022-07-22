import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form(props) {
    const location = useLocation();
    const [edit, setEdit] = useState([]);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: edit,
    });

    const button = {
        to: "update",
    };

    const id = location.state ? location.state.id : "";
    useEffect(async () => {
        if (id) {
            await axios
                .get(`http://localhost:8000/api/edit/${id}`)
                .then((response) => {
                    reset(response.data.blog);
                    setEdit(response.data.blog);
                    // console.log(response.data.blog);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [reset, watch]);

    const navigate = useNavigate();
    const onSubmit = async (post) => {
        if (id) {
            if (button.to == "update") {
                await axios
                    .put(`http://localhost:8000/api/update/${id}`, {
                        id: id,
                        title: post.title,
                        body: post.body,
                    })
                    .then((response) => {
                        console.log(JSON.stringify(response.data));
                    })
                    .catch((error) => {
                        console.log("ERROR:: ", error.response);
                    });
            }

            if (button.to == "delete") {
                await axios.delete(`http://localhost:8000/api/delete/${id}`);
                navigate("../blogs");
            }
        } else {
            console.log(post.title);
            console.log(post.body);
            await axios
                .post("http://localhost:8000/api/create", {
                    id: id,
                    title: post.title,
                    body: post.body,
                })
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    navigate("../blogs");
                })
                .catch((error) => {
                    console.log("ERROR:: ", error.response);
                });
        }
    };

    return (
        <div className="flex-col font-sans mt-1 justify-center items-center">
            {/* {id ? console.log(edit) : ""} */}
            <h1 className="text-xl font-bold text-blue-500 mb-4">FORM PAGE</h1>
            <form
                className="font-title w-80 mb-6 h-full py-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex-col w-full space-y-1">
                    <div className="input w-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-auto ml-3 z-10 fill-gray-500 hover:fill-gray-600"
                            viewBox="0 0 16 16"
                        >
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                        </svg>
                        <input
                            className="font-semibold py-2 pl-9 pr-2 -ml-7 w-full h-full border focus:outline-none focus:border-blue-600 rounded text-gray-800 drop-shadow"
                            defaultValue={edit.title ?? ""}
                            {...register("title", {
                                required: true,
                            })}
                        />
                    </div>

                    {errors.title && (
                        <p className="text-sm text-red-400">
                            the title post can't be empty
                        </p>
                    )}
                </div>

                <div className="flex-col mt-3.5 w-full h-auto space-y-1">
                    <div className="items-start w-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-auto ml-3 mt-3 z-10 fill-gray-500 hover:fill-gray-600"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                        </svg>

                        <textarea
                            className="py-2 pl-9 pr-2 -ml-7 w-full transition text-sm
			  ease-in-out h-24 resize-y border focus:outline-none focus:border-blue-600 rounded text-gray-800 drop-shadow"
                            rows={3}
                            defaultValue={edit.body ?? ""}
                            {...register("body", {
                                required: true,
                            })}
                        ></textarea>
                    </div>
                    {errors.body && (
                        <p className="text-sm text-red-400">
                            the body post can't be empty
                        </p>
                    )}
                </div>
                <div
                    className={`${
                        id ? "mt-10" : "mt-8"
                    } input w-full justify-around items-center`}
                >
                    <button
                        type="submit"
                        className="logo bg-blue-500 text-white hover:bg-blue-600 h-4/5 p-1 rounded w-32"
                        onClick={() => {
                            button.to = "update";
                        }}
                    >
                        {id ? "update" : "submit"}
                    </button>
                    {id && (
                        <button
                            type="submit"
                            className="logo bg-red-500 text-white hover:bg-red-600 h-4/5 p-1 rounded w-32"
                            onClick={() => {
                                button.to = "delete";
                            }}
                        >
                            delete
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
