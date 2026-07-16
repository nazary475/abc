'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Minimize2, Paperclip, Image as ImageIcon, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  attachments?: Attachment[];
}

interface Attachment {
  type: 'image' | 'file';
  name: string;
  url: string;
  size: number;
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m the Haal Lab AI assistant. Ask me anything about our services, projects, or how we can help with your AI needs.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!input.trim() && attachments.length === 0) || isLoading) return;

    const userMessage: Message = { 
      role: 'user', 
      content: input.trim() || 'Attached files',
      attachments: attachments.length > 0 ? [...attachments] : undefined
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setAttachments([]);
    setIsLoading(true);

    try {
      // Prepare message content with attachment info
      let messageContent = userMessage.content;
      if (userMessage.attachments && userMessage.attachments.length > 0) {
        messageContent += '\n\n[User attached: ' + 
          userMessage.attachments.map(a => `${a.name} (${a.type})`).join(', ') + 
          ']';
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: messageContent }].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: error instanceof Error && error.message.includes('API key') 
          ? 'Sorry, there\'s a configuration issue with the AI service. Please contact us directly at hussain.nazary@haal-lab.solutions'
          : 'Sorry, I encountered an error. Please try again or contact us directly at hussain.nazary@haal-lab.solutions',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is 10MB.`);
        return;
      }

      // Determine file type
      const isImage = file.type.startsWith('image/');
      const fileType = isImage ? 'image' : 'file';

      // Create a URL for the file
      const url = URL.createObjectURL(file);

      const attachment: Attachment = {
        type: fileType,
        name: file.name,
        url: url,
        size: file.size,
      };

      setAttachments((prev) => [...prev, attachment]);
    });

    // Reset the input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => {
      const newAttachments = [...prev];
      // Revoke the URL to free memory
      URL.revokeObjectURL(newAttachments[index].url);
      newAttachments.splice(index, 1);
      return newAttachments;
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Open chat"
          >
            <MessageCircle className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : '450px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-5 right-5 z-50 w-[340px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-lg border border-border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-muted/50 px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MessageCircle className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold">Haal Lab Assistant</h3>
                  <p className="text-[10px] text-muted-foreground">AI-powered help</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="rounded p-1 hover:bg-muted transition-colors"
                  aria-label="Minimize chat"
                >
                  <Minimize2 className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded p-1 hover:bg-muted transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="h-[320px] overflow-y-auto p-3 space-y-3">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg px-3 py-2 ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {/* Show attachments if present */}
                        {message.attachments && message.attachments.length > 0 && (
                          <div className="mb-2 space-y-1">
                            {message.attachments.map((attachment, attIndex) => (
                              <div
                                key={attIndex}
                                className="flex items-center gap-2 rounded bg-background/20 px-2 py-1"
                              >
                                {attachment.type === 'image' ? (
                                  <>
                                    <ImageIcon className="h-3 w-3 flex-shrink-0" />
                                    <img
                                      src={attachment.url}
                                      alt={attachment.name}
                                      className="max-w-full rounded max-h-32 object-contain"
                                    />
                                  </>
                                ) : (
                                  <>
                                    <FileText className="h-3 w-3 flex-shrink-0" />
                                    <span className="text-[10px] truncate">
                                      {attachment.name}
                                    </span>
                                  </>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        <p className="text-xs whitespace-pre-wrap break-words">
                          {message.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="rounded-lg bg-muted px-3 py-2">
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="border-t border-border p-3">
                  {/* Attachment Preview */}
                  {attachments.length > 0 && (
                    <div className="mb-2 flex flex-wrap gap-2">
                      {attachments.map((attachment, index) => (
                        <div
                          key={index}
                          className="relative flex items-center gap-1.5 rounded-lg border border-border bg-muted px-2 py-1.5"
                        >
                          {attachment.type === 'image' ? (
                            <>
                              <ImageIcon className="h-3 w-3 flex-shrink-0" />
                              <div className="flex flex-col">
                                <span className="text-[10px] font-medium truncate max-w-[120px]">
                                  {attachment.name}
                                </span>
                                <span className="text-[9px] text-muted-foreground">
                                  {formatFileSize(attachment.size)}
                                </span>
                              </div>
                            </>
                          ) : (
                            <>
                              <FileText className="h-3 w-3 flex-shrink-0" />
                              <div className="flex flex-col">
                                <span className="text-[10px] font-medium truncate max-w-[120px]">
                                  {attachment.name}
                                </span>
                                <span className="text-[9px] text-muted-foreground">
                                  {formatFileSize(attachment.size)}
                                </span>
                              </div>
                            </>
                          )}
                          <button
                            type="button"
                            onClick={() => removeAttachment(index)}
                            className="ml-1 rounded-full p-0.5 hover:bg-background transition-colors"
                            aria-label="Remove attachment"
                          >
                            <X className="h-2.5 w-2.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    {/* Hidden file input */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*,.pdf,.doc,.docx,.txt"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    
                    {/* Attachment button */}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-input bg-background hover:bg-muted transition-colors"
                      aria-label="Attach file"
                      disabled={isLoading}
                    >
                      <Paperclip className="h-3.5 w-3.5" />
                    </button>
                    
                    <textarea
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask me anything..."
                      rows={1}
                      className="flex-1 resize-none rounded-lg border border-input bg-background px-2.5 py-1.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || (!input.trim() && attachments.length === 0)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Send message"
                    >
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="mt-1.5 text-[10px] text-muted-foreground">
                    Press Enter to send, Shift+Enter for new line
                  </p>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
