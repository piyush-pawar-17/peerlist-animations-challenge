"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { MoveLeft, List, LayoutGrid } from "lucide-react";
import { useWindowSize } from "usehooks-ts";

import { cn } from "@/utils";

const Day5 = () => {
  const [activeTab, setActiveTab] = useState<"list" | "card" | "pack">("list");

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
        <h1 className="text-2xl font-medium">Day 5 - Shared Layout Tabs</h1>
      </header>

      <section className="relative bg-white border border-zinc-200 rounded-2xl p-4 grid place-items-center h-[560px]">
        <div className="h-96">
          <h3 className="font-medium text-lg mb-4">Collectibles</h3>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <button
                className={cn(
                  "rounded-full text-sm focus:outline-none flex gap-2 items-center px-3 py-2 bg-zinc-100 text-zinc-600 cursor-pointer transition-colors duration-200",
                  {
                    "bg-blue-400 text-white": activeTab === "list",
                  },
                )}
                onClick={() => setActiveTab("list")}
              >
                <List size={16} />
                <span>List {width >= 480 && <span>view</span>}</span>
              </button>
              <button
                className={cn(
                  "rounded-full text-sm focus:outline-none flex gap-2 items-center px-3 py-2 bg-zinc-100 text-zinc-600 cursor-pointer transition-colors duration-200",
                  {
                    "bg-blue-400 text-white": activeTab === "card",
                  },
                )}
                onClick={() => setActiveTab("card")}
              >
                <LayoutGrid size={16} />
                <span>Card {width >= 480 && <span>view</span>}</span>
              </button>
              <button
                className={cn(
                  "rounded-full text-sm focus:outline-none flex gap-2 items-center px-3 py-2 bg-zinc-100 text-zinc-600 cursor-pointer transition-colors duration-200",
                  {
                    "bg-blue-400 text-white": activeTab === "pack",
                  },
                )}
                onClick={() => setActiveTab("pack")}
              >
                <Pack />
                <span>Pack {width >= 480 && <span>view</span>}</span>
              </button>
            </div>

            <div className="h-px w-full bg-zinc-200" />

            <div
              className={cn("relative flex flex-col gap-4", {
                "flex-row": activeTab === "card",
              })}
            >
              {/* Skilled Fingers */}
              <div
                className={cn("flex justify-between items-center", {
                  "flex-col grow": activeTab === "card",
                })}
              >
                <div
                  className={cn("flex gap-2 items-center", {
                    "flex-col": activeTab === "card",
                  })}
                >
                  <motion.img
                    layout
                    layoutId="skilled-fingers-img"
                    src="/skilled-fingers.svg"
                    alt="Skilled Fingers Series"
                    className={cn("size-14", {
                      "size-full": activeTab === "card",
                      "rounded-2xl size-20": activeTab === "pack",
                    })}
                    animate={
                      activeTab === "pack"
                        ? {
                            rotate: -12,
                            x: width < 480 ? 80 : 144,
                            transition: { ease: "linear", bounce: 0 },
                          }
                        : {
                            rotate: 0,
                            x: 0,
                            transition: { ease: "linear", bounce: 0 },
                          }
                    }
                  />
                  <AnimatePresence initial={false}>
                    {activeTab !== "pack" && (
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: { delay: 0.2 },
                        }}
                        exit={{
                          scale: 0.8,
                          opacity: 0,
                          transition: { duration: 0.05 },
                        }}
                        className={cn({ "w-full": activeTab === "card" })}
                      >
                        <motion.h4
                          layoutId="skilled-fingers-title"
                          className="font-medium mb-1 text-sm"
                        >
                          Skilled Fingers Series
                        </motion.h4>
                        <motion.p
                          layoutId="skilled-fingers-description"
                          className={cn("text-sm", {
                            "text-xs": width < 480,
                          })}
                        >
                          <span className="font-medium">0.855</span>
                          <span className="text-zinc-500 ml-1">ETH</span>
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence initial={false}>
                  {activeTab !== "pack" && (
                    <motion.div
                      initial={{ x: 10, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: 0.2 },
                      }}
                      exit={{
                        scale: 0.8,
                        opacity: 0,
                        transition: { duration: 0.05 },
                      }}
                      layoutId="skilled-fingers-rank"
                      className={cn(
                        "text-sm text-zinc-500 flex gap-1 items-center",
                        {
                          "translate-x-14 -translate-y-1.5":
                            activeTab === "card",
                          "translate-x-10 -translate-y-4":
                            width < 480 && activeTab === "card",
                          "text-xs": width < 480,
                        },
                      )}
                    >
                      <Diamond />
                      <span>#209</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Vibrant Vibes */}
              <div
                className={cn("flex justify-between items-center", {
                  "flex-col grow": activeTab === "card",
                })}
              >
                <div
                  className={cn("flex gap-2 items-center", {
                    "flex-col": activeTab === "card",
                  })}
                >
                  <motion.img
                    layout
                    layoutId="vibrant-vibes-img"
                    src="/vibrant-vibes.svg"
                    alt="Vibrant Vibes Series"
                    className={cn("size-14", {
                      "size-full": activeTab === "card",
                      "rounded-2xl size-20 ease-in translate-x-36 rotate-12 -translate-y-24":
                        activeTab === "pack",
                      "translate-x-20": activeTab === "pack" && width < 480,
                    })}
                  />
                  <AnimatePresence initial={false}>
                    {activeTab !== "pack" && (
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: { delay: 0.2 },
                        }}
                        exit={{
                          scale: 0.8,
                          opacity: 0,
                          transition: { duration: 0.05 },
                        }}
                        className={cn({ "w-full": activeTab === "card" })}
                      >
                        <motion.h4
                          layoutId="vibrant-vibes-title"
                          className="font-medium mb-1 text-sm"
                        >
                          Vibrant Vibes Series
                        </motion.h4>
                        <motion.p
                          layoutId="vibrant-vibes-description"
                          className={cn("text-sm", {
                            "text-xs": width < 480,
                          })}
                        >
                          <span className="font-medium">0.209</span>
                          <span className="text-zinc-500 ml-1">ETH</span>
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence initial={false}>
                  {activeTab !== "pack" && (
                    <motion.div
                      initial={{ x: 10, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: 0.2 },
                      }}
                      exit={{
                        scale: 0.8,
                        opacity: 0,
                        transition: { duration: 0.05 },
                      }}
                      layoutId="vibrant-vibes-rank"
                      className={cn(
                        "text-sm text-zinc-500 flex gap-1 items-center",
                        {
                          "translate-x-14 -translate-y-1.5":
                            activeTab === "card",
                          "translate-x-10 -translate-y-4":
                            width < 480 && activeTab === "card",
                          "text-xs": width < 480,
                        },
                      )}
                    >
                      <Diamond />
                      <span>#808</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {activeTab === "pack" && (
                  <motion.div
                    className={cn("translate-x-36 -translate-y-20 w-max", {
                      "translate-x-20": width < 480,
                    })}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.1, ease: "easeIn" },
                    }}
                    exit={{ transition: { duration: 0 } }}
                  >
                    <p className="font-medium text-sm">2 Collectibles</p>
                    <p className="flex gap-0.5 justify-center">
                      <span className="font-medium text-sm">1.064</span>
                      <span className="text-zinc-500 text-sm">ETH</span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Pack = () => {
  return (
    <svg
      id="Cards"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1285 3.18125C11.0837 2.42153 12.3262 2.10647 13.6963 2.31094L18.1479 2.97747C18.1479 2.97747 18.1479 2.97746 18.1479 2.97747C19.521 3.18295 20.6175 3.84765 21.3078 4.85437C21.9934 5.85424 22.2323 7.12289 22.0313 8.46442C22.0313 8.46448 22.0313 8.46437 22.0313 8.46442L21.072 14.8783C20.871 16.2197 20.2712 17.3631 19.3229 18.1185C18.7661 18.562 18.1115 18.8539 17.3902 18.9795C16.8837 19.4676 16.2414 19.8435 15.5101 20.0753L11.2284 21.4815C11.2281 21.4816 11.2286 21.4814 11.2284 21.4815C9.91273 21.9161 8.63565 21.816 7.56717 21.2285C6.50585 20.6449 5.72106 19.6208 5.29546 18.3341L3.27125 12.1788C3.27109 12.1783 3.27093 12.1778 3.27077 12.1773C2.84054 10.8856 2.86119 9.593 3.36989 8.49071C3.88195 7.38115 4.85345 6.54182 6.17244 6.10763C6.17262 6.10757 6.17227 6.10769 6.17244 6.10763L8.65918 5.28633C8.96436 4.43613 9.46048 3.7126 10.1285 3.18125ZM9.95257 6.1814C9.9827 6.1141 10.003 6.04231 10.0123 5.96831C10.2288 5.26668 10.5989 4.7237 11.0623 4.35519C11.6584 3.881 12.4717 3.64487 13.4745 3.79445L17.9259 4.46094C18.9326 4.61158 19.6407 5.07554 20.0707 5.70267C20.5054 6.33662 20.703 7.20698 20.5478 8.24236L19.5885 14.6562C19.4334 15.6917 18.9896 16.4662 18.3883 16.9453C18.0102 17.2464 17.544 17.4517 16.9958 17.5226C16.9632 17.5242 16.9308 17.5279 16.8987 17.5337C16.6116 17.5621 16.3028 17.5542 15.9733 17.5049L11.523 16.8384C10.5162 16.6878 9.8081 16.224 9.37798 15.597C8.94318 14.9631 8.74539 14.0927 8.90011 13.0567L9.86039 6.64313C9.88431 6.48302 9.91523 6.32891 9.95257 6.1814ZM8.29215 6.98724L7.4166 12.8348C7.21619 14.1768 7.45522 15.4457 8.14104 16.4455C8.83154 17.4521 9.92792 18.1165 11.301 18.3219L14.5569 18.8095L10.759 20.0568L10.7577 20.0573C9.79492 20.3754 8.95577 20.2802 8.2899 19.9141C7.61681 19.5439 7.0483 18.8563 6.71981 17.8637C6.71988 17.864 6.71973 17.8635 6.71981 17.8637L4.69523 11.7073L4.69428 11.7044C4.3622 10.7082 4.40983 9.81703 4.73185 9.11925C5.05065 8.42847 5.67268 7.85122 6.64186 7.53229L8.29215 6.98724Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Diamond = () => {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_14_2337)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.751 4.72464L8.44634 1.41797C7.18501 0.155303 5.45101 0.192637 4.12965 1.51197L1.01498 4.62597C-0.302354 5.94927 -0.34102 7.68394 0.920313 8.9426L4.22498 12.2493C4.84098 12.8639 5.56901 13.1706 6.30567 13.1706C7.08034 13.1706 7.86567 12.8313 8.54167 12.1559L11.6557 9.0366C12.3097 8.38394 12.669 7.5886 12.669 6.7966C12.669 6.04127 12.351 5.32394 11.751 4.72464Z"
          fill="#FEBE02"
          fillOpacity="0.15"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_i_14_2337"
          x="0"
          y="0.496094"
          width="12.6689"
          height="12.6746"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="3.5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          ></feComposite>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.996078 0 0 0 0 0.745098 0 0 0 0 0.00784314 0 0 0 0.5 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_14_2337"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

export default Day5;
