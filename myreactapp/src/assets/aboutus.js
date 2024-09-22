import React from 'react';
import { Book, Cloud, MessageCircle, Smartphone, Bot, Globe } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <Icon className="w-12 h-12 text-green-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">About AgriConnect</h1>
        
        <p className="text-xl text-center text-gray-700 mb-12">
          Empowering farmers with resources and community support to thrive in agriculture.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <FeatureCard icon={MessageCircle} title="Community Forum">
            <p>A space for farmers to ask questions, share experiences, and discuss agricultural challenges.</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Crop Management</li>
              <li>Livestock Care</li>
              <li>Soil Health</li>
              <li>Irrigation Techniques</li>
            </ul>
          </FeatureCard>
          
          <FeatureCard icon={Cloud} title="Weather and Alerts">
            <p>Real-time weather updates and forecasting to help farmers plan activities. Alerts for extreme weather conditions to help mitigate damage.</p>
          </FeatureCard>
          
          <FeatureCard icon={Smartphone} title="Mobile-Friendly Design">
            <p>Our site is fully responsive and mobile-friendly, catering to farmers who primarily access the internet via smartphones.</p>
          </FeatureCard>
        </div>
        
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-8">AI-Powered Chatbot for Instant Support</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon={Bot} title="24/7 Assistance">
            <p>Instant answers to FAQs about farming techniques, government schemes, crop care, and more.</p>
          </FeatureCard>
          
          <FeatureCard icon={Book} title="Personalized Recommendations">
            <p>Tailored advice on fertilizers, pesticides, and best practices based on your specific needs.</p>
          </FeatureCard>
          
          <FeatureCard icon={Globe} title="Multilingual Support">
            <p>Our chatbot supports multiple local languages to cater to farmers from different regions.</p>
          </FeatureCard>
        </div>
      </div>
      
      <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xl font-semibold">Thank you for being a part of AgriConnect!</p>
          <p className="mt-2">Together, we're cultivating a brighter future for agriculture.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;