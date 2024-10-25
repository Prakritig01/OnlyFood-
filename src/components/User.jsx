import React, { useState } from 'react'

const User = () => {
  const [count] = useState(0);
  
  return (
    <div className='userCard'>
      <h1>count:{count}</h1>
      
      <h3>Name : Prakriti</h3>
      <h3>Location : Moradabad</h3>
      <h3>Contact : @Prakriti</h3>
      <h1>this is working fine</h1>
    </div>
  )
}

export default User;
