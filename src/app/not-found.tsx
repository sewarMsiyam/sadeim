'use client';

// import { HomeIcon, ArrowLeft } from "lucide-react";
// import Link from 'next/link';
// import '@/app/globals.css';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* صورة 404 */}
        <div className="relative">
          <img 
            src="/404.webp" 
            alt="صفحة غير موجودة"
            className="w-full rounded-lg drop-shadow-2xl"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">عذراً، الصفحة غير موجودة</h1>
          <p className="text-gray-600 text-lg">
            يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          </p>
        </div>

  
      </div>
    </div>
  );
}