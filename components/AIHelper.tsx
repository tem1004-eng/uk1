import React, { useState, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Bot, Loader2, PlayCircle, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown'; // Normally needs package, but for this simplified XML we will assume basic text rendering or use simple replacements

interface AIHelperProps {
  chordName: string;
}

const AIHelper: React.FC<AIHelperProps> = ({ chordName }) => {
  const [explanation, setExplanation] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Effect to load explanation when chord changes (debounced lightly or on demand could be better, but direct is fine for now)
  const handleAskAI = async () => {
    setLoading(true);
    setExplanation("");
    const text = await geminiService.explainChord(chordName);
    setExplanation(text);
    setLoading(false);
  };

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden flex flex-col h-full">
      <div className="p-4 bg-slate-900/50 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-purple-400" />
          <h3 className="font-semibold text-slate-200">AI Guitar Tutor</h3>
        </div>
        {!loading && !explanation && (
           <button 
             onClick={handleAskAI}
             className="text-xs bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
           >
             <BookOpen className="w-3 h-3" />
             Explain {chordName}
           </button>
        )}
      </div>
      
      <div className="p-6 flex-1 overflow-y-auto">
        {!explanation && !loading && (
          <div className="text-center text-slate-500 mt-10">
            <p>Click "Explain" to learn theory, tips, and songs for <strong>{chordName}</strong>.</p>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center h-40 gap-3 text-purple-400">
            <Loader2 className="w-8 h-8 animate-spin" />
            <span className="text-sm text-slate-400">Asking Gemini...</span>
          </div>
        )}

        {explanation && (
          <div className="prose prose-invert prose-sm max-w-none text-slate-300">
            <div className="whitespace-pre-wrap leading-relaxed">
                {explanation}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIHelper;