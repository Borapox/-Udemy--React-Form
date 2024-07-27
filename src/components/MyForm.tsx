import './MyForm.css';

const MyForm = () => {
  return (
    // Criação do Formulário
    <div className='w-[300px] m-auto text-left'>
      <form>
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
            className='p-2 rounded-lg outline-none w-full'
          />
        </label>

          <input 
            type="submit" 
            value="Enviar" 
            className='rounded p-2 border border-[#1e293b] w-full bg-[#2d4258] cursor-pointer text-xl text-zinc-400 hover:bg-[#1e293b]'
          />

      </form>


    </div>
  )
}

export default MyForm;