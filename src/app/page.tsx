import Link from "next/link";
import { Check, CircleDashed } from "lucide-react";

const Home = () => {
  return (
    <main className="grid place-items-center h-screen px-4">
      <div>
        <header className="mb-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium">
            Peerlist UI Animation Challenges
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
              href="/"
              className="hover:underline transition-all duration-200 flex items-center gap-1"
            >
              <CircleDashed size={16} /> Day 2 (to be added)
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:underline transition-all duration-200 flex items-center gap-1"
            >
              <CircleDashed size={16} /> Day 3 (to be added)
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:underline transition-all duration-200 flex items-center gap-1"
            >
              <CircleDashed size={16} /> Day 4 (to be added)
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:underline transition-all duration-200 flex items-center gap-1"
            >
              <CircleDashed size={16} /> Day 5 (to be added)
            </Link>
          </li>
        </ol>
      </div>

      <footer className="fixed bottom-0 inset-x-0 text-center p-4 text-sm">
        <p>
          Made by{" "}
          <a
            href="https://piyushpawar.dev/github"
            target="_blank"
            className="underline"
          >
            Piyush Pawar
          </a>
        </p>
      </footer>
    </main>
  );
};

export default Home;
