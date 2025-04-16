"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

import type { Variants } from "motion/react";

const checkboxStroke: Variants = {
  initial: {
    pathLength: 1,
  },
  checked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
  unchecked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeInOut",
      delay: 0.4,
    },
  },
};

const checkboxFill: Variants = {
  initial: {
    fill: "#ffffff",
    stroke: "none",
    scale: 0,
  },
  checked: {
    scale: 1,
    fill: "oklch(62.3% 0.214 259.815)",
    stroke: "oklch(62.3% 0.214 259.815)",
    transition: {
      ease: "circOut",
      duration: 0.2,
      delay: 0.3,
    },
  },
  unchecked: {
    scale: 0,
    stroke: "none",
    fill: [
      "oklch(62.3% 0.214 259.815)",
      "oklch(62.3% 0.214 259.815)",
      "oklch(62.3% 0.214 259.815)",
      "oklch(62.3% 0.214 259.815)",
      "oklch(62.3% 0.214 259.815)",
      "#ffffff",
    ],
    transition: {
      ease: "circIn",
      duration: 0.2,
      delay: 0.2,
    },
  },
};

const checkboxCheck: Variants = {
  initial: {
    stroke: "none",
    pathLength: 0,
    opacity: 0,
  },
  checked: {
    stroke: "#ffffff",
    pathLength: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.15,
      delay: 0.5,
    },
  },
  unchecked: {
    stroke: "none",
    pathLength: 0,
    opacity: 0,
    transition: {
      ease: "easeIn",
      duration: 0.15,
    },
  },
};

const checkboxLabel: Variants = {
  initial: {
    x: 0,
    color: "#1f1f1f",
  },
  checked: {
    x: [3, -3, 0],
    color: "#99a1af",
    transition: {
      duration: 0.3,
      ease: "circOut",
      delay: 0.2,
    },
  },
  unchecked: {
    x: [-3, 3, 0],
    color: "#1f1f1f",
    transition: {
      duration: 0.3,
      ease: "circIn",
    },
  },
};

const Todo = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false);
  const id = useId();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
  };

  return (
    <div>
      <input
        id={id}
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={handleOnChange}
      />
      <motion.label
        htmlFor={id}
        initial={false}
        animate={checked ? "checked" : "unchecked"}
        className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded hover:bg-zinc-100 peer-focus-visible:bg-zinc-100 peer-focus-visible:outline-none"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          key="checked"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.rect
            width="18"
            height="18"
            x="3"
            y="3"
            rx="2"
            variants={checkboxStroke}
            className="fill-none stroke-zinc-400"
          />
          <motion.rect
            width="18"
            height="18"
            x="3"
            y="3"
            rx="2"
            variants={checkboxFill}
          />
          <motion.path
            variants={checkboxCheck}
            d="m9 12 2 2 4-4"
            className="fill-none"
          />
        </motion.svg>

        <motion.span className="relative" variants={checkboxLabel}>
          {label}
          <AnimatePresence>
            {checked && (
              <motion.span
                initial={{ width: 0 }}
                animate={{
                  width: "100%",
                  transition: { duration: 0.2, delay: 0.4, ease: "easeIn" },
                }}
                exit={{
                  width: 0,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="absolute top-1/2 h-0.5 left-0 bg-gray-400"
              />
            )}
          </AnimatePresence>
        </motion.span>
      </motion.label>
    </div>
  );
};

const Day3 = () => {
  const todos = ["Buy groceries", "Contemplate existence", "Learn SwiftUI"];

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
        <h1 className="text-2xl font-medium">Day 3 - Animated Checkboxes</h1>
      </header>

      <section className="relative bg-white border border-zinc-200 rounded-2xl p-4 grid place-items-center h-[560px]">
        <div className="flex flex-col">
          {todos.map((todo) => (
            <Todo key={todo} label={todo} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Day3;
