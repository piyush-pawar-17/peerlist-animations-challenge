import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Day 5 - Shared Layout Tabs | Peerlist Animation Challenges",
  description:
    "A tab navigation that transitions smoothly between different content layouts while maintaining context and continuity.",
};

const Day5Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default Day5Layout;
