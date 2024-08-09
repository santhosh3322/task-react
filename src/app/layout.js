import { Inter } from "next/font/google";
import "./globals.css";
import { TodoProvider } from './TodoContext';
import State from "@/app/components/state";
import Effect from "@/app/components/effect";
import TodoList from "./todolist";
import TodoItem from "./todoitem";
import AddTodo from "./Addtodo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Todo App",
  description: "An advanced, professional-grade todo application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300  text-gray-900`}>
        <TodoProvider>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-44 md:py-48">
            <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg mx-auto border border-gray-200">
              <h1 className="text-3xl font-extrabold text-gray-700 mb-5 text-center">
                Todo List
              </h1>
              <div className="space-y-4">
                <TodoList />
                <AddTodo />
              </div>
            </div>
          </div>
          {/* <State /> */}
          {children}
        </TodoProvider>
      </body>
    </html>
  );
}
