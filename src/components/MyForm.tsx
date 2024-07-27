import React, { useState } from 'react';
import './MyForm.css';

const MyForm = () => {
  
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
  
    const handleName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setName(e.target.value)
    }
    const handleEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setEmail(e.target.value)
    }
  // Envio de Formulário - Submit
    
  return (
    // Criação do Formulário
    <div className='w-[300px] m-auto text-left'>
      {/* Como realizar o envio de formulário via onSubmit */}
      
      <form onSubmit={(e) => {
        e.preventDefault();
        
        console.log(
          {
            name : name,
            email : email
          }
        )
      }}>

        <div className='mb-3'>
          <label 
            htmlFor='name' 
            className='text-xl text-zinc-400 mb-3'>
            Nome:
          </label>

          <input
            type="text" 
            name='name'
            placeholder='Digite seu nome'
            className='p-2 rounded-lg outline-none w-full'
            onChange={handleName}
          />
          
        </div>

        {/* Label envolendo Input */}
        <label>
          
          <span
            className='text-xl text-zinc-400 mb-3'>
            E-mail:
          </span>

          <input 
            type="email" 
            name="" 
            placeholder='Digite seu e-mail'
            className='p-2 rounded-lg outline-none w-full mb-2'
            onChange={handleEmail}
          />
        </label>

          <input 
            type="submit" 
            value="Enviar" 
            className='rounded p-2 border border-[#1e293b] w-full bg-[#2d4258] cursor-pointer text-xl text-zinc-400 hover:bg-[#1e293b] hover:border-[#496491]'

          />

      </form>
    </div>
  )
}

export default MyForm;