import React from "react";
import { useNavigate } from "react-router-dom";

const IntegrateInstructions = () => {
  const navigate = useNavigate();

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Integrate Chatbot on Your Website
          </h2>

          <div className="my-6">
            <h4 className="text-lg text-gray-800">Easy Instructions:</h4>
            <pre className="bg-gray-100 p-4 text-sm text-gray-800 rounded">
              &lt;script src="https://dummy-chatbot.js"&gt;&lt;/script&gt;
            </pre>
            <p>Copy and paste the code in the &lt;head&gt; section of your website.</p>
          </div>

          <div>
            <button
              className="p-3 bg-blue-600 text-white rounded-lg"
              onClick={() => navigate("/email-instructions")}
            >
              Email Instructions to Developer
            </button>
          </div>

          <button
            className="my-6 p-3 bg-yellow-600 text-white rounded-lg"
            onClick={() => navigate("/chatbot-integration")}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrateInstructions;
