import React, { useState } from 'react'

const User = () => {
  const [count,setCount] = useState(0);
  
  return (
    <div className='userCard'>
      {console.log("function component")}
      <h1>count:{count}</h1>
      
      <h3>Name : Prakriti</h3>
      <h3>Location : Moradabad</h3>
      <h3>Contact : @Prakriti</h3>
      <h1>this is working fine</h1>
      <button onClick={()=> setCount(count+1)}>change count</button>
    </div>
  )
}

export default User;
