
export default function Button({ className = "", button, onClick }) {
  return (

    <button onClick={onClick} className={`bg-amber-500 w-fit p-3 h-fit rounded-lg text-xl text-white ${className}`} >
      {button}
    </button>

  )
}
