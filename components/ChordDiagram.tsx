import React, { useState } from 'react';
import { ChordData } from '../types';

interface ChordDiagramProps {
  chord: ChordData;
}

const ChordDiagram: React.FC<ChordDiagramProps> = ({ chord }) => {
  const [displayMode, setDisplayMode] = useState<'finger' | 'string'>('string');

  const numStrings = 4; // Ukulele has 4 strings
  const numFrets = 5; // Standard chart depth
  
  // Calculate offset if the chord is high up the neck
  const minFret = Math.min(...chord.positions.filter(p => p > 0));
  const maxFret = Math.max(...chord.positions);
  
  let startFret = 1;
  if (maxFret > 5) {
    startFret = minFret;
  }

  const width = 220; 
  const height = 280; 
  const paddingX = 40; 
  const paddingY = 50; 
  const stringSpacing = (width - paddingX * 2) / (numStrings - 1);
  const fretSpacing = (height - paddingY - 30) / numFrets;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center max-w-full overflow-hidden">
      {/* View Toggle */}
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setDisplayMode('finger')}
          className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
            displayMode === 'finger' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
          }`}
        >
          손가락 번호
        </button>
        <button
          onClick={() => setDisplayMode('string')}
          className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
            displayMode === 'string' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
          }`}
        >
          줄번호
        </button>
      </div>

      <div className="relative w-full flex justify-center">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="max-w-full h-auto">
        {/* Title */}
        <text x={width / 2} y={25} textAnchor="middle" className="font-bold text-xl fill-slate-800">
          {chord.key} {chord.suffix}
        </text>

        {/* String Names (G C E A) */}
        {['G', 'C', 'E', 'A'].map((note, i) => (
             <text 
                key={`string-name-${i}`}
                x={paddingX + i * stringSpacing} 
                y={height - 10} 
                textAnchor="middle"
                className="font-bold text-xs fill-slate-400"
            >
                {note}
            </text>
        ))}

        {/* Fret Numbers (Red) */}
        {Array.from({ length: numFrets }).map((_, i) => {
             const currentFretNum = startFret + i;
             return (
                <text 
                    key={`fret-num-${i}`}
                    x={paddingX - 15} 
                    y={paddingY + i * fretSpacing + fretSpacing / 1.6} 
                    textAnchor="end"
                    className="font-bold text-sm fill-red-500"
                >
                    {currentFretNum}
                </text>
             );
        })}

        {/* Nut (Thick line at top) */}
        {startFret === 1 && (
          <line
            x1={paddingX - 2}
            y1={paddingY}
            x2={width - paddingX + 2}
            y2={paddingY}
            stroke="black"
            strokeWidth="4"
          />
        )}

        {/* Frets (Horizontal lines) */}
        {Array.from({ length: numFrets + 1 }).map((_, i) => (
          <line
            key={`fret-${i}`}
            x1={paddingX}
            y1={paddingY + i * fretSpacing}
            x2={width - paddingX}
            y2={paddingY + i * fretSpacing}
            stroke="#94a3b8"
            strokeWidth={i === 0 && startFret === 1 ? 0 : 2}
          />
        ))}

        {/* Strings (Vertical lines) */}
        {Array.from({ length: numStrings }).map((_, i) => (
          <line
            key={`string-${i}`}
            x1={paddingX + i * stringSpacing}
            y1={paddingY}
            x2={paddingX + i * stringSpacing}
            y2={height - 30}
            stroke="#334155"
            strokeWidth="2"
          />
        ))}

        {/* Barre Chord Arc */}
        {chord.barre && (
            <rect
                x={paddingX + (4 - chord.barre.fromString) * stringSpacing}
                y={paddingY + (chord.barre.fret - startFret) * fretSpacing + fretSpacing * 0.15}
                width={(chord.barre.fromString - chord.barre.toString) * stringSpacing}
                height={fretSpacing * 0.7}
                rx={10}
                fill="#3b82f6"
                opacity="0.3"
            />
        )}

        {/* Finger Positions */}
        {chord.positions.map((fret, stringIndex) => {
          // Ukulele strings: G C E A (indices 0, 1, 2, 3)
          const x = paddingX + stringIndex * stringSpacing;
          
          if (fret === -1) {
            // Muted string (X)
            return (
              <text key={`mute-${stringIndex}`} x={x} y={paddingY - 10} textAnchor="middle" className="text-lg fill-red-500 font-bold">
                ✕
              </text>
            );
          } else if (fret === 0) {
            // Open string (O)
            return (
              <circle
                key={`open-${stringIndex}`}
                cx={x}
                cy={paddingY - 15}
                r="6"
                stroke="#334155"
                strokeWidth="2"
                fill="white"
              />
            );
          } else {
            // Fretted note
            const relativeFret = fret - startFret;
            if (relativeFret < 0 || relativeFret >= numFrets) return null; // Out of view

            const y = paddingY + relativeFret * fretSpacing + fretSpacing / 2;
            const finger = chord.fingers[stringIndex];
            
            // For string number display mode: 4(G), 3(C), 2(E), 1(A)
            const stringNum = 4 - stringIndex;
            const label = displayMode === 'finger' ? finger : stringNum;

            return (
              <g key={`note-${stringIndex}`}>
                <circle cx={x} cy={y} r="11" fill="#3b82f6" />
                {label > 0 && (
                    <text x={x} y={y + 4} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
                        {label}
                    </text>
                )}
              </g>
            );
          }
        })}
      </svg>
      </div>
    </div>
  );
};

export default ChordDiagram;