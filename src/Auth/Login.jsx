import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import backgroundImage from '../assets/background.jpg'; // Adjust path as per your project structure
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userCredentials = {
      email: data.email,
      password: data.password,
    };
    localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
    toast.success("Login successfully!");
    navigate("/TaskManagement");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100"   style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Username (Email)
          </label>
          <input
            id="email"
            type="email"
            className={`border ${errors.email ? "border-red-500" : "border-gray-300"} p-2 w-full rounded-lg`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
  
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            className={`border ${errors.password ? "border-red-500" : "border-gray-300"} p-2 w-full rounded-lg`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
  
        <div className="mt-6">
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default Login;
