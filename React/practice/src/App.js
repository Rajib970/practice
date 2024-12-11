import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';


function App() {
   const[mode,setMode] = useState('light');
   const toggleMode = () =>{
      if(mode === 'light'){
         setMode('dark')
         document.body.style.backgroundColor = "grey";
      }else{
         setMode('light')
         document.body.style.backgroundColor = "white";
      }
   }
  return (
   <>
<Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}
<div className='container'>
   <TextForm heading="Enter the text to analyze" mode={mode}/>
   {/* <About/> */}
   
</div>


   </>
  );
}

export default App;