"use client";

import { createContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const task = [];

  return <TaskContext.Provider value={task}>{children}</TaskContext.Provider>;
};
