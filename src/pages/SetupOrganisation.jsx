import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css";

function SetupOrganisation() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyUrl: '',
    companyDescription: ''
  });
  const [metaDescription, setMetaDescription] = useState('');
  const [scrapingStatus, setScrapingStatus] = useState([
    { url: 'home', status: 'pending', dataChunks: [] },
    { url: 'about', status: 'scraped', dataChunks: ['Company history', 'Mission statement'] },
    { url: 'contact', status: 'scraped', dataChunks: ['Contact form', 'Location info'] },
  ]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  const fullText = "BeyondChats: Powering AI-driven conversations. Set up your business chatbot today!";
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsFormVisible(true), 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMetaDescription('This is a dummy meta-description fetched from the URL.');
  };

  const handlePageClick = (page) => {
    setSelectedPage(prev => prev?.url === page.url ? null : page);
  };

  const handleNextSetup = () => {
    navigate("/chatbot-integration");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">
            BeyondChats
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
            Setup Your Organization
          </h2>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 mb-8">
          <p className="text-sm text-blue-800 font-mono">
            {typedText}<span className="inline-block animate-pulse">|</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 transition-all duration-300 ease-in-out">
          <div>
            <label className="block text-sm font-medium mb-2 text-blue-700">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-blue-50/30"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-blue-700">Company Website URL</label>
            <input
              type="url"
              name="companyUrl"
              value={formData.companyUrl}
              onChange={handleInputChange}
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-blue-50/30"
              placeholder="https://your-company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-blue-700">Company Description</label>
            <textarea
              name="companyDescription"
              value={formData.companyDescription}
              onChange={handleInputChange}
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-blue-50/30"
              rows="4"
              placeholder="Tell us about your company..."
            ></textarea>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              type="submit" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
            >
              Analyze Website
            </button>
            {metaDescription && (
              <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg border border-blue-100">
                Meta Description: {metaDescription}
              </div>
            )}
          </div>
        </form>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Detected Pages
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            {scrapingStatus.map((page) => (
              <div
                key={page.url}
                onClick={() => handlePageClick(page)}
                className={`
                  p-4 border rounded-lg cursor-pointer transition-all duration-200
                  ${page.status === 'scraped' ? 'bg-gradient-to-r from-blue-50 to-green-50 border-blue-200' : 'bg-gradient-to-r from-blue-50 to-yellow-50 border-yellow-200'}
                  ${selectedPage?.url === page.url ? 'ring-2 ring-blue-400' : ''}
                  hover:shadow-md
                `}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium capitalize text-blue-800">{page.url}</p>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    page.status === 'scraped' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {page.status}
                  </span>
                </div>
                
                {selectedPage?.url === page.url && page.dataChunks.length > 0 && (
                  <div className="mt-3 pl-4 border-l-2 border-blue-200">
                    {page.dataChunks.map((chunk, index) => (
                      <p key={index} className="text-sm text-gray-600 my-1">• {chunk}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleNextSetup}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            Continue to Integration
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetupOrganisation;