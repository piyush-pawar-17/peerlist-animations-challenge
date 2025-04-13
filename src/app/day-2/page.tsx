"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  MoveLeft,
  LoaderCircle,
  CircleCheck,
  TriangleAlert,
} from "lucide-react";

import { cn } from "@/utils";

const Day2 = () => {
  const messages = [
    "Analyzing Transaction",
    "Transaction Safe",
    "Analyzing Transaction",
    "Transaction Warning",
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessageIndex((idx) => (idx + 1) % messages.length);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  return (
    <main className="px-6 sm:px-10 md:px-20">
      <header className="py-10 sm:py-16 md:py-20">
        <Link
          href="/"
          className="flex gap-1 underline items-center text-sm mb-2"
        >
          <MoveLeft size={12} />
          Back to challenges
        </Link>
        <h1 className="text-2xl font-medium">
          Day 2 - Dynamic Status Indicator
        </h1>
      </header>

      <section className="relative bg-white border border-zinc-200 rounded-2xl p-4 grid place-items-center h-96">
        <motion.button
          layout
          className={cn(
            "px-4 text-sm py-2 rounded-full flex items-center gap-2 overflow-hidden transition-colors duration-150",
            {
              "bg-blue-500/10 text-blue-500":
                messageIndex === 0 || messageIndex === 2,
              "bg-green-500/10 text-green-500": messageIndex === 1,
              "bg-red-500/10 text-red-500": messageIndex === 3,
            },
          )}
        >
          <span className="size-4 shrink-0">
            <AnimatePresence>
              {messageIndex === 0 || messageIndex === 2 ? (
                <LoaderCircle size={16} className="day-2-loader" />
              ) : messageIndex === 1 ? (
                <CircleCheck size={16} className="day-2-safe" />
              ) : (
                <TriangleAlert size={16} className="day-2-warning" />
              )}
            </AnimatePresence>
          </span>
          <AnimatePresence initial={false}>
            {messageIndex === 0 || messageIndex === 2 ? (
              <motion.span
                key="analyzing"
                initial={{ display: "none", opacity: 0, x: -20 }}
                animate={{
                  display: "inline-block",
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2 },
                }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
              >
                {messages[messageIndex]}
              </motion.span>
            ) : messageIndex === 1 ? (
              <motion.span
                key="safe"
                initial={{ display: "none", opacity: 0, x: 20 }}
                animate={{
                  display: "inline-block",
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2 },
                }}
                exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
              >
                {messages[messageIndex]}
              </motion.span>
            ) : (
              <motion.span
                key="warning"
                initial={{ display: "none", opacity: 0, x: 20 }}
                animate={{
                  display: "inline-block",
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2 },
                }}
                exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
              >
                {messages[messageIndex]}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </section>
    </main>
  );
};

export default Day2;
