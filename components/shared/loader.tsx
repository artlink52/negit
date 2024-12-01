"use client";
import { useState, useEffect } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => setLoading(false);

    // Симулируем загрузку в течение 1 секунды (можно изменить)
    setTimeout(handleLoading, 1000);

    return () => {
      setLoading(true);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-orange-500"></div>
      </div>
    );
  }

  return <div className="fade-in-up">{children}</div>;
}
