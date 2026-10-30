import React, { useState } from 'react';
import { Language } from '../types';
import { Bot, Send, Sparkles, User, AlertCircle } from 'lucide-react';

interface AiTutorViewProps {
  language: Language;
}

interface Message {
  sender: 'user' | 'tutor';
  text: string;
  isDemo?: boolean;
}

export const AiTutorView: React.FC<AiTutorViewProps> = ({ language }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'tutor',
      text: language === 'so'
        ? 'Nabad gelyo! Waan ahay AI Coding Tutor-kaaga ee Coler-Code. Sideen ku caawiyaa maanta? Waad i weydiin kartaa su’aal kasta oo ku saabsan HTML, CSS, JavaScript, ama Python.'
        : 'Hello! I am your Coler-Code AI Coding Tutor. How can I help you today? Ask me any question about programming!'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim() || isLoading) return;

    const userMsg = inputQuery;
    setInputQuery('');
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMsg, language })
      });
      const data = await res.json();

      setMessages(prev => [
        ...prev,
        { sender: 'tutor', text: data.reply, isDemo: data.isDemo }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          sender: 'tutor',
          text: language === 'so'
            ? 'Cillad xagga shabakadda ah ayaa dhacday. Fadlan mar kale isku day.'
            : 'Network error occurred. Please try again.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col h-[75vh] pb-16">
      {/* Header */}
      <div className="bg-[#111827] border border-[#1f293d] rounded-t-2xl p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-bold text-base">Coler-Code AI Tutor</h3>
            <p className="text-xs text-cyan-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {language === 'so' ? 'Wuu shaqeynayaa (Online)' : 'Online Assistant'}
            </p>
          </div>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 bg-[#0b0f19] border-x border-[#1f293d] p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
              msg.sender === 'user' 
                ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-400' 
                : 'bg-purple-500/20 border border-purple-500/40 text-purple-400'
            }`}>
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
              msg.sender === 'user'
                ? 'bg-cyan-600 text-white rounded-tr-none'
                : 'bg-[#161e31] border border-[#2b3752] text-slate-200 rounded-tl-none'
            }`}>
              {msg.isDemo && (
                <div className="flex items-center gap-1.5 text-[11px] text-amber-400 mb-2 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{language === 'so' ? 'Demo Mode: Ku dar GEMINI_API_KEY si aad u hesho AI buuxda.' : 'Demo Mode: Configure GEMINI_API_KEY for full AI.'}</span>
                </div>
              )}
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="bg-[#161e31] border border-[#2b3752] rounded-2xl p-4 text-xs text-slate-400">
              {language === 'so' ? 'AI Tutor wuu fekerayaa...' : 'AI Tutor is thinking...'}
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSendMessage}
        className="bg-[#111827] border border-[#1f293d] rounded-b-2xl p-3 flex items-center gap-2 shadow-xl"
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder={language === 'so' ? 'Weydii su’aal ku saabsan coding-ka...' : 'Ask a coding question...'}
          className="flex-1 bg-[#0b0f19] border border-[#2b3752] focus:border-cyan-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={isLoading || !inputQuery.trim()}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-white p-3 rounded-xl shadow-md transition-all"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
