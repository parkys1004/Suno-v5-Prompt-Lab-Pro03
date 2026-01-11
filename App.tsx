import React, { useState, useMemo } from 'react';
import { GENRE_DATA } from './constants';
import Sidebar from './components/Sidebar';
import GenreRadarChart from './components/GenreRadarChart';
import { Music, Activity, Disc, Info } from 'lucide-react';

const App: React.FC = () => {
  const [selectedGenreId, setSelectedGenreId] = useState<number>(GENRE_DATA[0].id);
  const [searchTerm, setSearchTerm] = useState<string>('');

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

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between glass p-6 rounded-2xl shadow-lg border border-white/40 backdrop-blur-md shrink-0">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight flex items-center gap-3 drop-shadow-sm">
            <div className="bg-white p-2 rounded-xl shadow-md">
              <Music className="w-8 h-8 text-indigo-600" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Music Genre Explorer
            </span>
          </h1>
          <p className="text-gray-600 mt-2 font-medium italic pl-1 flex items-center gap-2">
            <Activity size={16} className="text-indigo-500" />
            Visualizing characteristics of different music styles
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
        {/* Left Sidebar */}
        <Sidebar 
          genres={filteredGenres}
          selectedId={selectedGenre.id}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSelect={setSelectedGenreId}
        />

        {/* Main Content Area */}
        <div className="lg:col-span-8 flex flex-col h-[calc(100vh-140px)]">
          
          <div className="glass rounded-3xl shadow-xl border border-white/40 p-8 h-full flex flex-col relative overflow-hidden backdrop-blur-md">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-8 items-center h-full z-10">
              
              {/* Text Info */}
              <div className="flex-1 w-full flex flex-col justify-center text-center lg:text-left h-full">
                <div className="mb-6">
                  <span 
                    className={`
                      inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm
                      ${selectedGenre.category === 'K-POP' 
                        ? 'bg-pink-100/80 text-pink-700 ring-1 ring-pink-200' 
                        : 'bg-blue-100/80 text-blue-700 ring-1 ring-blue-200'}
                    `}
                  >
                    <Disc size={12} />
                    {selectedGenre.category}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                  {selectedGenre.name}
                </h2>
                
                <div className="bg-white/50 p-6 rounded-2xl border border-white/60 shadow-inner mb-6 backdrop-blur-sm">
                  <p className="text-gray-700 text-lg leading-relaxed font-medium flex items-start gap-3">
                    <Info className="shrink-0 mt-1 text-indigo-500" size={20} />
                    {selectedGenre.desc}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {selectedGenre.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-2 bg-white rounded-xl text-sm text-gray-600 font-bold border border-white/60 shadow-sm hover:shadow-md transition-shadow cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="w-full lg:w-[450px] aspect-square bg-white/40 rounded-3xl p-6 border border-white/50 shadow-lg flex items-center justify-center backdrop-blur-sm relative">
                <GenreRadarChart genre={selectedGenre} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;