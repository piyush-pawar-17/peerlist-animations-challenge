import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Day 3 - Animated Checkboxes | Peerlist Animation Challenges",
  description: "Checkbox interactions that bring personality and satisfaction to the simple act of completing tasks",
};

const Day3Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default Day3Layout;
