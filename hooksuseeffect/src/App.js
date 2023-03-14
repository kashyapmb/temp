import React, {useState, useEffect} from 'react'
import './index.css'

function App() {
  const [num, setNum] = useState(0)
  // const [nums, setNums] = useState(0)

  useEffect(()=>{
    document.title = `Clicked ${num}`
  }, [num])

  //[] muksho to khali page refresh thashe tyaare j kaam karshe
  //[num] ma agar num ni value change thaseh tyare kaam karshe
  //[num,nums] ma num and nums ni value change thashe tyaare kaam karshe


  return (
    <>
      <button onClick={()=>setNum(num+1)}>Click Me {num}</button>
      <br />
      {/* <button onClick={()=>setNums(nums+1)}>Click Me {nums}</button> */}
    </>
  );
}

export default App;
