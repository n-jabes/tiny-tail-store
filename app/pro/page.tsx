'use client';

import { ArrowUpDown, Download, Search, UserPlus } from 'lucide-react';
import React, { useState } from 'react';
import DataTable from './data-table';

export default function Home() {
  const [selectedNavItem, setSelectedNavItem] = useState('Members');
  const [popupVisible, setPopupVisible] = useState(false);

  const navbarItems = [
    {
      id: 0,
      name: 'Members',
      url: '#',
    },
    {
      id: 1,
      name: 'Ultimate Affiliates',
      url: '#',
    },
    {
      id: 2,
      name: 'Memberships',
      url: '#',
    },
    {
      id: 3,
      name: 'Payment Gateways',
      url: '#',
    },
    {
      id: 4,
      name: 'Inside Lockers',
      url: '#',
    },
    {
      id: 5,
      name: 'Showcases',
      url: '#',
    },
    {
      id: 6,
      name: 'Social Connect',
      url: '#',
    },
    {
      id: 7,
      name: 'Coupons',
      url: '#',
    },
    {
      id: 8,
      name: 'Content Access',
      url: '#',
    },
  ];

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  return (
    <div className="px-6 p-b-6 pt-1 mx-auto mb-4 rounded-lg shadow-sm h-max min-h-[89.5vh] w-full">
      {/* popup to add a member */}
      {popupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
          <div className="w-full max-w-md bg-popupBg rounded-2xl shadow-xl p-6 sm:p-8 relative">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={handlePopupClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h2 className="text-lg font-semibold text-title text-center mb-4">
              Add new members
            </h2>

            <form>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="text-sm mt-1 outline-none block w-full p-2 border border-gray-300 rounded-md bg-input shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="text-sm mt-1 outline-none block w-full p-2 border border-gray-300 rounded-md bg-input shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Role
                  </label>
                  <input
                    id="role"
                    type="text"
                    className="text-sm mt-1 outline-none block w-full p-2 border border-gray-300 rounded-md bg-input shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter role"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4 w-full">
                <button
                  type="button"
                  className="text-sm flex-1 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  onClick={handlePopupClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-sm flex-1 py-2 bg-button-bg text-white rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* navbar */}
      <div className="flex items-center justify-between mb-4">
        {navbarItems.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer text-sm text-text hover:font-semibold border-b-[0.175rem]  hover:border-b-blue-500 ${
              selectedNavItem === item.name
                ? 'border-b-blue-500 font-semibold'
                : 'border-b-transparent'
            }`}
            onClick={() => setSelectedNavItem(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* main content */}
      {selectedNavItem === 'Members' && (
        <div className="mt-4">
          <h1 className="text-title font-semibold text-lg mb-1">
            Manage Members
          </h1>
          <section className="rounded-lg bg-contentBg p-6 shadow">
            <div className="flex items-center justify-between">
              {/* search input */}
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search members"
                  className="w-full px-4 py-2 text-sm bg-cardBg rounded-md outline-none pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>

              {/* filters */}
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <div className="p-2 bg-cardBg text-text cursor-pointer rounded-md">
                    <ArrowUpDown className=" w-4 h-4" />
                  </div>
                  <div className="p-2 bg-cardBg text-text cursor-pointer rounded-md">
                    <Download className="w-4 h-4" />
                  </div>
                </div>

                {/* add new member button */}
                <div
                  className="flex items-center gap-2 bg-button-bg px-4 py-2 font-medium cursor-pointer text-white rounded-md text-sm"
                  onClick={()=>setPopupVisible(true)}
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Add New Members</span>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-cardBg rounded-md mt-4 lg:w-[71vw]">
              <DataTable />
            </div>

          </section>
        </div>
      )}
    </div>
  );
}
