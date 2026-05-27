import React, { useState, useEffect, useCallback, useRef } from 'react';

const Particle = ({ x, y, color, size, tx, ty, duration }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setActive(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: active ? `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)` : 'translate(-50%, -50%) scale(1)',
        opacity: active ? 0 : 1,
        transition: `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`,
        boxShadow: `0 0 ${size * 2}px ${color}`
      }}
    />
  );
};

export default function TouchParticles({ effect }) {
  const [particles, setParticles] = useState([]);
  const lastSpawnTime = useRef(0);

  const spawnParticles = useCallback((e) => {
    if (!effect || effect === 'Off') return;
    
    const now = Date.now();
    if (now - lastSpawnTime.current < 50) return; // Debounce touch+click double fire
    lastSpawnTime.current = now;

    let x, y;
    if (e.touches && e.touches.length > 0) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }

    const count = Math.floor(5 + Math.random() * 5); // 5 to 10 particles
    const newParticles = [];
    const idPrefix = Date.now() + '-' + Math.random().toString(36).substring(2, 9);

    for (let i = 0; i < count; i++) {
      let tx, ty, color, size, duration;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 60 + 30;
      
      tx = Math.cos(angle) * speed;
      ty = Math.sin(angle) * speed;
      duration = 600 + Math.random() * 400; // 600ms - 1000ms
      size = 4 + Math.random() * 6;

      if (effect === 'Firefly') {
        color = '#a3e635'; // lime-400
        ty = -Math.abs(ty) - (30 + Math.random() * 30); // Float up
        tx = tx * 0.5; // less horizontal
      } else if (effect === 'Rainbow Sparkle') {
        const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
        color = colors[Math.floor(Math.random() * colors.length)];
      } else if (effect === 'Snow Particles') {
        color = '#ffffff';
        ty = Math.abs(ty) + (20 + Math.random() * 20); // Float down
        size = 3 + Math.random() * 4;
        duration = 800 + Math.random() * 500;
      } else if (effect === 'Magic Trail') {
        const colors = ['#d946ef', '#c026d3', '#e879f9']; // fuchsias
        color = colors[Math.floor(Math.random() * colors.length)];
        size = 2 + Math.random() * 3;
        duration = 500 + Math.random() * 300;
        tx = tx * 0.7;
        ty = ty * 0.7;
      } else {
        color = '#fbbf24'; // default amber-400
      }

      newParticles.push({
        id: `${idPrefix}-${i}`,
        x, y, tx, ty, color, size, duration
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);

    // Clean up particles slightly after their maximum duration
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 1500);

  }, [effect]);

  useEffect(() => {
    if (!effect || effect === 'Off') return;

    window.addEventListener('touchstart', spawnParticles, { passive: true });
    window.addEventListener('click', spawnParticles, { passive: true });

    return () => {
      window.removeEventListener('touchstart', spawnParticles);
      window.removeEventListener('click', spawnParticles);
    };
  }, [effect, spawnParticles]);

  if (!effect || effect === 'Off') return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}
    </div>
  );
}
