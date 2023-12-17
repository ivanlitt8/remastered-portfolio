"use client";

import Image from "next/image";
import NavBar from "@/components/Navbar";
import { useContext } from "react";
import { TaskContext } from "@/context/ThemeContext";

export default function Home() {
  const values = useContext(TaskContext);
  console.log(values);

  return <NavBar />;
}
