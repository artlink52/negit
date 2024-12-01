import React from 'react';

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-[1280px] mx-auto px-[15px]">
      {children}
    </div>
  );
};