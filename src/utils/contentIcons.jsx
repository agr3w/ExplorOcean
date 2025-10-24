import React from 'react';
import { MdQuiz, MdMovie, MdPets, MdEco } from 'react-icons/md';

export const iconMap = {
    'quizzes': <MdQuiz size={16} color="#8d14ffff" />,
    'documentaries': <MdMovie size={16} color="#00e676" />,
    'fauna': <MdPets size={16} color="#2979ff" />,
    'flora': <MdEco size={16} color="#ffd600" />,
};

export function normalizeType(type) {
    if (!type) return '';
    const t = type.toLowerCase();
    if (t.includes('doc')) return 'documentaries';
    if (t.includes('quiz')) return 'quizzes';
    if (t.includes('fauna')) return 'fauna';
    if (t.includes('flora')) return 'flora';
    return ''; 
}