import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  message, 
  children, 
  className = '', 
  variant = 'primary' 
}) => {
  const phoneNumber = "5213121109700";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg";
  
  const variantClasses = {
    primary: "bg-[#EE202E] text-white hover:bg-[#d11c29] shadow-lg hover:shadow-xl",
    secondary: "bg-[#D0DD28] text-black hover:bg-[#b8c423] shadow-lg hover:shadow-xl font-semibold",
    outline: "border-2 border-[#EE202E] text-[#EE202E] hover:bg-[#EE202E] hover:text-white shadow-lg hover:shadow-xl"
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {children}
    </a>
  );
};

export default WhatsAppButton;