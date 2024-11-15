'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="">
      {/* Background Abstract Gradient Circles */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-pink-500 to-red-500 rounded-full opacity-20 blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Frosted Glass Form Container */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl p-10 max-w-md w-[90vw] md:w-[400px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-center text-4xl font-semibold text-white mb-8">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>

        {/* Toggle Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`transition-all duration-300 ${
              isLogin ? 'bg-white/20 text-white' : 'text-gray-400'
            } px-6 py-2 rounded-l-full border border-r-transparent`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`transition-all duration-300 ${
              !isLogin ? 'bg-white/20 text-white' : 'text-gray-400'
            } px-6 py-2 rounded-r-full border border-l-transparent`}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        <form className="flex flex-col space-y-5">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border-b border-gray-500 text-white py-3 focus:outline-none focus:border-white transition-colors"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-b border-gray-500 text-white py-3 focus:outline-none focus:border-white transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border-b border-gray-500 text-white py-3 focus:outline-none focus:border-white transition-colors"
          />

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition-all duration-300 font-semibold"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

