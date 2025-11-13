const FeatureCard = ({ icon, feature, slogan }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 flex flex-col items-start space-y-3 h-full">
    {/* Inline SVG Icon */}
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-50 text-purple-600 text-2xl mb-2">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#0a1e5e]">{feature}</h3>
    <p className="text-gray-500 text-base">{slogan}</p>
  </div>
);
