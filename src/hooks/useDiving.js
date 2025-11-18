import { useEffect, useState, useRef } from 'react';

/**
 * Hook otimizado para detectar se a página foi rolada para baixo.
 * Evita re-renderizações desnecessárias usando requestAnimationFrame.
 */
export default function useDiving(threshold = 100) {
    const [diving, setDiving] = useState(false);
    const lastValue = useRef(diving);

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY || window.pageYOffset;
                const newValue = scrollY > threshold;
                // atualiza estado apenas quando passar threshold relevante
                if (lastValue.current !== newValue) {
                    setDiving(newValue);
                    lastValue.current = newValue;
                }
                ticking = false;
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);

    return diving;
}