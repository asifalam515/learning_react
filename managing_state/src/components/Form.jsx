import { useState } from "react"

export default function Form() {
    //mandatory data  state =>
  const [answer,setAnswer] = useState("")
  const [error,setError] = useState(null)
  // visual state theke pawa final state
  const [status,setStatus] = useState("typing")

  const handleTextChange=(e)=>{
    setAnswer(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea value={answer} onChange={handleTextChange} />
        <br />
        <button>
          Submit
        </button>
      </form>
    </>
  )
}
