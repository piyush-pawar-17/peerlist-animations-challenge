import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Day 1 - Fluid Menu | Peerlist Animation Challenges",
  description:
    "A menu that transforms with natural, liquid-like animations when triggered from the top left corner. Let your creativity shape how it moves, morphs, and settles into place.",
};

const Day1Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default Day1Layout;
