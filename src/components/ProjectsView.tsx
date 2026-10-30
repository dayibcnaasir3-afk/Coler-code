import React, { useState } from 'react';
import { Project, Language } from '../types';
import { FolderGit2, ArrowRight, Code2, CheckCircle, Sparkles } from 'lucide-react';

interface ProjectsViewProps {
  projects: Project[];
  language: Language;
  setActiveTab: (tab: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  projects,
  language,
  setActiveTab,
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const activeProject = projects.find(p => p.id === selectedProjectId);

  if (activeProject) {
    return (
      <div className="space-y-6 pb-20">
        <button
          onClick={() => setSelectedProjectId(null)}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs font-semibold bg-[#161e31] border border-[#2b3752] px-3.5 py-2 rounded-xl transition-colors"
        >
          <span>← {language === 'so' ? 'Ku laabo Mashaariicda' : 'Back to Projects'}</span>
        </button>

        {/* Project Header */}
        <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'so' ? activeProject.difficultySo : activeProject.difficultyEn}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {language === 'so' ? activeProject.titleSo : activeProject.titleEn}
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            {language === 'so' ? activeProject.descSo : activeProject.descEn}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {(language === 'so' ? activeProject.skillsSo : activeProject.skillsEn).map((skill, idx) => (
              <span key={idx} className="bg-[#161e31] border border-[#2b3752] text-cyan-300 text-xs px-3 py-1 rounded-lg font-mono">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white tracking-tight">
            {language === 'so' ? 'Tallaabooyinka Mashruuca' : 'Project Steps'}
          </h3>

          <div className="space-y-4">
            {(language === 'so' ? activeProject.stepsSo : activeProject.stepsEn).map((step, index) => (
              <div key={index} className="bg-[#111827] border border-[#1f293d] rounded-2xl p-5 space-y-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/25 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold text-xs">
                    {step.stepNumber}
                  </div>
                  <h4 className="text-base font-bold text-white">{step.title}</h4>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {step.detail}
                </p>
                {step.codeSnippet && (
                  <pre className="bg-[#0b0f19] border border-[#1f293d] p-3 rounded-xl text-xs font-mono text-cyan-300 overflow-x-auto">
                    <code>{step.codeSnippet}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end pt-2">
          <button
            onClick={() => setActiveTab('playground')}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-lg transition-all"
          >
            <Code2 className="w-4 h-4" />
            <span>{language === 'so' ? 'Ku fur Qolka Tijaabada' : 'Open in Playground'}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-20">
      <div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight">
          {language === 'so' ? 'Mashaariicda Gacan-ka-Hadal ah' : 'Hands-on Coding Projects'}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          {language === 'so'
            ? 'Dhis mashaariic dhab ah si aad u xoojiso aqoontaada coding-ka.'
            : 'Build real-world projects to solidify your programming skills.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProjectId(project.id)}
            className="bg-[#111827] hover:bg-[#161e31] border border-[#1f293d] hover:border-cyan-500/40 rounded-2xl p-6 cursor-pointer transition-all shadow-md group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-semibold bg-[#161e31] text-cyan-300 px-3 py-1 rounded-full border border-[#2b3752]">
                  {language === 'so' ? project.difficultySo : project.difficultyEn}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {language === 'so' ? project.titleSo : project.titleEn}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1 line-clamp-2 leading-relaxed">
                  {language === 'so' ? project.descSo : project.descEn}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {(language === 'so' ? project.skillsSo : project.skillsEn).map((skill, idx) => (
                  <span key={idx} className="bg-[#161e31] border border-[#2b3752] text-cyan-300 text-[10px] px-2.5 py-1 rounded-md font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1f293d] flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
              <span>{language === 'so' ? 'Eeg Faahfaahinta Mashruuca' : 'View Project Details'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
