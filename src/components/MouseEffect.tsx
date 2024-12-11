'use client';
import { useState, useEffect, useCallback } from 'react';

const SpaceParticlesEffect = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const maxParticles = 100;

  const generateParticle = useCallback((x, y) => {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.5; // توجيه عمودي مع انحراف قليل
    const speed = 2 + Math.random() * 4;
    const life = 0.7 + Math.random() * 0.5;
    
    return {
      id: Date.now() + Math.random(),
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 1 + Math.random() * 3,
      life,
      maxLife: life,
      color: `hsl(${200 + Math.random() * 40}, ${70 + Math.random() * 30}%, ${85 + Math.random() * 15}%)`
    };
  }, []);

  useEffect(() => {
    let animationId;
    let lastTime = 0;

    const animate = (timestamp) => {
      if (timestamp - lastTime > 20) { // التحكم في معدل إضافة الجزيئات
        setParticles(prevParticles => {
          const newParticles = prevParticles
            .map(p => ({
              ...p,
              x: p.x + p.vx,
              y: p.y + p.vy,
              life: p.life - 0.016
            }))
            .filter(p => p.life > 0);

          return newParticles;
        });
        lastTime = timestamp;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
      
      // إضافة مجموعة من الجزيئات في كل حركة
      const newParticles = Array.from({ length: 5 }, () => 
        generateParticle(e.clientX, e.clientY)
      );

      setParticles(prev => [...newParticles, ...prev].slice(0, maxParticles));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [generateParticle]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Core glow */}
      <div
        className="absolute w-8 h-8 rounded-full"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(200,220,255,0.4) 40%, transparent 70%)',
          boxShadow: '0 0 15px 5px rgba(180,210,255,0.3)',
        }}
      />

      {/* Particles */}
      {/* {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            opacity: (particle.life / particle.maxLife) * 0.8,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px ${particle.color}`,
            filter: 'blur(1px)',
          }}
        />
      ))} */}

      {/* Background glow */}
      {/* <div
        className="absolute transition-opacity duration-300"
        style={{
          left: cursor.x,
          top: cursor.y,
          width: '150px',
          height: '250px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse at center, rgba(180,210,255,0.1) 0%, rgba(150,190,255,0.05) 50%, transparent 70%)',
          filter: 'blur(5px)',
        }}
      /> */}
    </div>
  );
};

export default SpaceParticlesEffect;