// src/hooks/useDiving.jsx

import { useEffect, useState } from 'react';

/**
 * Hook personalizado para detectar se a página foi rolada para baixo.
 * O nome "diving" pode ser interpretado como "mergulhar na página".
 * @param {number} threshold - A quantidade de pixels que o usuário precisa rolar para baixo para que o estado mude.
 * @returns {boolean} - Retorna `true` se a rolagem for maior que o threshold, `false` caso contrário.
 */
export default function useDiving(threshold = 100) {
    const [diving, setDiving] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // Atualiza o estado com base na posição da rolagem
            setDiving(window.scrollY > threshold);
        };

        // Adiciona o listener de evento quando o componente é montado
        window.addEventListener('scroll', onScroll);

        // Remove o listener quando o componente é desmontado para evitar vazamentos de memória
        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]); // O 'threshold' é uma dependência para o hook

    return diving;
}