import React from 'react';
import { ROOTS, SUFFIXES } from '../constants';

interface ChordSelectorProps {
  selectedRoot: string;
  selectedSuffix: string;
  onSelectRoot: (root: string) => void;
  onSelectSuffix: (suffix: string) => void;
}

const ChordSelector: React.FC<ChordSelectorProps> = ({
  selectedRoot,
  selectedSuffix,
  onSelectRoot,
  onSelectSuffix,
}) => {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700 space-y-6">
      <div>
        <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Root Note (키)</h3>
        <div className="flex flex-wrap gap-2">
          {ROOTS.map((root) => (
            <button
              key={root}
              onClick={() => onSelectRoot(root)}
              className={`w-10 h-10 rounded-full font-bold transition-all duration-200 ${
                selectedRoot === root
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-110'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {root}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Chord Type (종류)</h3>
        <div className="flex flex-wrap gap-2">
          {SUFFIXES.map((suffix) => {
            const isSelected = selectedSuffix === suffix;
            const isHigh = suffix === 'High';
            const isEasy = suffix === 'Easy';
            
            // Base styling
            let buttonClass = "rounded-lg text-sm font-medium transition-all duration-200 ";
            
            // Size adjustments (High and Easy buttons are distinct)
            if (isHigh || isEasy) {
                buttonClass += "px-6 py-2 min-w-[5rem] "; 
            } else {
                buttonClass += "px-4 py-2 ";
            }

            // Color adjustments
            if (isHigh) {
                if (isSelected) {
                    buttonClass += "bg-red-500 text-white shadow-lg shadow-red-500/40 ring-2 ring-red-400 ring-offset-2 ring-offset-slate-800";
                } else {
                    buttonClass += "bg-rose-900/40 text-rose-300 border border-rose-700/50 hover:bg-rose-900/60";
                }
            } else if (isEasy) {
                if (isSelected) {
                    buttonClass += "bg-teal-500 text-white shadow-lg shadow-teal-500/40 ring-2 ring-teal-400 ring-offset-2 ring-offset-slate-800";
                } else {
                    buttonClass += "bg-teal-900/40 text-teal-300 border border-teal-700/50 hover:bg-teal-900/60";
                }
            } else {
                if (isSelected) {
                    buttonClass += "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30";
                } else {
                    buttonClass += "bg-slate-700 text-slate-300 hover:bg-slate-600";
                }
            }

            // Label mapping
            let label = suffix;
            if (suffix === 'Major') label = '코드';
            else if (suffix === 'Minor') label = 'm';
            else if (suffix === 'High') label = 'High 코드';
            else if (suffix === 'Easy') label = '약식 코드';

            return (
              <button
                key={suffix}
                onClick={() => onSelectSuffix(suffix)}
                className={buttonClass}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChordSelector;