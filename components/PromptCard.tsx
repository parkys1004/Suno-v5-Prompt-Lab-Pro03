import React, { useState } from 'react';
import { Prompt } from '../types';
import { Copy } from 'lucide-react';

interface PromptCardProps {
  prompt: Prompt;
  index: number;
  onCopy: (text: string) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, index, onCopy }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    onCopy(prompt.text);
  };

  return (
    <div
      onClick={handleCopy}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between
        ${isHovered 
          ? 'bg-blue-50/50 border-blue-500 shadow-md transform -translate-y-0.5' 
          : 'bg-white border-gray-200 shadow-sm'}
      `}
      style={{
        animation: `fadeIn 0.4s ease forwards`,
        animationDelay: `${index * 0.05}s`,
      }}
    >
      <div className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-colors duration-200 ${isHovered ? 'bg-blue-500' : 'bg-transparent'}`} />
      
      <div>
        <div className="flex justify-between items-start gap-2 mb-3">
            <p className="text-gray-900 font-mono text-sm font-black leading-snug break-words flex-1">
                {prompt.text}
            </p>
            <Copy size={16} className={`shrink-0 transition-opacity ${isHovered ? 'opacity-100 text-blue-500' : 'opacity-0'}`} />
        </div>
        
        <p className="text-xs text-gray-500 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100 italic">
          "{prompt.desc}"
        </p>
      </div>
    </div>
  );
};

export default PromptCard;