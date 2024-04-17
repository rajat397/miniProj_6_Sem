import './App.css'
import AlertList from './pages/AlertList'

function App() {
 

  return (
        <div className=' container mx-auto px-10 flex flex-col justify-center '>

            <h1 className='font-bold text-3xl p-4 text-white bg-blue-800'>
              Alert Home Page
            </h1>
 

            <div className='flex-1  flex justify-center items-center '>
                 
              <AlertList/>
            </div>
        </div>


  )
}

export default App
