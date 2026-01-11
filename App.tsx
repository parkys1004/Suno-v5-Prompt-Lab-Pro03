import React, { useState, useMemo, useEffect } from 'react';
import { GENRE_DATA } from './constants';
import { Genre } from './types';
import Sidebar from './components/Sidebar';
import GenreRadarChart from './components/GenreRadarChart';
import PromptCard from './components/PromptCard';
import { Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [selectedGenreId, setSelectedGenreId] = useState<number>(GENRE_DATA[0].id);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter genres based on search
  const filteredGenres = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return GENRE_DATA.filter(
      (g) => 
        g.name.toLowerCase().includes(term) || 
        g.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const selectedGenre = useMemo(() => 
    GENRE_DATA.find(g => g.id === selectedGenreId) || GENRE_DATA[0], 
  [selectedGenreId]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage('📋 프롬프트가 복사되었습니다!');
      setTimeout(() => setToastMessage(null), 2000);
    }).catch(() => {
      setToastMessage('❌ 복사에 실패했습니다.');
      setTimeout(() => setToastMessage(null), 2000);
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center md:text-left md:flex md:items-end md:justify-between border-b pb-6 border-gray-200">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Suno v5 Prompt Lab Pro
          </h1>
          <p className="text-gray-500 mt-2 font-medium italic">
            40가지 장르 x 각 6개 프롬프트 (총 240세트)
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <Sidebar 
          genres={filteredGenres}
          selectedId={selectedGenre.id}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSelect={setSelectedGenreId}
        />

        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Top Card: Detail & Chart */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              
              {/* Text Info */}
              <div className="flex-1 w-full text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <span 
                    className={`
                      text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded
                      ${selectedGenre.category === 'K-POP' 
                        ? 'bg-pink-100 text-pink-600' 
                        : 'bg-blue-100 text-blue-600'}
                    `}
                  >
                    {selectedGenre.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  {selectedGenre.name}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {selectedGenre.desc}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {selectedGenre.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-white rounded text-[11px] text-gray-500 font-bold border border-gray-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="w-full lg:w-[350px] bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <GenreRadarChart genre={selectedGenre} />
              </div>
            </div>
          </div>

          {/* Prompt Section */}
          <div className="transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500" />
                추천 프롬프트 세트 ({selectedGenre.prompts.length})
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedGenre.prompts.map((prompt, idx) => (
                <PromptCard 
                  key={`${selectedGenre.id}-${idx}`} 
                  prompt={prompt} 
                  index={idx}
                  onCopy={handleCopy}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Toast Notification */}
      <div 
        className={`
          fixed left-1/2 bottom-8 transform -translate-x-1/2 
          bg-[#1f2937] text-white px-6 py-3 rounded-full font-bold shadow-lg z-50
          transition-all duration-300 pointer-events-none
          ${toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        {toastMessage}
      </div>
    </div>
  );
};

export default App;