import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CardData {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  body: string;
}

interface CardProps {
  card: CardData;
  isExpanded: boolean;
  onExpand: () => void;
  onClose: () => void;
}

const Card = ({ card, isExpanded, onExpand, onClose }: CardProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) {
        onClose();
      }
    };

    if (isExpanded) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isExpanded, onClose]);

  if (isExpanded) {
    return createPortal(
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 z-40 animate-fade-scale-in"
          onClick={onClose}
          aria-hidden="true"
          style={{ touchAction: 'none' }}
        />

        {/* Expanded Card Modal */}
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 pointer-events-none"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`card-title-${card.id}`}
          style={{ touchAction: 'none' }}
        >
          <div
            className="glass rounded-2xl shadow-2xl pointer-events-auto animate-fade-scale-in w-full max-w-[96vw] sm:max-w-[90vw] md:max-w-[800px] max-h-[92dvh] max-h-[92vh] sm:max-h-[85dvh] sm:max-h-[85vh] md:max-h-[70vh] flex flex-col overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
            style={{ overscrollBehavior: 'contain' }}
          >
            {/* Close Button */}
            <Button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10 bg-secondary/80 hover:bg-secondary text-foreground rounded-full p-2 w-9 h-9 sm:w-10 sm:h-10"
              aria-label="Close expanded card"
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Image with subtle animation */}
            <div className="relative w-full h-32 sm:h-48 md:h-64 overflow-hidden rounded-t-2xl flex-shrink-0">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover animate-float"
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex-1 overflow-hidden flex flex-col min-h-0">
              <h2
                id={`card-title-${card.id}`}
                className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground animate-fade-scale-in pr-8"
              >
                {card.title}
              </h2>

              {/* Scrollable text with gradient mask */}
              <div className="flex-1 overflow-y-auto smooth-scroll gradient-mask pr-1 sm:pr-2 min-h-0">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {card.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>,
      document.body
    );
  }

  // Minimized Card
  return (
    <div
      className="glass rounded-xl p-3 sm:p-4 cursor-pointer transition-transform hover:scale-105 flex-shrink-0 w-[260px] sm:w-[280px] md:w-[320px] shadow-lg"
      onClick={onExpand}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onExpand();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Expand ${card.title}`}
    >
      <div className="relative w-full h-36 sm:h-40 md:h-48 overflow-hidden rounded-lg mb-3 sm:mb-4">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2 text-foreground">
        {card.title}
      </h3>

      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
        {card.excerpt}
      </p>
    </div>
  );
};

export default Card;
