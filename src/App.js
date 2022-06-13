import './App.css';
import {useEffect, useState} from 'react'
function App() {
  const [date,setDate]=useState()
  const [seconds,setSeconds]=useState()
  //{hour:'',minutes:'' ,seconds:''}
  setInterval(()=>{
    const date=new Date()
    const h=date.getHours()
    const m=date.getMinutes()
    const s=date.getSeconds()
    setDate(h)
    setSeconds(s)
},1000)

  useEffect(()=>{

 },[])
  return (
    <div className="App">     
<div className='clock'>
         <p className='no1'>1</p>
         <p className='no2'>2</p>
         <p className='no3'>3</p>
         <p className='no4'>4</p>
         <p className='no5'>5</p>
         <p className='no6'>6</p>
         <p className='no7'>7</p>
         <p className='no8'>8</p>
         <p className='no9'>9</p>
         <p className='no10'>10</p>
         <p className='no11'>11</p>
         <p className='no12'>12</p>
      <div className='hour'></div>
     <div className='minute'></div>
      <div className='seconds'></div>
        </div><br></br>
     
    </div>
  );
}

export default App;
