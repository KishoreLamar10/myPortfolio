import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { KNOWLEDGE_BASE } from '../data/knowledge';
import './AIChatbot.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hi! I'm Kishore's AI Chatbot. Ask me anything about his experience, projects, or skills!", sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [lastTopic, setLastTopic] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = generateResponse(text);
      const aiMessage: Message = { id: (Date.now() + 1).toString(), text: response, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 800);
  };

  const generateResponse = (input: string): string => {
    const lowInput = input.toLowerCase();
    
    // 1. HELP / GREETINGS
    if (lowInput.includes('hello') || lowInput.includes('hi') || lowInput.includes('hey')) {
      return "Hello! I'm here to help you get to know Kishore better. You can ask about his projects, skills, or professional background!";
    }

    // 2. SKILLS & TECH
    if (lowInput.includes('skill') || lowInput.includes('stack') || lowInput.includes('language') || lowInput.includes('technologies')) {
      return `Kishore is a multi-disciplinary developer. He's proficient in ${KNOWLEDGE_BASE.skills.languages.join(', ')}. His core frameworks include ${KNOWLEDGE_BASE.skills.frameworks.join(', ')}. He also has deep expertise in GenAI (LangChain, RAG) and Cloud DevOps.`;
    }

    // 3. EXPERIENCE
    if (lowInput.includes('experience') || lowInput.includes('work') || lowInput.includes('background') || lowInput.includes('who is')) {
      return `Kishore is a Software Developer with over 2 years of experience. He's currently pursuing his Master's at Northeastern University and specializes in Full-Stack development and AI systems.`;
    }

    // 4. PROJECT SELECTION / SEARCH
    const foundProject = KNOWLEDGE_BASE.projects.find(p => 
      lowInput.includes(p.name.toLowerCase()) || 
      (p.id && lowInput.includes(p.id.toLowerCase()))
    );

    if (foundProject) {
      setLastTopic(foundProject.id);
      return `${foundProject.name}: ${foundProject.description}. He built this using ${foundProject.tech_stack.join(', ')}. Would you like to hear about the challenge he faced or what else it can do?`;
    }

    // 5. CONTEXTUAL FOLLOW-UPS (Crucial for "User Feedback")
    if (lastTopic) {
      const currentProj = KNOWLEDGE_BASE.projects.find(p => p.id === lastTopic);
      if (currentProj) {
        if (lowInput.includes('problem') || lowInput.includes('challenge') || lowInput.includes('why') || lowInput.includes('built') || lowInput.includes('solution')) {
          return `${currentProj.problem} To solve this, he ${currentProj.solution}`;
        }
        if (lowInput.includes('else') || lowInput.includes('more') || lowInput.includes('function') || lowInput.includes('can it do')) {
          return `Beyond the basics, ${currentProj.what_else}`;
        }
      }
    }

    // 6. GENERIC "TELL ME ABOUT PROJECTS"
    if (lowInput.includes('project')) {
      return `Kishore has worked on some cool stuff! Notable projects include ${KNOWLEDGE_BASE.projects.map(p => p.name).join(', ')}. Which one sparks your interest?`;
    }

    // 7. CONTACT
    if (lowInput.includes('contact') || lowInput.includes('email') || lowInput.includes('hire') || lowInput.includes('reach')) {
      return `You can reach out to Kishore at ${KNOWLEDGE_BASE.socials.email} or connect on LinkedIn at ${KNOWLEDGE_BASE.socials.linkedin}.`;
    }

    // 8. DEFAULT FALLBACK
    return "That's a great question! While I might not have the specific detail for that, I can tell you about Kishore's projects, skills, or how he approaches software engineering. What would you like to explore?";
  };

  return (
    <div className="ai-chatbot-container">
      <motion.button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="chatbot-header">
              <h4>CHATBOT</h4>
              <button onClick={() => setIsOpen(false)}><FaTimes /></button>
            </div>

            <div className="chatbot-messages">
              {messages.map(msg => (
                <motion.div 
                  key={msg.id} 
                  className={`message ${msg.sender}`}
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isTyping && <div className="typing-indicator">Kishore AI is typing...</div>}
              <div ref={messagesEndRef} />
            </div>

            <div className="suggested-chips">
              <button className="chip" onClick={() => handleSend("Tell me about your tech stack")}>Tech Stack</button>
              <button className="chip" onClick={() => handleSend("What projects have you built?")}>Projects</button>
              <button className="chip" onClick={() => handleSend("How can I contact you?")}>Contact</button>
            </div>

            <div className="chatbot-input">
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
              />
              <button onClick={() => handleSend(inputValue)}>
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatbot;
