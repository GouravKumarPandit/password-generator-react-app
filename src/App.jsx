import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState();
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  let clipBoardCopy = useRef(null);

  const copyToClipboard = () => {
    // Basically we are using useRef to copy the text because it is storing current reference.
    clipBoardCopy.current?.select(length); // Here we can also pass length in select(), like select(0, 5) so it will give only 5 character from start.

    // Window > Navigator > Clipboard > will give access to our CLIPBOARD
    window.navigator.clipboard.writeText(password); // Current passowrd we are copying to clipboard
  }

  const generatePassowrd = useCallback(() => {
    let passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let newPassword = "";

    if(length > 0){
      if(numberAllowed) passwordString += "0123456789"; // If number is checked
      if(characterAllowed) passwordString += "()*&^$#@!~;?<>|+="; // If special character is checked
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor((Math.random() * passwordString.length) + 1); // Generating random number
        newPassword += passwordString.charAt(randomIndex); 
      }

      setPassword(newPassword);
    }
  }, [length, numberAllowed, characterAllowed, setPassword])

  useEffect(() => {
    /* First it will call the generatePassword() automatically when the component will load, but after that it will call the function whenever given
    dependencies state will change */
    generatePassowrd();
  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <>
      <div className='w-3/6 bg-white mx-auto mt-10 rounded shadow-xl'>
        <h1 className='text-black text-4xl text-center py-5'><b>Passowrd Generator</b></h1>
        <div className='flex'>
          <div className='border w-5/6 mx-3 rounded mb-4'>
            <input type="text" className='px-3 py-3 w-full' value={password} ref={clipBoardCopy} name="password" placeholder='Password' id="password" />
          </div>
          <div className='w-1/6'><button className='border px-4 py-3 rounded-xl bg-orange-300 outline-none' onClick={copyToClipboard}><b>Copy</b></button></div>
        </div>
        <div className='mb-4 flex justify-center'>
          <div className='mx-3 rounded-lg mb-4 border px-3 py-1 hover: bg-lime-100 outline-none'>
            <input type="range" className='px-3 cursor-pointer' min={8} max={100} value={length} onChange={(event) => setLength(event.target.value)} name="range_increase" placeholder='number' id="password" />
            <span className='ps-3 text-lg cursor-pointer'>{length}</span>
          </div>
          <div className='mx-3 rounded-lg mb-4 border px-3 py-1 hover: bg-lime-100 outline-none'>
            <input type="checkbox" className='px-3 cursor-pointer' onChange={() => setNumberAllowed((previous) => !previous)} name="number_allowed" placeholder='Password' id="number_allowed" />
            <label htmlFor="number_allowed" className='ps-3 text-lg cursor-pointer'>Number Allowed</label>
          </div>
          <div className='mx-3 rounded-lg mb-4 border px-3 py-1 hover: bg-lime-100 outline-none'>
            <input type="checkbox" className='px-3 cursor-pointer' onChange={() => setCharacterAllowed((previous) => !previous)} name="character_allowed" placeholder='Password' id="character_allowed" />
            <label htmlFor="character_allowed" className='ps-3 text-lg cursor-pointer'>Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
