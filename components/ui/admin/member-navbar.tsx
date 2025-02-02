import React from 'react';

export default function MemberNavbar() {
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
    <div className="flex items-center justify-between mb-4">
      {navbarItems.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer text-sm text-text hover:text-semibold border-b-[0.15rem] border-b-transparent hover:border-b-blue-500"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
