"use client";

import { FeeCalculator } from '@/components/fee-calculator';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4">
      <FeeCalculator />
    </main>
  );
}
