import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Butterfly from "@/components/Butterfly";
import SakuraTree from "@/components/SakuraTree";

const CORRECT_CODE = "chhota babdya";
const SESSION_KEY = "code_validated";
const ERROR_MESSAGES = [
  "Bro, you gotta be kidding me",
  "Huh, Think harder...",
  "really?"
];

const CodeGate = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);
  const [bubbleMessage, setBubbleMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already validated
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      navigate("/cards");
    }
  }, [navigate]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const normalizedCode = code.trim().toLowerCase();

    if (normalizedCode === CORRECT_CODE) {
      sessionStorage.setItem(SESSION_KEY, "true");
      navigate("/cards");
    } else {
      const randomMessage = ERROR_MESSAGES[Math.floor(Math.random() * ERROR_MESSAGES.length)];
      setBubbleMessage(randomMessage);
      setError("Incorrect code. Please try again.");
      setIsShaking(true);
      setShowBubble(true);
      setIsMinimizing(false);
      setTimeout(() => setIsShaking(false), 500);
      
      // Announce error to screen readers
      const liveRegion = document.getElementById("error-live-region");
      if (liveRegion) {
        liveRegion.textContent = randomMessage;
      }
    }
  };

  const handleInputFocus = () => {
    if (showBubble) {
      setIsMinimizing(true);
      setTimeout(() => {
        setShowBubble(false);
        setIsMinimizing(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Butterfly />
      <SakuraTree />
      
      <main className="relative z-10 w-full max-w-md">
        <div
          className={`glass rounded-2xl p-8 shadow-2xl ${
            isShaking ? "animate-shake" : ""
          }`}
          role="dialog"
          aria-labelledby="gate-heading"
          aria-describedby="gate-description"
        >
          <h1
            id="gate-heading"
            className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground"
          >
            Hii babdya, this is you gift!
          </h1>
          
          <p
            id="gate-description"
            className="text-center text-muted-foreground mb-8"
          >
            Hmm, it's not going to be that easy. Still, here's your hint: what's the nickname I gave you that always makes you laugh?
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="code-input" className="sr-only">
                Enter code
              </label>
              <Input
                id="code-input"
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError("");
                }}
                onFocus={handleInputFocus}
                placeholder="Enter code..."
                className="w-full glass text-foreground placeholder:text-muted-foreground border-glass-border focus:ring-2 focus:ring-primary"
                autoFocus
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "error-message" : undefined}
              />
              
              {error && (
                <p
                  id="error-message"
                  className="text-destructive text-sm mt-2"
                  role="alert"
                >
                  {error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-6 rounded-lg transition-colors"
            >
              Enter
            </Button>
          </form>

          {/* Live region for screen readers */}
          <div
            id="error-live-region"
            className="sr-only"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          />
        </div>

        {/* Chat bubble message */}
        {showBubble && (
          <div
            className={`absolute left-1/2 -translate-x-1/2 -bottom-20 sm:-bottom-24 md:-bottom-28 ${
              isMinimizing ? "animate-bubble-minimize" : "animate-bubble-pop"
            }`}
            role="alert"
          >
            <div className="glass rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-2xl border border-glass-border max-w-[260px] sm:max-w-[280px] md:max-w-sm">
              <p className="text-foreground text-center font-medium text-xs sm:text-sm md:text-base">
                {bubbleMessage}
              </p>
            </div>
            {/* Chat bubble tail */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
              <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-glass-border" />
              <div className="absolute top-[1px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-b-[11px] border-b-[hsl(var(--glass))]" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CodeGate;
