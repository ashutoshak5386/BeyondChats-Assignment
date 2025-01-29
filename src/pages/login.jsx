import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typedText, setTypedText] = useState("");

  const fullText = "Start your journey with an AI-powered chatbot tailored for your business. Log in to set up your first chatbot.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => fullText.slice(0, index + 1)); // Correctly slice the text
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Handle login logic
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/setup-organisation");
    } else {
      alert("Please enter your BeyondChats credentials to proceed.");
    }
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl max-md:max-w-md w-full">
          <div>
            <h2 className="lg:text-5xl text-3xl font-extrabold lg:leading-[55px] text-gray-800">
              Welcome to BeyondChats
            </h2>

            {/* Typewriter Effect Text */}
            <p className="text-sm mt-6 text-gray-800">
              {typedText}
              <span className="animate-blink">|</span>
            </p>
          </div>

          <form className="max-w-md md:ml-auto w-full" onSubmit={handleLogin}>
            <h3 className="text-gray-800 text-3xl font-extrabold mb-8">
              Sign in to BeyondChats
            </h3>

            <div className="space-y-4">
              <input
                name="email"
                type="email"
                required
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                name="password"
                type="password"
                required
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="w-full py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Log in & Set Up Chatbot
              </button>
            </div>

            <div className="my-4 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-800 text-center">or</p>
              <hr className="w-full border-gray-300" />
            </div>

            <div className="space-y-3">
              <button
                type="button"
                className="w-full flex items-center justify-center py-2.5 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
              >
                <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google Logo" className="mr-2" />
                Sign in with Google
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center py-2.5 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
              >
                <img src="https://img.icons8.com/ios-glyphs/24/000000/github.png" alt="GitHub Logo" className="mr-2" />
                Sign in with GitHub
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }

          .animate-blink {
            display: inline-block;
            font-weight: bold;
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
