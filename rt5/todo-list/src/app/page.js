'use client'
import Image from "next/image";
import "./index_style.css";
import Todo from "@/app/Todo";
import React from "react";
import App from "@/app/App";
import ReactDOM from "react-dom/client"

const DATA = [
    { id: "todo-0", name: "Поесть", completed: true },
    { id: "todo-1", name: "Поспать", completed: false },
    { id: "todo-2", name: "Повторить", completed: false }
];

export default function Page(){
        return(
          <App tasks={DATA}></App>
        );
}

