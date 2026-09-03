import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Butterfly from "@/components/Butterfly";
import SakuraTree from "@/components/SakuraTree";
import Card, { CardData } from "@/components/Card";
import purpose from "../assets/purpose.png"
import thankyou from "../assets/thankyou.jpg"
import far from "../assets/far.png"
import haven from "../assets/haven.png"
import eye from "../assets/brown.png"
import theDrama from "../assets/theDrama.jpeg"


const SESSION_KEY = "code_validated";

// Sample card data
const CARDS: CardData[] = [
  {
    id: "1",
    title: "Purpose 🤍",
    image: purpose,
    excerpt: "He told me he knew his purpose in my life...",
    body: `He told me he knew his purpose in my life.
    Not to love me in the ways I'd known before, not to fill my empty spaces with himself,
    but to teach me how to love my own reflection,
    how to hold my ground when kindness must turn sharp,
    how to survive in a world where people drink from your soul and call it affection.
    
    And I cried.
    
    Because of all the gifts I have ever been handed,
    the flowers, the letters, the promises whispered under streetlights this one cut straight through to the bone.
    I have been loved the way others knew how to love.
    I have poured myself out until nothing was left.
    But him, he walks beside me through the hollow fear of what if no one comes?
    He doesn't promise to stay.
    He promises to make me strong enough to walk when no one does.
    
    He is the kind of pure I have never touched before.
    He is the advice my father never got the chance to give me,
    the strength my father would have demanded of me.
    He is what I never had,
    what I want to become,
    what I cannot stop admiring.
    
    He sits close to my heart, so close it aches,
    so close it makes my throat burn and my eyes swell.
    I don't know what we are.
    But the thought of losing him feels like being a child left in a crowd,
    crying, reaching for a familiar hand that will not appear.
    
    And yet
    I will survive.
    
    Because he taught me to.`,
  },
  {
    id: "2",
    title: "Thank you 🤍",
    image: thankyou,
    excerpt: "When I feel upset inside...",
    body: `When I feel upset inside,
    I hide away, I run, I slide.
    Most people make me feel so wrong,
    for holding feelings for too long.
    
    But you
    you stayed so calm, so kind, so true,
    you didn't let my mood shake you.
    You didn't guilt, you didn't fight,
    you tried to make my heart feel light.
    
    You chose to cheer me when you could,
    you chose to love me as you should.
    You let me feel, you let me be,
    and that meant so much deep to me.
    
    It's rare I feel this kind of love,
    like stars that shine once high above.
    But with you, I felt it clear,
    a blue-moon love, so warm, so near.
    
    
    `,
  },
  {
    id: "3",
    title: "Far...",
    image: far,
    excerpt: "He makes me laugh, he makes me smile...",
    body: `He makes me laugh, he makes me smile,
    
    He makes the pain fade for a while.
    
    He makes me dream, he makes me glow,
    
    He lifts me up when I sink low.
    But he is far, and I'm alone, Why can't his warmth be my own?
    
    God, I ask you all night long,
    Tell me please, what am I doing wrong?
    
    
    `,
  },
  {
    id: "4",
    title: "My haven 😇",
    image: haven,
    excerpt: "Your hand resting over mine...",
    body: `Your hand resting over mine,
    my head cradled upon your arm,
    our bodies drawn together,
    my stomach pressed into yours,
    curled into the quiet refuge we make.
    
    I long to return to that haven,
    the only place where safety does not feel imagined
    but lived, breathed, embodied.
    A place I would choose above food,
    above water, above every earthly need,
    for nothing feels as vital as the warmth of us.
    
    When will we find ourselves there again?
    My heart aches with the missing of you.
    
    
    `,
  },
  {
    id: "5",
    title: "Brown eyes 👁️",
    image: eye,
    excerpt: "Oh, your eyes, brown like pudding...",
    body: `Oh, your eyes, brown like pudding,
    sweet and soft,
    I could get lost there, drift and lift off.
    
    Your hair, like waves in the endless sea,
    Curling, tumbling, pulling me endlessly.
    
    Your arms, small but mighty, hold me tight,
    A fortress of comfort in the dead of night.
    
    Your smile, like sunlight breaking through rain,
    Melts the cold, the sorrow, the pain.
    
    Every glance, every move, a rhythm, a beat,
    Every word you whisper makes life feel complete.
    
    Oh, you're a song, a tide, a fire in the skies,
    And I'm just a sailor, lost in your eyes.    
    
    `,
  },
  {
    id: "6",
    title: "Found my room",
    image: theDrama,
    excerpt: "I finally found the door...",
    body: `I finally found the door
    you kept pointing me toward;
    the one I could not see,
    though you named it word by word.

    You said beyond that door
    was a room I'd call my own:
    where solitude was not a lack,
    and being still could feel like home.

    I understand it now.

    the quiet on the other side,
    the freedom of my own company,
    with nowhere left to hide.

    When I stay, I stay by choice;
    when I leave, I leave the same.
    I need no hand upon the door
    to tell me I am worth the name.

    You taught me what no book could teach
    the door was never locked.
    The room was never yours to give
    you only showed me where to knock.

    I may be a slow learner,
    but I've learned what matters most:
    I finally see the door you saw
    and beyond it, I am home.


    `,
  },
];

const CardsPage = () => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const scrollIntervalRef = useRef<number>();
  const dragStartRef = useRef<{ x: number; scrollLeft: number } | null>(null);

  useEffect(() => {
    // Check if code was validated
    if (sessionStorage.getItem(SESSION_KEY) !== "true") {
      navigate("/");
    }
  }, [navigate]);

  // Set initial scroll position to middle set on mount
  useEffect(() => {
    if (carouselRef.current) {
      // Calculate width of one card set (assuming consistent card width + gap)
      const firstCard = carouselRef.current.querySelector('[data-card-index]');
      if (firstCard) {
        const cardWidth = (firstCard as HTMLElement).offsetWidth;
        const gap = 24; // 6 * 4px (gap-6)
        const singleSetWidth = (cardWidth + gap) * CARDS.length;
        
        // Start at the beginning of the second set (middle position)
        carouselRef.current.scrollLeft = singleSetWidth;
      }
    }
  }, []);

  // Auto-scroll functionality with seamless infinite loop
  useEffect(() => {
    if (!autoScrollPaused && !expandedCardId) {
      scrollIntervalRef.current = window.setInterval(() => {
        if (carouselRef.current) {
          const firstCard = carouselRef.current.querySelector('[data-card-index]');
          if (firstCard) {
            const cardWidth = (firstCard as HTMLElement).offsetWidth;
            const gap = 24; // 6 * 4px (gap-6)
            const singleSetWidth = (cardWidth + gap) * CARDS.length;
            const currentScroll = carouselRef.current.scrollLeft;
            
            // Check if we're near the end of the second set
            if (currentScroll >= singleSetWidth * 2 - 10) {
              // Jump to start of second set
              carouselRef.current.scrollLeft = singleSetWidth;
            } 
            // Check if we're near the beginning (before first set)
            else if (currentScroll <= 10) {
              // Jump to start of second set
              carouselRef.current.scrollLeft = singleSetWidth;
            } 
            else {
              // Normal scroll
              carouselRef.current.scrollLeft += 1;
            }
          }
        }
      }, 20);
    }

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [autoScrollPaused, expandedCardId]);

  // Handle mouse/touch drag
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!carouselRef.current) return;
    
    setAutoScrollPaused(true);
    dragStartRef.current = {
      x: e.clientX,
      scrollLeft: carouselRef.current.scrollLeft,
    };
    
    carouselRef.current.style.cursor = "grabbing";
    carouselRef.current.style.scrollBehavior = "auto";
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragStartRef.current || !carouselRef.current) return;
    
    const dx = e.clientX - dragStartRef.current.x;
    carouselRef.current.scrollLeft = dragStartRef.current.scrollLeft - dx;
  };

  const handlePointerUp = () => {
    if (!carouselRef.current) return;
    
    dragStartRef.current = null;
    carouselRef.current.style.cursor = "grab";
    carouselRef.current.style.scrollBehavior = "smooth";
    
    // Resume auto-scroll after 2 seconds of inactivity
    setTimeout(() => {
      if (!expandedCardId) {
        setAutoScrollPaused(false);
      }
    }, 2000);
  };

  const handleReset = () => {
    sessionStorage.removeItem(SESSION_KEY);
    navigate("/");
  };

  const handleExpand = (cardId: string) => {
    setExpandedCardId(cardId);
    setAutoScrollPaused(true);
  };

  const handleClose = () => {
    setExpandedCardId(null);
    setTimeout(() => {
      setAutoScrollPaused(false);
    }, 500);
  };

  return (
    <div className="min-h-screen">
      <Butterfly />
      <SakuraTree />

      {/* Header */}
      <header className="relative z-10 glass border-b border-glass-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-foreground">Hi babyyy</h1>
          <Button
            onClick={handleReset}
            variant="ghost"
            className="text-sm text-muted-foreground hover:text-foreground"
            aria-label="Reset and return to code gate"
          >
            Reset
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-foreground">
            My peach writes the most beautiful poems 💚
          </h2>
          {/* <p className="text-center text-muted-foreground">
            Swipe or drag to browse • Click to expand
          </p> */}
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="overflow-x-auto smooth-scroll pb-8 cursor-grab select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          role="region"
          aria-label="Card carousel"
        >
          <div className="flex gap-6 px-4" style={{ width: "max-content", marginTop: "20px" }}>
            {/* Triple cards for seamless infinite loop */}
            {[...CARDS, ...CARDS, ...CARDS].map((card, index) => (
              <Card
                key={`${card.id}-${index}`}
                card={card}
                isExpanded={expandedCardId === card.id}
                onExpand={() => handleExpand(card.id)}
                onClose={handleClose}
                data-card-index={index}
              />
            ))}
          </div>
        </div>

        <style>{`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </main>
    </div>
  );
};

export default CardsPage;
