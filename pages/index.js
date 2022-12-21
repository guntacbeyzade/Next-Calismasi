import Head from 'next/head'
import Image from 'next/image'
import React,{ useEffect, useState } from 'react'
import HandleClick from './components/HandleClick'
import HandleDelete from './components/HandleDelete'


export default function Home() {
    const [form,setForm] = useState("")
    const [test,setTest] = useState(0)

  // const handleForm =(e) => {
  //   setForm(e.target.value)
  // }

  // useEffect(() => {
  //   console.log("form :",form)
  //   //console.log("setform :",setForm)
  // },[form])
  const handleClick = () => {
    console.log("click yapildi...")
    setForm("güntaç")
  }
  const handleDelete = () => {
    console.log("delete oldu...")
    setForm("")
  }
  
  return (
    <div >
      <input type="text" placeholder='search' value={form}  onChange={(e) => setForm(e.target.value)} />
      <HandleClick handleClick={handleClick} />
      <HandleDelete handledelete={handleDelete} />
      <h2>{form}</h2>
    </div>
  )
}
