import { useState } from "react";
import Button from "./Button";


export default function Input({ addTodo }) {
  const [title, setTitle] = useState('');

  function handleAdd() {
    if (!title.trim()) {
      alert("Please input a task")
      return
    } else {
      addTodo(title)
      setTitle('')
    }
  }
  return (
    <>
      <div className="flex gap-4 justify-center">
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Create ToDo" className="h-12 border border-gray-500 rounded-xl p-2" />
        <Button button={"Create ToDo"} className={"bg-teal-700 sm:text-md"} onClick={handleAdd} />
      </div>
    </>
  )
}
