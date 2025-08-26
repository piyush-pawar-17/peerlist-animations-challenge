import Link from "next/link";
import { Check } from "lucide-react";

const Home = () => {
  return (
    <main className="grid place-items-center h-screen px-4">
      <div>
        <header className="mb-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium">
            <a
              href="https://peerlist.io/challenges/ui-animation-challenge"
              target="_blank"
              rel="noopenner noreferrer"
              className="hover:underline"
            >
              Peerlist UI Animation Challenges
            </a>
          </h1>
        </header>
        <ol className="flex flex-col gap-2 text-sm sm:text-base">
          <li>
            <Link
              href="/day-1"
              className="hover:underline transition-all duration-200 flex items-center gap-1"
            >
              <Check size={16} /> Day 1 (Fluid Menu)
            </Link>
          </li>
          <li>
            <Link
              href="/day-2"
              className="hover:underline transition-all duration-200 flex items-center gap-1"
            >
              <Check size={16} /> Day 2 (Dynamic Status Indicator)
            </Link>
          </li>
          <li>
            <Link
              href="/day-3"
              className="hover:underline transition-all duration-200 flex items-center gap-1"
            >
              <Check size={16} /> Day 3 (Animated Checkboxes)
            </Link>
          </li>
          <li>
            <Link
              href="/day-4"
              className="hover:underline transition-all duration-200 flex items-center gap-1"
            >
              <Check size={16} /> Day 4 (Animated Toggles)
            </Link>
          </li>
          <li>
            <Link
              href="/day-5"
              className="hover:underline transition-all duration-200 flex items-center gap-1"
            >
              <Check size={16} /> Day 5 (Shared Layout Tabs)
            </Link>
          </li>
        </ol>
      </div>
    </main>
  );
};

export default Home;
