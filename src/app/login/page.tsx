"use client";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    interface LoginFormData {
        email: string;
        password: string;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: LoginFormData = { email, password };
        try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
            data
        );
        const user = response.data.user;
        const token = response.data.token;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);

        if(user.role_name){
            if(user.role_name === "Admin"){
                router.push("/admin/");
            }
        }
        } catch (error) {
        console.error(error);
        }
    };
    return (
        <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* Left Side: Company Info */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gray-100 p-10">
            <Image
            src="/favicon.png" // Replace with your logo path
            alt="Company Logo"
            width={150}
            height={150}
            />
            <h1 className="mt-8 text-2xl font-bold text-gray-800">
            Welcome to Adikaram Enterprises
            </h1>
            <p className="mt-4 text-center text-gray-600">
            &quot;Empowering innovation and delivering excellence every step of
            the way.&quot;
            </p>
            <Image
            src="/favicon.png" // Replace with your image path
            alt="Company Illustration"
            width={300}
            height={300}
            className="mt-10 rounded-lg shadow-md"
            />
        </div>

        {/* Right Side: Login Form */}
        <div className="flex flex-col justify-center items-center p-8 sm:p-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Login</h2>
            <form
            className="w-full max-w-md flex flex-col gap-6"
            onSubmit={handleSubmit}
            >
            <div>
                <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
                >
                Email
                </label>
                <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
                >
                Password
                </label>
                <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 transition"
            >
                Login
            </button>
            </form>
            <p className="mt-6 text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
            </a>
            </p>
        </div>
        </div>
    );
}
