import React, { useRef, useState } from 'react'

function todo() {
    const [todos, setTodos] = useState(["Prase the Lord", "Personal Development"])
    const [input, setInput] = useState("")
    // const todoRef = useRef()

    const addTodo = (e: any) => {

      e.preventDefault()
      
      if( input && input!== "") {
        setTodos( [...todos, input])
        setInput("")
        }
      }
      // console.log(todo)
  return (
    <div className='w-full h-screen p-20 flex flex-col items-center justify-center'>
        <form className='flex flex-col justify-center' onSubmit={addTodo}> 
            <input placeholder='Enter Todo' className='px-2 py-6 outline-none ' onChange={e => setInput(e.target.value)}/>
            <button type='submit' className='bg-blue-500'>Add Todo</button>
        </form>
            {todos.map((todo) => (
              <p className='mt-4'>{todo}</p>
            ))}
    </div>
  )
}

export default todo