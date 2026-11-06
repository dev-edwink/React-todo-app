import Button from "./Button"

export default function TodoList({ todos, resetTodo, deleteTodo, toggleTodo }) {
    const completedCount = todos.filter(todo => todo.completed).length
    const pendingCount = todos.length - completedCount

    return (
        <div className="flex flex-col items-center gap-5 mt-8 px-4 pb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Total Completed: {completedCount}
            </p>

            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Total Pending: {pendingCount}
            </p>

            <ul className="flex flex-col gap-4 w-full max-w-md">
                {todos.map(function (todo) {
                    return (

                        <li
                            key={todo.id}
                            className="flex flex-col items-center justify-between gap-3 p-5 rounded-xl border border-gray-200 bg-white"
                        >

                            <label className="flex items-center gap-3 text-sm font-medium text-gray-600 cursor-pointer">Mark Completed
                                <input checked={todo.completed} disabled={todo.completed} onChange={() => toggleTodo(todo.id)} type="checkbox" name="complete" className="size-5 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60" />

                            </label>


                            <p className="w-full text-xl font-medium text-gray-800 text-center">
                                {todo.title}
                            </p>
                            <p className="text-xs font-semibold uppercase text-gray-500 text-left">
                                Completed: {todo.completed.toString()}
                            </p>
                            <div className="flex gap-3 w-full justify-center pt-3 border-t border-gray-100">
                                <Button button={"Edit"} className="px-4 py-2 rounded-lg" />
                                <Button button={"Delete"} onClick={() => deleteTodo(todo.id)} className="px-4 py-2 rounded-lg bg-red-700 hover:bg-red-800" />
                            </div>
                        </li>
                    )
                })}
            </ul>
            <Button button={"RESET"} className="px-6 py-2 rounded-lg" onClick={resetTodo} />
        </div>
    )
}