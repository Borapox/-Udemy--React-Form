import './MyForm.css';

const MyForm = () => {
  return (
    // Criação do Formulário
    <div className='w-[300px] m-auto text-left'>
      <form>
      <div className='mb-[10px]'>
        <label htmlFor='name'>Nome:</label>
        <input
          type="text" 
          name='name'
          placeholder='Digite seu nome'
          className='p-2 rounded-lg outline-none w-full'
         />
      </div>
      <input 
        type="submit" 
        value="Enviar" 
        className='rounded p-2 border border-[#1e293b] w-full bg-[#2d4258] cursor-pointer text-xl text-zinc-400 hover:bg-[#1e293b]'
      />
      </form>


    </div>
  )
}

export default MyForm