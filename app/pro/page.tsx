'use client';

import React, { useState } from 'react';
// import MemberNavbar from '@/components/ui/admin/member-navbar';

export default function Home() {
  const [selectedNavItem, setSelectedNavItem] = useState('Members');

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

  return (
    <div className="px-6 p-b-6 pt-1 mx-auto mb-4 rounded-lg shadow-sm h-max min-h-[89.5vh] w-full">
      {/* <MemberNavbar/> */}
      {/* navbar */}
      <div className="flex items-center justify-between mb-4">
        {navbarItems.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer text-sm text-text hover:font-semibold border-b-[0.175rem] border-b-transparent hover:border-b-blue-500 ${
              selectedNavItem === item.name
                ? 'border-b-blue-500 font-semibold'
                : ''
            }`}
            onClick={() => setSelectedNavItem(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>
      {/* main content */}
      {selectedNavItem === 'Members' && (
        <div >
          <h1 className="text-title font-semibold text-lg">Manage Members</h1>
                  
        </div>
      )}
      
    </div>
  );
}
