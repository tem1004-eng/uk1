import React, { useState } from 'react';
import { Volume2, Info, Guitar } from 'lucide-react';
import ChordSelector from './components/ChordSelector';
import ChordDiagram from './components/ChordDiagram';
import { CHORD_DB } from './constants';
import { audioService } from './services/audioService';

// 암기법 데이터베이스 (우크렐레 전용)
const MEMO_TIPS: Record<string, string> = {
  'C-Major': `우크렐레의 가장 기본 코드!
  3번 프랫의 1번 줄만 잡아주면 끝.`,
  'A-Minor': `2번 프랫의 4번 줄만 잡으면 됩니다.
  가장 슬픈 소리가 나는 쉬운 코드 중 하나.`,
  'F-Major': `Am 코드(2프랫 4번줄)에
  1프랫 2번줄을 더해주면 F 코드가 됩니다.`,
  'G-Major': `기타의 D코드 모양과 같아요.
  2프랫의 1,3번줄, 3프랫의 2번줄.
  삼각형 모양을 기억하세요!`,
};

const App: React.FC = () => {
  // State
  const [selectedRoot, setSelectedRoot] = useState<string>('C');
  const [selectedSuffix, setSelectedSuffix] = useState<string>('Major');
  
  // Derived state
  const chordKey = `${selectedRoot}-${selectedSuffix}`;
  const currentChord = CHORD_DB[chordKey];
  const currentTip = MEMO_TIPS[chordKey];

  // Play sound handler
  const handlePlaySound = () => {
    if (currentChord) {
      audioService.strumChord(currentChord.positions);
    }
  };

  // Get dynamic message for the knowledge box
  const getKnowledgeMessage = (root: string) => {
    switch (root) {
      case 'C': return "C코드는 5를 더해서 기타의 G코드와 잡는 모양이 같음";
      case 'D': return "D코드는 5를 더해서 기타의 A코드와 잡는 모양이 같음";
      case 'E': return "E코드는 5를 더해서 기타의 B코드와 잡는 모양이 같음";
      case 'F': return "F코드는 5를 더해서 기타의 C코드와 잡는 모양이 같음";
      case 'G': return "G코드는 5를 더해서 기타의 D코드와 잡는 모양이 같음";
      case 'A': return "A코드는 5를 더해서 기타의 E코드와 잡는 모양이 같음";
      case 'Bb': return "Bb코드는 5를 더해서 기타의 F코드와 잡는 모양이 같음";
      default: return "우크렐레는 재미있습니다";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-2 rounded-lg">
                {/* Visual change to imply ukulele/music */}
                <Guitar className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">필통 우크렐레 코드표</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* 1. Selector Block (Top on Mobile, Left Top on Desktop) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <ChordSelector 
            selectedRoot={selectedRoot}
            selectedSuffix={selectedSuffix}
            onSelectRoot={setSelectedRoot}
            onSelectSuffix={setSelectedSuffix}
          />
        </div>

        {/* 2. Diagram Block (Middle on Mobile, Right Full Height on Desktop) */}
        <div className="lg:col-span-7 lg:row-span-2">
            <div className="flex flex-col items-center justify-center min-h-[350px] lg:min-h-[500px] bg-slate-800 rounded-2xl border border-slate-700 p-4 lg:p-8 relative lg:sticky lg:top-24">
                
                {currentChord ? (
                    <>
                        <div className="absolute top-4 right-4 lg:top-6 lg:right-6 flex gap-3">
                            <button 
                                onClick={handlePlaySound}
                                className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 group"
                                title="Play Chord"
                            >
                                <Volume2 className="w-6 h-6 group-hover:animate-pulse" />
                            </button>
                        </div>
                        
                        <div className="animate-fade-in scale-90 lg:scale-100 origin-center w-full flex justify-center">
                            <ChordDiagram chord={currentChord} />
                        </div>

                        <div className="mt-6 lg:mt-8 text-center">
                            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                                {currentChord.key} {currentChord.suffix === 'Major' ? '코드' : currentChord.suffix}
                            </h2>
                            <p className="text-slate-400 text-sm lg:text-base">
                                Fingering: {currentChord.fingers.filter(f => f > 0).join(', ') || 'Open'}
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="text-center text-slate-500">
                        <Info className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">Chord not found in database.</p>
                        <p className="text-sm mt-2">Try a standard Major or Minor chord.</p>
                    </div>
                )}
            </div>
        </div>

        {/* 3. Tips Block (Bottom on Mobile, Left Bottom on Desktop) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Quick Info / Memorization Card */}
          {currentTip ? (
            <div className="bg-orange-200 p-6 rounded-2xl border border-orange-300 shadow-lg">
                <h4 className="text-orange-900 text-xs font-bold mb-2 uppercase tracking-wider">우크렐레 팁</h4>
                <p className="text-orange-950 text-sm leading-relaxed whitespace-pre-wrap font-semibold">
                {currentTip}
                </p>
            </div>
          ) : null}

          {/* Dynamic Knowledge Card (Yellow Box) */}
          <div className="bg-amber-100 p-6 rounded-2xl border border-amber-200 text-amber-900 shadow-lg">
             <h4 className="text-amber-800 text-sm font-bold mb-3 border-b border-amber-200 pb-2">
               우크렐레 기초 상식
             </h4>
             <p className="text-sm font-semibold leading-relaxed">
               {getKnowledgeMessage(selectedRoot)}
             </p>
          </div>
        </div>

      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        <p>© 2024 Smart Ukulele Chords.</p>
      </footer>
    </div>
  );
};

export default App;