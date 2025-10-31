import React from 'react';

function ShowCard({ icon, title, description, isBeta }) {
  return (
    <div className=" relative flex flex-col items-center bg-white shadow-lg hover:shadow-2xl rounded-2xl p-8 w-80 transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      {/* Beta Badge */}
      {isBeta && (
        <div className="absolute top-3 right-3 bg-yellow-400 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm">
          updated soon
        </div>
      )}

      {/* Icon */}
      <div className="text-5xl text-teal-600 mb-4">{icon}</div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ShowCard;
// D:\Web Development\Session 5(Mini project)\react\LearningSM\client\src\components\Cards\ShowCard.jsx