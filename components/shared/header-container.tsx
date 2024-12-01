import React from 'react';

export const HeaderContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-[1280px] mx-auto px-[15px] h-[100px] flex items-center justify-between">
      {children}
    </div>
  );
};