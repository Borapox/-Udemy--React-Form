import React, { useState } from 'react';
import './MyForm.css';

const MyForm = () => {
  
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");
  
    const handleName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setName(e.target.value)
    }
    const handleEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setEmail(e.target.value)
    }

    
    return (
    // Criação do Formulário
    <div className='w-[300px] m-auto text-left'>
      {/* Como realizar o envio de formulário via onSubmit */}
      
      <form onSubmit={(e) => { e.preventDefault()
            console.log(
              {
                name : name,
                email: email,
                bio: bio,
                role: role

              }
            )
        
        {/* Limpeza de Formulário */}
        setName("");
        setEmail("");
        setRole("");
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
            className='py-3 px-4 rounded-lg outline-none w-full focus:bg-zinc-300 text-lg'
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
            placeholder='Digite seu e-mail'
            className='py-3 px-4  rounded-lg outline-none w-full mb-2 focus:bg-zinc-300 text-lg'
            onChange={handleEmail}
          />
        </label>

        {/* TextArea */}
        <label>
          <span
              className='text-xl text-zinc-400 mb-3'>
              Mensagem:
          </span>
          <textarea
            placeholder='Descrição do Usuário'
            value={bio}
            className=' outline-none border  border-[#1e293b] w-full rounded-lg py-3 px-4 text-[#2d4258] focus:bg-zinc-300 text-lg'
            onChange={(e) => setBio(e.target.value)}
          >
          </textarea>
        </label>

        {/* Select */}
        <label>
          <span>Função no Select</span>
          <select
           name="role"
           value = {role}
           onChange={ (e) => setRole(e.target.value) }
           className='w-full p-2 rounded-lg text-[#2d4258] outline-none focus:bg-zinc-300'
            >
            <option value="usuario">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        

          <input 
            type="submit" 
            value="Enviar" 
            className='mt-3 rounded p-2 border border-[#1e293b] w-full bg-[#2d4258] cursor-pointer text-xl text-zinc-400 hover:bg-[#1e293b] hover:border-[#496491]'

          />

      </form>
    </div>
  )
}

export default MyForm;