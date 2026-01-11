import React from 'react';
import { Search, Music2 } from 'lucide-react';
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
    <div className="lg:col-span-4 flex flex-col h-[calc(100vh-140px)]">
      <div className="glass p-4 rounded-2xl shadow-lg border border-white/40 mb-4 sticky top-0 z-10 backdrop-blur-md">
        <div className="relative group">
          <Search className="w-5 h-5 absolute left-3 top-3 text-gray-500 group-focus-within:text-blue-600 transition-colors duration-300" />
          <input
            type="text"
            placeholder="장르 검색..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200/50 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all text-sm font-medium placeholder-gray-400"
          />
        </div>
      </div>
      
      <div className="glass rounded-2xl flex-1 overflow-y-auto p-2 custom-scroll space-y-2 border border-white/40 shadow-lg">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => onSelect(genre.id)}
            className={`
              w-full text-left p-4 rounded-xl flex justify-between items-center transition-all duration-300 group relative overflow-hidden
              ${selectedId === genre.id 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md transform scale-[1.02]' 
                : 'hover:bg-white/60 text-gray-700 hover:shadow-sm hover:scale-[1.01]'}
            `}
          >
            <div className="flex items-center gap-3 z-10">
              <div className={`p-2 rounded-lg ${selectedId === genre.id ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-white'}`}>
                <Music2 size={18} className={selectedId === genre.id ? 'text-white' : 'text-gray-500'} />
              </div>
              <span className={`font-bold text-sm md:text-base ${selectedId === genre.id ? 'text-white' : 'text-gray-800'}`}>
                {genre.name}
              </span>
            </div>
            <span 
              className={`
                text-[10px] px-2.5 py-1 rounded-full font-black uppercase tracking-wider z-10
                ${selectedId === genre.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-200/50 text-gray-500'}
              `}
            >
              {genre.category}
            </span>
          </button>
        ))}
        
        {genres.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500 text-sm">
            <Search size={40} className="mb-4 text-gray-300" />
            <p>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;