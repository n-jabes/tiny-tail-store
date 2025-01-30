'use client';
import AffiliateTable from '@/components/ui/affiliate/affiliate-table';
import React, { useState } from 'react';
import { User, HandCoins, CreditCard, Wallet } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [selectedPeriod, setSelectedPeriod] = useState('30 days');

  const handleDropdownChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedPeriod(e.target.value);
  };

  return (
    <div className="p-6 mx-auto bg-contentBg mb-4 rounded-lg shadow-sm h-max w-full">
      Welcome to the Pro membership
    </div>
  );
}
