
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="bg-[#EBE7DE] pt-24 pb-12 px-6 text-[#5D5A53]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className="text-2xl font-serif text-[#2C2A26] mb-6">Aura</h4>
          <p className="max-w-xs font-light leading-relaxed">
            Designing technology that feels as natural as the world around it.
            Born from the earth, built for the mind.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Shop</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">All Products</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">New Arrivals</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Audio</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Home</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Company</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Our Story</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Sustainability</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Journal</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Reach Out</h4>
          <div className="flex flex-col gap-4 font-light">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C2A26] transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#A8A29E] rounded-full group-hover:bg-[#2C2A26] transition-colors"></span>
                LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C2A26] transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#A8A29E] rounded-full group-hover:bg-[#2C2A26] transition-colors"></span>
                Instagram
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C2A26] transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#A8A29E] rounded-full group-hover:bg-[#2C2A26] transition-colors"></span>
                WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-[#D6D1C7] flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60">
        <p>Created by Tazma</p>
      </div>
    </footer>
  );
};

export default Footer;
