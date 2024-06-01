import { useState } from 'react'
//import toast from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [stoped, setStoped] = useState(false);

  const increment = () => {
    const newCount = count + 1
    setCount(newCount)
    if (newCount % 3) {
      toast.success("Count est 3!")
      setCount(newCount * 5)
      setStoped(true)
    } else {
      setCount(newCount)
    }
  }

  return (
    <>
      <ToastContainer />
      <h1>test des state</h1>
      <button type='button' onClick={increment}>{count}</button>
    </>
  )
}

export default App
