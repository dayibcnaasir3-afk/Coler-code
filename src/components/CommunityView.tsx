import React, { useState } from 'react';
import { CommunityPost, Language, UserProfile } from '../types';
import { MessageSquare, ThumbsUp, Send, PlusCircle, Sparkles } from 'lucide-react';

interface CommunityViewProps {
  posts: CommunityPost[];
  user: UserProfile;
  language: Language;
  onAddPost: (title: string, content: string, category: string) => void;
  onUpvote: (postId: string) => void;
  onAddReply: (postId: string, replyText: string) => void;
}

export const CommunityView: React.FC<CommunityViewProps> = ({
  posts,
  user,
  language,
  onAddPost,
  onUpvote,
  onAddReply,
}) => {
  const [showNewModal, setShowNewModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Su’aalo HTML / CSS');
  const [replyTexts, setReplyTexts] = useState<{ [key: string]: string }>({});
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onAddPost(title, content, category);
    setTitle('');
    setContent('');
    setShowNewModal(false);
  };

  const handleReplySubmit = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    const text = replyTexts[postId];
    if (!text || !text.trim()) return;
    onAddReply(postId, text);
    setReplyTexts({ ...replyTexts, [postId]: '' });
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            {language === 'so' ? 'Bulshada Ardayda Coler-Code' : 'Coler-Code Student Community'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            {language === 'so'
              ? 'Weydii su’aalo, la wadaag aqoontaada, oo kala hadal ardayda kale ee Soomaaliyeed.'
              : 'Ask questions, share knowledge, and discuss with fellow Somali learners.'}
          </p>
        </div>

        <button
          onClick={() => setShowNewModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-lg transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{language === 'so' ? 'Su’aal Cusub Qor' : 'Ask Question'}</span>
        </button>
      </div>

      {/* New Question Modal */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-6 w-full max-w-lg space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white">
              {language === 'so' ? 'Weydii Bulshada Su’aal' : 'Ask the Community'}
            </h3>

            <form onSubmit={handleSubmitPost} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  {language === 'so' ? 'Qaybta (Category)' : 'Category'}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#0b0f19] border border-[#2b3752] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option>Su’aalo HTML / CSS</option>
                  <option>JavaScript & DOM</option>
                  <option>Python & AI</option>
                  <option>Mashaariic & Career</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  {language === 'so' ? 'Cinwaanka Su’aasha' : 'Question Title'}
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={language === 'so' ? 'Tusaale: Sidee baan u isticmaalaa flexbox?' : 'e.g. How do I use flexbox?'}
                  className="w-full bg-[#0b0f19] border border-[#2b3752] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  {language === 'so' ? 'Faahfaahinta Su’aasha' : 'Description'}
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  placeholder={language === 'so' ? 'Sharax dhibaatadaada halkan...' : 'Describe your issue here...'}
                  className="w-full bg-[#0b0f19] border border-[#2b3752] rounded-xl p-4 text-xs text-white focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewModal(false)}
                  className="bg-[#161e31] border border-[#2b3752] text-slate-300 font-semibold px-4 py-2 rounded-xl text-xs"
                >
                  {language === 'so' ? 'Jooji' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-5 py-2 rounded-xl text-xs shadow-md"
                >
                  {language === 'so' ? 'Gudbi' : 'Post Question'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-[#111827] border border-[#1f293d] rounded-2xl p-6 space-y-4 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.authorAvatar}
                  alt={post.authorName}
                  className="w-10 h-10 rounded-full object-cover border border-cyan-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{post.authorName}</h4>
                  <p className="text-[10px] text-slate-400">{post.createdAt}</p>
                </div>
              </div>
              <span className="bg-[#161e31] border border-[#2b3752] text-cyan-300 text-[10px] px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">{post.title}</h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                {post.content}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2 border-t border-[#1f293d]">
              <button
                onClick={() => onUpvote(post.id)}
                className="flex items-center gap-1.5 bg-[#161e31] hover:bg-[#1f293d] border border-[#2b3752] px-3 py-1.5 rounded-xl text-cyan-400 text-xs font-semibold transition-colors"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{post.upvotes}</span>
              </button>
              <button
                onClick={() => setActivePostId(activePostId === post.id ? null : post.id)}
                className="flex items-center gap-1.5 bg-[#161e31] hover:bg-[#1f293d] border border-[#2b3752] px-3 py-1.5 rounded-xl text-slate-300 text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{post.replies.length} {language === 'so' ? 'Jawaabood' : 'Replies'}</span>
              </button>
            </div>

            {/* Replies section */}
            {activePostId === post.id && (
              <div className="space-y-3 pt-4 border-t border-[#1f293d] animate-fadeIn">
                <div className="space-y-2">
                  {post.replies.map((reply) => (
                    <div key={reply.id} className="bg-[#161e31] border border-[#2b3752] rounded-xl p-3 space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-cyan-400 font-bold">
                        <span>{reply.authorName}</span>
                        <span className="text-slate-500 font-normal">{reply.createdAt}</span>
                      </div>
                      <p className="text-xs text-slate-200">{reply.content}</p>
                    </div>
                  ))}
                </div>

                <form onSubmit={(e) => handleReplySubmit(post.id, e)} className="flex items-center gap-2 pt-2">
                  <input
                    type="text"
                    value={replyTexts[post.id] || ''}
                    onChange={(e) => setReplyTexts({ ...replyTexts, [post.id]: e.target.value })}
                    placeholder={language === 'so' ? 'Qor jawaabtaada...' : 'Write your reply...'}
                    className="flex-1 bg-[#0b0f19] border border-[#2b3752] rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                  <button
                    type="submit"
                    className="bg-cyan-500 text-white p-2 rounded-xl text-xs font-bold shadow-md"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
