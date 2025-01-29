import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ChatbotIntegration = () => {
  const [integrationSuccess, setIntegrationSuccess] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  const handleTestIntegration = async () => {
    setIsLoading(true);
    setFeedback("");
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const success = Math.random() > 0.5;
    if (success) {
      setIntegrationSuccess(true);
    } else {
      setFeedback("Integration test failed. Please verify your configuration and try again.");
    }
    setIsLoading(false);
  };

  const handleFeedback = () => {
    setFeedback("Thank you for your feedback. Our team will contact you within 24 hours.");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      {integrationSuccess && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200}
          colors={['#2563eb', '#1d4ed8', '#3b82f6', '#60a5fa', '#93c5fd']}
        />
      )}
      
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-6 sm:p-8 space-y-6 transition-all duration-300 ease-in-out">
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">
            BeyondChats
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
            Chatbot Integration & Testing
          </h2>
        </div>
        
        <button
          className="w-full md:w-auto px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mx-auto"
          onClick={() => window.open("https://yourwebsite.com", "_blank")}
        >
          <span>Preview Your BeyondChats Bot</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
          <h4 className="text-lg font-medium text-blue-800 mb-2">Need assistance with your bot?</h4>
          <div className="relative inline-block">
            <button
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              onClick={handleFeedback}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              Contact BeyondChats Support
            </button>
            {showTooltip && (
              <div className="absolute left-0 bottom-full mb-2 w-48 bg-blue-900 text-white text-sm rounded-lg py-2 px-3 shadow-lg">
                24/7 Support Available
                <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-blue-900"></div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            onClick={() => navigate("/integrate-instructions")}
          >
            <span>Integration Guide</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button
            className={`px-6 py-4 ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2`}
            onClick={handleTestIntegration}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Testing Your Bot...</span>
              </>
            ) : (
              <>
                <span>Test Integration</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </>
            )}
          </button>
        </div>

        {integrationSuccess && (
          <div className="animate-fadeIn space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Your BeyondChats Bot is Ready!
              </h3>
              <p className="text-blue-600 mt-2">Start engaging with your customers instantly.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                onClick={() => navigate("/admin-panel")}
              >
                BeyondChats Dashboard
              </button>
              <button
                className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                onClick={() => navigate("/chatbot")}
              >
                Start Chatting
              </button>
            </div>
          </div>
        )}

        {feedback && !integrationSuccess && (
          <div className={`mt-4 ${feedback.includes('failed') ? 'text-red-600' : 'text-blue-600'} text-sm md:text-base bg-blue-50 p-4 rounded-lg animate-fadeIn`}>
            <p>{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Add required keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default ChatbotIntegration;