// Supports weights 200-800
import '@fontsource-variable/dosis';
import MyForm from './components/MyForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e293b] to-[#2d4258] flex items-center justify-center">
      
      <div className='flex flex-col'>
        <h1 className="text-white text-4xl">
          Form em React!
        </h1>

        <div>
          <MyForm></MyForm>
        </div>
      </div>

    </div>
  );
};

export default App;
