"use client";

import { useState } from "react";
import { motion } from "@/components/ui/motion";

interface FlashcardProps {
  question: string;
  answer: string;
}

export default function Flashcard({ question, answer }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-48 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="w-full h-full relative preserve-3d"
      >
        {/* Front side (Question) */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-xl border border-white/20 bg-white/5 p-6 flex flex-col justify-between ${
            isFlipped ? "invisible" : ""
          }`}
        >
          <div className="flex-1 flex items-center justify-center text-center">
            <p className="text-white text-lg">{question}</p>
          </div>
          <p className="text-white/50 text-sm text-center">
            Click to reveal answer
          </p>
        </div>

        {/* Back side (Answer) */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-xl border border-white/20 bg-white/5 p-6 flex flex-col justify-between rotate-y-180 ${
            !isFlipped ? "invisible" : ""
          }`}
        >
          <div className="flex-1 flex items-center justify-center text-center">
            <p className="text-white text-lg">{answer}</p>
          </div>
          <p className="text-white/50 text-sm text-center">
            Click to see question
          </p>
        </div>
      </motion.div>
    </div>
  );
}
