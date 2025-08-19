import React from "react";
import profile from "../../assets/profile.png";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-[250px] flex-shrink-0">
      {/* Top Card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        {/* Cover Image */}
        <div className="h-16 bg-gradient-to-r from-blue-400 to-blue-600"></div>

        {/* Profile Section */}
        <div className="flex flex-col items-center -mt-8 px-4 pb-4">
          <img
            src={profile}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-white object-cover"
          />
          <h2 className="mt-2 font-semibold text-gray-800 text-sm md:text-base">
            Sourov Karmokar
          </h2>
          <p className="text-xs text-gray-500 text-center">
            Student at Bangladesh University of Business & Technology - BUBT
          </p>
          <p className="text-xs text-gray-500">Bangladesh</p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-lg shadow-md mb-4 p-4 text-sm">
        <div className="flex justify-between text-gray-500 mb-2">
          <p>Profile viewers</p>
          <p className="text-blue-600 font-semibold">6</p>
        </div>
        <div className="flex justify-between text-gray-500">
          <p>Post impressions</p>
          <p className="text-blue-600 font-semibold">10</p>
        </div>
      </div>

      {/* Premium */}
      <div className="bg-white rounded-lg shadow-md mb-4 p-4 text-sm">
        <p className="text-gray-500 mb-2">Achieve your career goals</p>
        <p className="text-yellow-600 font-semibold cursor-pointer">
          Try Premium for BDT0
        </p>
      </div>

      {/* Bottom Links */}
      <div className="bg-white rounded-lg shadow-md p-4 text-sm">
        <div className="flex items-center gap-2 cursor-pointer mb-2 hover:text-black text-gray-600">
          <span>🔖</span>
          <p>Saved items</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer mb-2 hover:text-black text-gray-600">
          <span>👥</span>
          <p>Groups</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer mb-2 hover:text-black text-gray-600">
          <span>📰</span>
          <p>Newsletters</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-black text-gray-600">
          <span>📅</span>
          <p>Events</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
