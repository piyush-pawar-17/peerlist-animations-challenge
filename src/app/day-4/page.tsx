"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";
import { MoveLeft } from "lucide-react";

import { cn } from "@/utils";

import type { Variants } from "motion/react";

const premiumLabel: Variants = {
  initial: {
    y: -10,
    opacity: 0,
  },
  free: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const planLabel: Variants = {
  initial: (width) => ({
    y: 14,
    fontSize: width < 640 ? "12px" : "14px",
  }),
  free: (width) => ({
    y: 14,
    fontSize: width < 640 ? "12px" : "14px",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  }),
  premium: (width) => ({
    y: 0,
    fontSize: width < 640 ? "16px" : "18px",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  }),
};

const planLabelText: Variants = {
  initial: (index) => ({
    x: index === 0 ? 12 : -14,
  }),
  free: (index) => ({
    x: index === 0 ? 12 : -14,
    transition: {
      ease: "easeInOut",
    },
  }),
  premium: {
    x: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const Day4 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activePlanTab, setActivePlanTab] = useState(0);

  const { width = 0 } = useWindowSize();

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
        <h1 className="text-2xl font-medium">Day 4 - Animated Toggles</h1>
      </header>

      <section className="relative bg-white border border-zinc-200 rounded-2xl p-4 grid place-items-center h-96">
        <div className="flex gap-1 shadow-md rounded-full">
          {Array.from({ length: 2 }).map((_, idx) => (
            <button
              key={`pricing-${idx}`}
              className={cn(
                "cursor-pointer isolate relative w-44 sm:w-52 h-16 rounded-full py-2 text-base sm:text-lg text-black",
                {
                  "text-white": activeTab === idx,
                },
              )}
              onClick={() => {
                if (idx === 0) {
                  setActivePlanTab(0);
                }
                setActiveTab(idx);
              }}
            >
              <motion.span
                className="z-10 relative"
                initial="initial"
                animate={activeTab === 0 ? "free" : "premium"}
                exit="exit"
              >
                {idx === 0 ? (
                  "Free"
                ) : (
                  <span className="flex flex-col relative h-12">
                    <AnimatePresence initial={false}>
                      {activeTab === 0 && (
                        <motion.span
                          variants={premiumLabel}
                          className="absolute left-1/2 top-0 -translate-x-1/2"
                        >
                          Premium
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <motion.span
                      variants={planLabel}
                      custom={width}
                      className="absolute isolate top-1/2 w-full px-3 py-1 -translate-y-1/2 left-1/2 flex gap-1 justify-center -translate-x-1/2"
                    >
                      {Array.from({ length: 2 }).map((_, premiumIdx) => (
                        <motion.span
                          key={`premium-${premiumIdx}`}
                          custom={premiumIdx}
                          variants={planLabelText}
                          className={cn("w-full relative", {
                            "h-12 leading-12": activeTab === 1,
                            "text-black": activePlanTab === premiumIdx,
                          })}
                          onClick={(event) => {
                            if (activeTab === 1) {
                              event.stopPropagation();
                              setActivePlanTab(premiumIdx);
                            }
                          }}
                        >
                          {activePlanTab === premiumIdx && activeTab === 1 && (
                            <motion.span
                              layoutId="premium-active"
                              className="absolute inset-0 rounded-full bg-white"
                              transition={{ ease: "easeInOut", duration: 0.2 }}
                            />
                          )}
                          <motion.span className="relative z-20">
                            {premiumIdx === 0 ? "Monthly" : "Annual"}
                          </motion.span>
                        </motion.span>
                      ))}
                      {activeTab === 0 && (
                        <span className="absolute bottom-1">&bull;</span>
                      )}
                    </motion.span>
                  </span>
                )}
              </motion.span>
              {activeTab === idx && (
                <motion.span
                  layoutId="active"
                  className="absolute inset-0 rounded-full bg-black"
                  transition={{ delay: 0.05, ease: "easeInOut", duration: 0.2 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Day4;
