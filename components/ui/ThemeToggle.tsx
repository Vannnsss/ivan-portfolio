'use client';
import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 p-2 text-accent rounded-full border border-gray-500 hover:bg-gray-300 dark:hover:bg-gray-800 transition"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
