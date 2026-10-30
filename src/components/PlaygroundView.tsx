import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { Code2, Play, RotateCcw, Sparkles, Copy, Check, Terminal } from 'lucide-react';

interface PlaygroundViewProps {
  language: Language;
}

export const PlaygroundView: React.FC<PlaygroundViewProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [htmlCode, setHtmlCode] = useState(
    '<div class="card">\n  <h2>Coler-Code Sandbox</h2>\n  <p>Ku tijaabi HTML, CSS, iyo JavaScript halkan!</p>\n  <button onclick="salama()">Guji Halkan</button>\n</div>'
  );
  const [cssCode, setCssCode] = useState(
    'body {\n  background: #0b0f19;\n  color: #fff;\n  font-family: \'Plus Jakarta Sans\', sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}\n.card {\n  background: #161e31;\n  border: 1px solid #1f293d;\n  padding: 30px;\n  border-radius: 16px;\n  text-align: center;\n  box-shadow: 0 10px 25px rgba(0,0,0,0.5);\n  max-width: 320px;\n}\nh2 { color: #00f0ff; margin-bottom: 10px; }\np { color: #94a3b8; font-size: 14px; margin-bottom: 20px; }\nbutton {\n  background: linear-gradient(135deg, #00f0ff, #3b82f6);\n  color: #0b0f19;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\nbutton:hover { opacity: 0.9; }'
  );
  const [jsCode, setJsCode] = useState(
    'function salama() {\n  console.log("Button clicked successfully!");\n  alert("Hambalyo! Code-kaaga JavaScript wuu shaqeeyay!");\n}'
  );
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const updatePreview = () => {
    if (!iframeRef.current) return;
    const documentContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
            // Capture console.log
            const originalLog = console.log;
            console.log = function(...args) {
              originalLog.apply(console, args);
              window.parent.postMessage({ type: 'CONSOLE_LOG', message: args.join(' ') }, '*');
            };
            try {
              ${jsCode}
            } catch (err) {
              console.error(err);
            }
          </script>
        </body>
      </html>
    `;
    const iframeDoc = iframeRef.current.contentDocument;
    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(documentContent);
      iframeDoc.close();
    }
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'CONSOLE_LOG') {
        setConsoleLogs(prev => [...prev, event.data.message]);
      }
    };
    window.addEventListener('message', handleMessage);
    updatePreview();
    return () => window.removeEventListener('message', handleMessage);
  }, [htmlCode, cssCode, jsCode]);

  const handleReset = () => {
    setHtmlCode('<div>\n  <h1>Coler-Code</h1>\n  <p>Ku qor code-kaaga halkan...</p>\n</div>');
    setCssCode('body { background: #0b0f19; color: #00f0ff; font-family: sans-serif; text-align: center; padding: 50px; }');
    setJsCode('console.log("Reset successful!");');
    setConsoleLogs([]);
  };

  const loadTemplate = (type: 'card' | 'counter' | 'form') => {
    if (type === 'card') {
      setHtmlCode('<div class=\"profile-card\">\n  <img src=\"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde\" alt=\"Avatar\">\n  <h3>Maxamed Cali</h3>\n  <p>Web Developer & Student</p>\n  <button onclick=\"alert(\'Wadna!\')\">Follow</button>\n</div>');
      setCssCode('body { background: #0b0f19; color: #fff; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; }\n.profile-card { background: #161e31; border: 1px solid #1f293d; padding: 30px; border-radius: 20px; text-align: center; width: 280px; }\n.profile-card img { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin-bottom: 15px; border: 2px solid #00f0ff; }\nh3 { color: #00f0ff; margin-bottom: 5px; }\np { color: #94a3b8; font-size: 13px; margin-bottom: 20px; }\nbutton { background: #00f0ff; color: #0b0f19; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; }');
      setJsCode('console.log("Profile card template loaded!");');
    } else if (type === 'counter') {
      setHtmlCode('<div class=\"counter-box\">\n  <h2>Tirsaha (Counter)</h2>\n  <h1 id=\"num\">0</h1>\n  <div class=\"btns\">\n    <button onclick=\"kordhi()\">Kordhi (+)</button>\n    <button onclick=\"dimay()\">Dimay (-)</button>\n  </div>\n</div>');
      setCssCode('body { background: #0b0f19; color: #fff; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; }\n.counter-box { background: #161e31; border: 1px solid #1f293d; padding: 30px; border-radius: 20px; text-align: center; }\n#num { font-size: 48px; color: #00f0ff; margin: 15px 0; }\n.btns button { background: #00f0ff; color: #0b0f19; border: none; padding: 10px 15px; border-radius: 8px; font-weight: bold; cursor: pointer; margin: 0 5px; }');
      setJsCode('let count = 0;\nfunction kordhi() { count++; document.getElementById("num").innerText = count; console.log("Count:", count); }\nfunction dimay() { count--; document.getElementById("num").innerText = count; console.log("Count:", count); }');
    }
  };

  return (
    <div className="space-y-4 pb-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Code2 className="w-6 h-6 text-cyan-400" />
            <span>{language === 'so' ? 'Qolka Tijaabada Code-ka' : 'Code Playground'}</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            {language === 'so'
              ? 'Tijaabi HTML, CSS, iyo JavaScript adoo isticmaalaya live sandbox.'
              : 'Write and test HTML, CSS, and JavaScript with instant preview.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => loadTemplate('card')}
            className="bg-[#161e31] hover:bg-[#1f293d] border border-[#2b3752] text-cyan-300 font-semibold px-3 py-2 rounded-xl text-xs transition-colors"
          >
            {language === 'so' ? 'Template: Profile Card' : 'Profile Template'}
          </button>
          <button
            onClick={() => loadTemplate('counter')}
            className="bg-[#161e31] hover:bg-[#1f293d] border border-[#2b3752] text-cyan-300 font-semibold px-3 py-2 rounded-xl text-xs transition-colors"
          >
            {language === 'so' ? 'Template: Counter' : 'Counter Template'}
          </button>
          <button
            onClick={updatePreview}
            className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-md transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Run</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 bg-[#161e31] hover:bg-[#1f293d] border border-[#2b3752] text-slate-300 font-semibold px-3 py-2 rounded-xl text-xs transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Editor & Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Editor Box */}
        <div className="bg-[#111827] border border-[#1f293d] rounded-2xl overflow-hidden shadow-xl flex flex-col h-[480px]">
          {/* Tabs */}
          <div className="flex items-center bg-[#161e31] border-b border-[#2b3752] px-3 pt-2 gap-2">
            {[
              { id: 'html', label: 'HTML' },
              { id: 'css', label: 'CSS' },
              { id: 'js', label: 'JavaScript' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-t-xl text-xs font-bold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#0b0f19] text-cyan-400 border-t border-x border-[#2b3752]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Textarea Code Area */}
          <div className="flex-1 bg-[#0b0f19] p-4 font-mono text-xs sm:text-sm text-cyan-300 overflow-y-auto">
            {activeTab === 'html' && (
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="w-full h-full bg-transparent focus:outline-none resize-none leading-relaxed"
                spellCheck={false}
              />
            )}
            {activeTab === 'css' && (
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                className="w-full h-full bg-transparent focus:outline-none resize-none leading-relaxed"
                spellCheck={false}
              />
            )}
            {activeTab === 'js' && (
              <textarea
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                className="w-full h-full bg-transparent focus:outline-none resize-none leading-relaxed"
                spellCheck={false}
              />
            )}
          </div>
        </div>

        {/* Live Preview Sandbox & Console */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#111827] border border-[#1f293d] rounded-2xl overflow-hidden shadow-xl flex flex-col h-[320px]">
            <div className="bg-[#161e31] border-b border-[#2b3752] px-4 py-2.5 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {language === 'so' ? 'Natiijada Tooska ah (Live Preview)' : 'Live Preview'}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-1 bg-white">
              <iframe
                ref={iframeRef}
                title="preview"
                className="w-full h-full border-none"
                sandbox="allow-scripts"
              />
            </div>
          </div>

          {/* Console Drawer */}
          <div className="bg-[#111827] border border-[#1f293d] rounded-2xl overflow-hidden shadow-xl flex flex-col h-[140px]">
            <div className="bg-[#161e31] border-b border-[#2b3752] px-4 py-2 flex items-center justify-between">
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>Console Output</span>
              </span>
              <button
                onClick={() => setConsoleLogs([])}
                className="text-[10px] text-slate-400 hover:text-white"
              >
                Clear
              </button>
            </div>
            <div className="flex-1 bg-[#0b0f19] p-3 font-mono text-[11px] text-emerald-400 overflow-y-auto space-y-1">
              {consoleLogs.length === 0 ? (
                <span className="text-slate-600">// No console output yet...</span>
              ) : (
                consoleLogs.map((log, idx) => (
                  <div key={idx}>&gt; {log}</div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
