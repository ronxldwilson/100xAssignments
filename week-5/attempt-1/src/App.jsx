import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const arr = ["Hacking" ,"Development"]
  return (
    <>
      <Card buisnessName="Ron" description="Developer" interests= {arr} linkedin="asd" twitter="asd" >
        Hello world
      </Card>
    </>
  )
}

function Card({buisnessName,description,interests,linkedin,twitter}){
  return <div style={{ border: "2px solid black",
  width: "600px",
  backgroundColor:"grey",
  height: "500px",
  display: "flex",
  flexDirection:"Column",
  justifyContent:"space-evenly",
  
    }}>
    
    <div>{buisnessName}</div>
    <div>{description}</div>
    <b>Interests</b>
    <div>{interests} </div>
    <div style={{padding:100,margin:10}}>
      <button>Linkedin</button>
      <button>Twitter</button>
    </div>
  </div>
}

export default App
