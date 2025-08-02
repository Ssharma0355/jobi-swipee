// pages/login.jsx or app/login/page.jsx
import React from 'react';

const LoginPage = () => {
    return (
        <main className="flex flex-col md:flex-row h-screen w-full bg-gray-900 text-white">
            {/* Left Panel - hidden on small screens */}
            <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-gray-800 to-gray-700">
                <div className="text-center px-8">
                    <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
                    <p className="text-lg text-gray-300">
                        This is your custom panel. You can add branding, images, or welcome text here.
                    </p>
                </div>
            </div>

            {/* Right Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 sm:px-10">
                <form className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white py-3 rounded-md"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </main>
    );
};

export default LoginPage;
