import React, {useState} from "react";
import {useForm} from "react-hook-form";

export default function Regiter(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex-col font-sans mt-1 justify-center items-center">
      <h1 className="text-xl font-bold text-blue-500 mb-4">REGISTER PAGE</h1>
      <form
        className="flex flex-col w-80 mb-6 h-full py-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-col w-full space-y-1">
          <div className="input w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-auto ml-3 z-10 fill-gray-500 hover:fill-gray-600"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <input
              className="py-2 pl-9 pr-2 -ml-7 w-full h-full border focus:outline-none focus:border-blue-600 rounded text-gray-800 drop-shadow"
              type="text"
              {...register("username", {required: true})}
            />
          </div>

          {errors.username && (
            <p className="text-sm text-red-400">you must have a username</p>
          )}
        </div>
        <div className="flex-col mt-3.5 w-full space-y-1">
          <div className="input w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-auto ml-3 z-10 fill-gray-500 hover:fill-gray-600"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <input
              className="py-2 pl-9 pr-2 -ml-7 w-full h-full border focus:outline-none focus:border-blue-600 rounded text-gray-800 drop-shadow"
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
          </div>

          {errors.password && (
            <p className="text-sm text-red-400">
              password must contain 6 to 20 characters <br />
              at least one numeric digit <br />
              at least one uppercase <br />
              at least one lowercase letter
            </p>
          )}
        </div>
        <div className="flex-col mt-3.5 w-full space-y-1">
          <div className="input w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-auto z-10 ml-3 fill-gray-500 hover:fill-gray-600"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            <input
              className=" py-2 pl-9 pr-2 -ml-7 w-full h-full border focus:outline-none focus:border-blue-600 rounded text-gray-800 drop-shadow"
              type="text"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </div>

          {errors.email && (
            <p className="text-sm text-red-400">please check the email</p>
          )}
        </div>
        <div className="flex-col mt-3.5 w-full space-y-1">
          <div
            className="list w-full h-full bg-white border focus:outline-none focus:border-blue-600 text-gray-800 drop-shadow"
            {...register("gender", {required: true})}
          >
            <div className="list-title">Gender</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 z-10 mr-3 fill-gray-500 hover:fill-gray-600 opacity-100"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
            <div className="list-option flex-col">
              <label>
                <input type="radio" value="Female" name="gender" />
                <span>Female</span>
              </label>
              <label>
                <input type="radio" value="Male" name="gender" />
                <span>Male</span>
              </label>
            </div>
          </div>

          {errors.gender && (
            <p className="text-sm text-red-400">please chose your gender</p>
          )}
        </div>
        <div className="input w-full mt-8 justify-center items-center">
          <button
            type="submit"
            className="logo bg-blue-500 text-white hover:bg-blue-600 h-4/5 p-1 rounded w-32"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
