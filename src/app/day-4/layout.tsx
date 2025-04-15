import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Day 4 - Animated Toggles | Peerlist Animation Challenges",
  description:
    "A toggle switch that transitions smoothly between pricing options, offering users a delightful way to select between different plan tiers.",
};

const Day4Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default Day4Layout;
