import React from 'react';
import { Search } from 'lucide-react';
import { Genre } from '../types';

interface SidebarProps {
  genres: Genre[];
  selectedId: number;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onSelect: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  genres, 
  selectedId, 
  searchTerm, 
  onSearchChange, 
  onSelect 
}) => {
  return (
    <div className="lg:col-span-4 flex flex-col h-auto lg:h-[calc(100vh-180px)]">
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 mb-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="장르 검색..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto pr-2 custom-scroll space-y-2 max-h-[400px] lg:max-h-full">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => onSelect(genre.id)}
            className={`
              w-full text-left p-4 rounded-xl flex justify-between items-center border transition-all duration-200
              ${selectedId === genre.id 
                ? 'bg-[#111827] text-white border-[#111827] shadow-lg' 
                : 'bg-white text-gray-700 border-gray-100 hover:bg-white hover:shadow-sm'}
            `}
          >
            <span className={`font-bold ${selectedId === genre.id ? 'text-white' : 'text-gray-700'}`}>
              {genre.name}
            </span>
            <span 
              className={`
                text-[9px] px-2 py-0.5 rounded font-black uppercase
                ${selectedId === genre.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-100 text-gray-400'}
              `}
            >
              {genre.category}
            </span>
          </button>
        ))}
        
        {genres.length === 0 && (
          <div className="text-center py-8 text-gray-400 text-sm">
            검색 결과가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;