
import './App.css';
import { TextField, Stack, Button } from '@mui/material';
import { useState } from 'react';


function App() {
  const [amount,setAmount] = useState(0)
  const [interest,setInterest] = useState(0)
  const [year,setYear] = useState(0)
  const [result,setResult] = useState(0)

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(amount==0 || interest==0 || year==0){
      alert("please enter valid input")
    }
    else{
      let output = parseInt(amount)*parseInt(interest)*parseInt(year)/100
      setResult(output)
    }
  }

  const handleReset = ()=>{
    setResult(0)
    window.location.reload()
  }
 
  return(
    <div className="app">
      <div className='container'>
        <div className='title_heading'>
            <h1 className='title'> Simple calculator</h1>
            <p className='title_para'>Calculate Your simple Interest Easily</p>
        </div>
        <div className='amount_card'>
            <div className='card_text'>
                <h3 className='total_amount'>₹ {result}</h3>
                <p className='total_para'>Total simple Interset</p>
            </div>

        </div>
        <form onSubmit={e=>handleSubmit(e)}>
          <div className='text_area' >
            <div className="input_box">
            <TextField className="outlined-basic" label="₹ Principle amount" variant="outlined" onChange={e=>setAmount(e.target.value)} />
            </div>
            <div className="input_box">
            <TextField className="outlined-basic" label="Rate of interest(p.a)%" variant="outlined" onChange={e=>setInterest(e.target.value)} />
            </div>
            <div className="input_box">
            <TextField className="outlined-basic" label="Time period(Yr)" variant="outlined" onChange={e=>setYear(e.target.value)} />
            </div>
          </div >
          <div className="btn_group">
          <Stack direction="row" spacing={2}>
          <Button className='btn' type='submit' style={{backgroundColor:'black'}} variant="contained">Calculate</Button>
          <Button onClick={handleReset}  className='btn' variant="outlined">Reset</Button>
          </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
