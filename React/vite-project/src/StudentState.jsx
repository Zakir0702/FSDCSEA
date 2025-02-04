import React,{useState} from 'react'


const StudentState = () => {
const [Count, setCount] = useState(1000);
  return (
    <div>
     {Count}
    </div>
  )
}

export default StudentState
