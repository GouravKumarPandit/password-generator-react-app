import './App.css'

function App() {
  return (
    <>
      <div className='w-3/6 bg-white mx-auto mt-10 rounded shadow-xl'>
        <h1 className='text-black text-4xl text-center py-5'><b>Passowrd Generator</b></h1>
        <div className=''>
          <div className='border mx-3 rounded mb-4'>
            <input type="text" className='px-3 py-3 w-full' name="password" placeholder='Password' id="password" />
          </div>
          
        </div>
        <div className='mb-4 flex justify-center'>
          <div className='mx-3 rounded mb-4'>
            <input type="range" className='px-3 cursor-pointer' min="6" max="100" name="range_increase" placeholder='number' id="password" />
            <span className='ps-3 text-lg cursor-pointer'>Number</span>
          </div>
          <div className='mx-3 rounded mb-4'>
            <input type="checkbox" className='px-3 cursor-pointer' name="number_allowed" placeholder='Password' id="number_allowed" />
            <label htmlFor="number_allowed" className='ps-3 text-lg cursor-pointer'>Number Allowed</label>
          </div>
          <div className='mx-3 rounded mb-4'>
            <input type="checkbox" className='px-3 cursor-pointer' name="character_allowed" placeholder='Password' id="character_allowed" />
            <label htmlFor="character_allowed" className='ps-3 text-lg cursor-pointer'>Character Allowed</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
