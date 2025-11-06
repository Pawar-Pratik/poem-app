const Butterfly = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg
        className="absolute animate-butterfly opacity-40"
        style={{ left: "20%", top: "30%" }}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Butterfly body */}
        <ellipse cx="40" cy="40" rx="3" ry="12" fill="hsl(var(--accent))" />
        
        {/* Left wing top */}
        <path
          d="M 20 25 Q 5 15 8 30 Q 12 40 20 38 Q 25 35 20 25 Z"
          fill="hsl(var(--primary))"
          opacity="0.7"
        />
        
        {/* Left wing bottom */}
        <path
          d="M 20 42 Q 8 45 10 58 Q 15 65 22 58 Q 28 50 20 42 Z"
          fill="hsl(var(--accent))"
          opacity="0.6"
        />
        
        {/* Right wing top */}
        <path
          d="M 60 25 Q 75 15 72 30 Q 68 40 60 38 Q 55 35 60 25 Z"
          fill="hsl(var(--primary))"
          opacity="0.7"
        />
        
        {/* Right wing bottom */}
        <path
          d="M 60 42 Q 72 45 70 58 Q 65 65 58 58 Q 52 50 60 42 Z"
          fill="hsl(var(--accent))"
          opacity="0.6"
        />
        
        {/* Wing decorations */}
        <circle cx="15" cy="28" r="3" fill="hsl(var(--primary-hover))" opacity="0.8" />
        <circle cx="65" cy="28" r="3" fill="hsl(var(--primary-hover))" opacity="0.8" />
        <circle cx="16" cy="50" r="2.5" fill="hsl(var(--primary-hover))" opacity="0.8" />
        <circle cx="64" cy="50" r="2.5" fill="hsl(var(--primary-hover))" opacity="0.8" />
        
        {/* Antennae */}
        <path
          d="M 38 30 Q 35 22 32 18"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 42 30 Q 45 22 48 18"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="32" cy="18" r="2" fill="hsl(var(--accent))" />
        <circle cx="48" cy="18" r="2" fill="hsl(var(--accent))" />
      </svg>
    </div>
  );
};

export default Butterfly;
