const SakuraTree = () => {
  // Generate random delays and durations for natural falling effect
  const leaves = [
    { delay: 0, duration: 12 },
    { delay: 2, duration: 14 },
    { delay: 4, duration: 10 },
    { delay: 1, duration: 13 },
    { delay: 6, duration: 11 },
    { delay: 3, duration: 15 },
    { delay: 5, duration: 9 },
  ];

  return (
    <div
      className="fixed bottom-0 left-0 pointer-events-none z-0"
      style={{ transform: "translateZ(0)" }}
      aria-hidden="true"
    >
      {/* Tree SVG - Responsive sizing */}
      <svg
        className="h-[140px] sm:h-[220px] lg:h-[280px] w-auto opacity-60"
        viewBox="0 0 200 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tree trunk */}
        <path
          d="M90 280 L90 180 Q90 170 95 165 L95 165 Q100 160 105 165 L105 165 L105 280 Z"
          fill="hsl(25, 40%, 30%)"
          opacity="0.8"
        />
        
        {/* Main branches */}
        <path
          d="M95 180 Q80 160 65 145 Q60 140 55 145"
          stroke="hsl(25, 40%, 35%)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M100 190 Q115 170 135 150 Q140 145 145 150"
          stroke="hsl(25, 40%, 35%)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M97 170 Q75 155 60 130 Q55 125 50 130"
          stroke="hsl(25, 40%, 35%)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M103 175 Q125 160 145 135 Q150 130 155 135"
          stroke="hsl(25, 40%, 35%)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />

        {/* Small branches */}
        <path
          d="M95 200 Q70 185 50 175"
          stroke="hsl(25, 40%, 40%)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M105 210 Q130 195 150 180"
          stroke="hsl(25, 40%, 40%)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />

        {/* Sakura blossoms - Dense coverage for full bloom effect */}
        
        {/* Left main branch area (65, 145) - Dense clusters */}
        <circle cx="55" cy="145" r="4" fill="#ffb7c5" opacity="0.9" />
        <circle cx="60" cy="145" r="4" fill="#ffc0cb" opacity="0.9" />
        <circle cx="65" cy="143" r="3.5" fill="#ff69b4" opacity="0.85" />
        <circle cx="58" cy="148" r="3.5" fill="#ffc0cb" opacity="0.9" />
        <circle cx="62" cy="150" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="67" cy="147" r="3.5" fill="#ff69b4" opacity="0.9" />
        <circle cx="53" cy="148" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="57" cy="142" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="63" cy="145" r="3.5" fill="#ff69b4" opacity="0.9" />
        <circle cx="69" cy="144" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="56" cy="151" r="2.5" fill="#ffb7c5" opacity="0.8" />
        <circle cx="61" cy="141" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="66" cy="150" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="52" cy="143" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="68" cy="141" r="2.5" fill="#ff69b4" opacity="0.8" />
        <circle cx="54" cy="146" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="59" cy="149" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="64" cy="146" r="3" fill="#ff69b4" opacity="0.85" />

        {/* Right main branch area (135, 150) - Dense clusters */}
        <circle cx="135" cy="150" r="4" fill="#ffc0cb" opacity="0.9" />
        <circle cx="140" cy="150" r="4" fill="#ffb7c5" opacity="0.9" />
        <circle cx="145" cy="148" r="3.5" fill="#ff69b4" opacity="0.85" />
        <circle cx="137" cy="153" r="3.5" fill="#ffc0cb" opacity="0.9" />
        <circle cx="143" cy="145" r="3.5" fill="#ffb7c5" opacity="0.9" />
        <circle cx="148" cy="152" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="133" cy="148" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="138" cy="147" r="3.5" fill="#ffb7c5" opacity="0.9" />
        <circle cx="142" cy="151" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="147" cy="149" r="3.5" fill="#ffc0cb" opacity="0.9" />
        <circle cx="136" cy="151" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="141" cy="154" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="146" cy="146" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="134" cy="152" r="2.5" fill="#ffb7c5" opacity="0.8" />
        <circle cx="139" cy="149" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="144" cy="153" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="149" cy="150" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="132" cy="150" r="3" fill="#ff69b4" opacity="0.85" />

        {/* Upper left branch area (60, 130) - Dense clusters */}
        <circle cx="50" cy="130" r="3.5" fill="#ff69b4" opacity="0.9" />
        <circle cx="55" cy="130" r="4" fill="#ffc0cb" opacity="0.9" />
        <circle cx="60" cy="128" r="3.5" fill="#ffb7c5" opacity="0.9" />
        <circle cx="52" cy="133" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="57" cy="127" r="3.5" fill="#ffc0cb" opacity="0.9" />
        <circle cx="62" cy="131" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="54" cy="129" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="59" cy="132" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="48" cy="132" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="53" cy="126" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="58" cy="134" r="2.5" fill="#ffc0cb" opacity="0.8" />
        <circle cx="63" cy="129" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="51" cy="128" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="56" cy="131" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="61" cy="126" r="2.5" fill="#ffb7c5" opacity="0.8" />

        {/* Upper right branch area (145, 135) - Dense clusters */}
        <circle cx="145" cy="135" r="4" fill="#ffc0cb" opacity="0.9" />
        <circle cx="150" cy="135" r="3.5" fill="#ffb7c5" opacity="0.9" />
        <circle cx="155" cy="133" r="3.5" fill="#ff69b4" opacity="0.9" />
        <circle cx="147" cy="138" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="152" cy="132" r="3.5" fill="#ffb7c5" opacity="0.9" />
        <circle cx="157" cy="136" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="149" cy="134" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="154" cy="137" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="143" cy="137" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="148" cy="131" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="153" cy="139" r="2.5" fill="#ffb7c5" opacity="0.8" />
        <circle cx="158" cy="134" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="146" cy="133" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="151" cy="136" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="156" cy="131" r="2.5" fill="#ff69b4" opacity="0.8" />

        {/* Left small branch area (50, 175) - Dense clusters */}
        <circle cx="46" cy="175" r="3.5" fill="#ffb7c5" opacity="0.9" />
        <circle cx="50" cy="177" r="3.5" fill="#ffc0cb" opacity="0.9" />
        <circle cx="54" cy="175" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="48" cy="178" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="52" cy="173" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="56" cy="176" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="44" cy="177" r="2.5" fill="#ffc0cb" opacity="0.8" />
        <circle cx="49" cy="174" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="53" cy="178" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="51" cy="175" r="3" fill="#ffc0cb" opacity="0.85" />

        {/* Right small branch area (150, 180) - Dense clusters */}
        <circle cx="146" cy="180" r="3.5" fill="#ffc0cb" opacity="0.9" />
        <circle cx="150" cy="182" r="3.5" fill="#ffb7c5" opacity="0.9" />
        <circle cx="154" cy="180" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="148" cy="183" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="152" cy="178" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="156" cy="181" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="144" cy="182" r="2.5" fill="#ffb7c5" opacity="0.8" />
        <circle cx="149" cy="179" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="153" cy="183" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="151" cy="180" r="3" fill="#ffb7c5" opacity="0.85" />

        {/* Center trunk area - Dense vertical coverage */}
        <circle cx="90" cy="185" r="3.5" fill="#ff69b4" opacity="0.9" />
        <circle cx="95" cy="183" r="3.5" fill="#ffc0cb" opacity="0.9" />
        <circle cx="100" cy="185" r="3.5" fill="#ffb7c5" opacity="0.9" />
        <circle cx="105" cy="187" r="3.5" fill="#ff69b4" opacity="0.9" />
        <circle cx="92" cy="188" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="97" cy="186" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="102" cy="184" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="94" cy="190" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="99" cy="188" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="104" cy="190" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="91" cy="192" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="96" cy="190" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="101" cy="192" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="106" cy="189" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="93" cy="195" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="98" cy="193" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="103" cy="195" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="88" cy="187" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="107" cy="185" r="3" fill="#ff69b4" opacity="0.85" />

        {/* Mid-section fill - Between branches */}
        <circle cx="70" cy="158" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="75" cy="160" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="80" cy="162" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="85" cy="164" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="73" cy="163" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="78" cy="165" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="83" cy="167" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="72" cy="156" r="2.5" fill="#ffb7c5" opacity="0.8" />
        <circle cx="77" cy="158" r="2.5" fill="#ff69b4" opacity="0.8" />
        <circle cx="82" cy="160" r="2.5" fill="#ffc0cb" opacity="0.8" />

        <circle cx="115" cy="160" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="120" cy="162" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="125" cy="164" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="130" cy="166" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="118" cy="165" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="123" cy="167" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="128" cy="169" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="117" cy="158" r="2.5" fill="#ff69b4" opacity="0.8" />
        <circle cx="122" cy="160" r="2.5" fill="#ffc0cb" opacity="0.8" />
        <circle cx="127" cy="162" r="2.5" fill="#ffb7c5" opacity="0.8" />

        {/* Lower trunk area - More coverage */}
        <circle cx="87" cy="195" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="92" cy="197" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="97" cy="199" r="3" fill="#ffb7c5" opacity="0.85" />
        <circle cx="102" cy="197" r="3" fill="#ff69b4" opacity="0.85" />
        <circle cx="107" cy="195" r="3" fill="#ffc0cb" opacity="0.85" />
        <circle cx="89" cy="200" r="2.5" fill="#ffb7c5" opacity="0.8" />
        <circle cx="94" cy="202" r="2.5" fill="#ff69b4" opacity="0.8" />
        <circle cx="99" cy="204" r="2.5" fill="#ffc0cb" opacity="0.8" />
        <circle cx="104" cy="202" r="2.5" fill="#ffb7c5" opacity="0.8" />

        {/* Additional scattered coverage for gaps */}
        <circle cx="68" cy="150" r="2.5" fill="#ff69b4" opacity="0.8" />
        <circle cx="74" cy="153" r="2.5" fill="#ffc0cb" opacity="0.8" />
        <circle cx="86" cy="170" r="2.5" fill="#ffb7c5" opacity="0.8" />
        <circle cx="90" cy="175" r="2.5" fill="#ff69b4" opacity="0.8" />
        <circle cx="110" cy="175" r="2.5" fill="#ffc0cb" opacity="0.8" />
        <circle cx="114" cy="170" r="2.5" fill="#ffb7c5" opacity="0.8" />
        <circle cx="126" cy="153" r="2.5" fill="#ff69b4" opacity="0.8" />
        <circle cx="132" cy="155" r="2.5" fill="#ffc0cb" opacity="0.8" />
        <circle cx="65" cy="140" r="2.5" fill="#ffb7c5" opacity="0.8" />
        <circle cx="135" cy="142" r="2.5" fill="#ff69b4" opacity="0.8" />
      </svg>

      {/* Falling sakura leaves - Show fewer on mobile */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
        {leaves.slice(0, 4).map((leaf, index) => (
          <div
            key={`leaf-mobile-${index}`}
            className="absolute sm:hidden animate-sakura-fall"
            style={{
              left: `${20 + index * 15}px`,
              top: `${100 + index * 20}px`,
              animationDelay: `${leaf.delay}s`,
              animationDuration: `${leaf.duration}s`,
            }}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2 Q12 6 10 10 Q8 6 10 2 Z"
                fill="#ffb7c5"
                opacity="0.9"
              />
              <path
                d="M10 10 Q14 12 18 10 Q14 8 10 10 Z"
                fill="#ffc0cb"
                opacity="0.9"
              />
              <path
                d="M10 10 Q12 14 10 18 Q8 14 10 10 Z"
                fill="#ff69b4"
                opacity="0.9"
              />
              <path
                d="M10 10 Q6 12 2 10 Q6 8 10 10 Z"
                fill="#ffb7c5"
                opacity="0.9"
              />
              <circle cx="10" cy="10" r="2" fill="#ff1493" opacity="0.8" />
            </svg>
          </div>
        ))}

        {leaves.map((leaf, index) => (
          <div
            key={`leaf-desktop-${index}`}
            className="absolute hidden sm:block animate-sakura-fall"
            style={{
              left: `${30 + index * 20}px`,
              top: `${120 + index * 25}px`,
              animationDelay: `${leaf.delay}s`,
              animationDuration: `${leaf.duration}s`,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2 Q12 6 10 10 Q8 6 10 2 Z"
                fill="#ffb7c5"
                opacity="0.9"
              />
              <path
                d="M10 10 Q14 12 18 10 Q14 8 10 10 Z"
                fill="#ffc0cb"
                opacity="0.9"
              />
              <path
                d="M10 10 Q12 14 10 18 Q8 14 10 10 Z"
                fill="#ff69b4"
                opacity="0.9"
              />
              <path
                d="M10 10 Q6 12 2 10 Q6 8 10 10 Z"
                fill="#ffb7c5"
                opacity="0.9"
              />
              <circle cx="10" cy="10" r="2" fill="#ff1493" opacity="0.8" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SakuraTree;
