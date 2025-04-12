"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { MoveLeft, Menu, X, House, Mail, User, Settings } from "lucide-react";

import type { Variants } from "motion/react";

const menuVariants: Variants = {
  inital: {
    opacity: 0,
    y: -8,
  },
  animate: {
    opacity: 1,
    y: -4,
    transition: {
      staggerChildren: 0.1,
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      when: "afterChildren",
      type: "tween",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const buttonVariants: Variants = {
  inital: (index) => ({
    opacity: 0,
    y: index * 40 - 12,
  }),
  animate: (index) => ({
    opacity: [0, 0, 0, 0, 0, 1],
    y: index * 40,
    transition: {
      type: "tween",
    },
  }),
  exit: (index) => ({
    opacity: 0,
    y: index * 40 - 12,
  }),
};

const Day1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [House, Mail, User, Settings];

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
        <h1 className="text-2xl font-medium">Day 1 - Fluid Menu Animation</h1>
      </header>

      <section className="relative bg-white border border-zinc-200 rounded-2xl p-4 grid place-items-center h-96">
        <div>Open the menu in the top left corner</div>

        <div className="absolute top-4 left-4 flex flex-col">
          <button
            className="bg-zinc-100 rounded-full w-12 h-12 cursor-pointer"
            onClick={() => setIsOpen((open) => !open)}
          >
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  className="w-full h-full flex items-center justify-center rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { delay: 0.4 },
                  }}
                  exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                  transition={{ ease: "easeIn", duration: 0.4 }}
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  className="w-full h-full flex items-center justify-center rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { delay: 0.4 },
                  }}
                  exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                  transition={{ ease: "easeIn", duration: 0.4 }}
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="relative"
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={isOpen}
              >
                {menuItems.map((menuItem, index) => {
                  const MenuIcon = menuItem;
                  return (
                    <motion.button
                      variants={buttonVariants}
                      className="bg-zinc-100 absolute flex items-center justify-center rounded-full w-12 h-12 cursor-pointer"
                      key={index}
                      custom={index}
                    >
                      <MenuIcon
                        size={18}
                        className="text-neutral-500 hover:text-neutral-900 transition-colors ease-in"
                      />
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Day1;
