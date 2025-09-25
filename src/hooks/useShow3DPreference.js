import { useState, useEffect } from 'react';

export function useShow3DPreference() {
  const [show3D, setShow3D] = useState(() => {
    const stored = localStorage.getItem('show3D');
    return stored === null ? false : stored === 'true';
  });

  useEffect(() => {
    localStorage.setItem('show3D', show3D);
  }, [show3D]);

  return [show3D, setShow3D];
}