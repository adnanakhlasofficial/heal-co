import React from "react";

interface HeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h1 className="text-xl font-semibold text-gray-900 mb-1">{title}</h1>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
};

export default Header;
