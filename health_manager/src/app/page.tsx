'use client'
import { dbConnection } from "./lib/dbConnect"

export default function Page() {
  return(
    <div>
      <button onClick={dbConnection}>click me</button>
    </div>
    
  )
}