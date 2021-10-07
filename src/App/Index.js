import React, { useState } from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

import './App.css';

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso de Intro a React", completed: true },
  { text: "Llorar con la llorona", completed: true },
  { text: "Probando", completed: false },
]

function App() {

  return (

    <TodoProvider>

      <AppUI />

    </TodoProvider>

  );
}

export default App;
