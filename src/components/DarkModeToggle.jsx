import { useEffect, useState } from 'react';
import { MoonStar, SunMedium } from 'lucide-react';

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="text-indigo-600 dark:text-yellow-300 hover:scale-110 transition transform p-2 rounded-full"
        >
            {isDark ? <SunMedium size={24} /> : <MoonStar size={24} />}
        </button>
    );
}
