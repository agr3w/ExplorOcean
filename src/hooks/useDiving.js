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
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const newValue = window.scrollY > threshold;
                    if (lastValue.current !== newValue) {
                        setDiving(newValue);
                        lastValue.current = newValue;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);

    return diving;
}