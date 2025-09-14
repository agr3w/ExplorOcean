import { useFrame } from '@react-three/fiber';

export default function useSlowRotation(ref, speed = 0.0001) {
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += speed;
    }
  });
}