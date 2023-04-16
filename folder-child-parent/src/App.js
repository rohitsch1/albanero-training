import React ,{useState} from 'react'
import Test from './components/test'
import initialFolders from './folder'
import './App.css'
import ReactSwitch from "react-switch";


const App = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (val) => {
    setChecked(val);
  };

  return (
    <div className='App'>
      <h1>Checkbox Example</h1>
      <ReactSwitch checked={checked} onChange={handleChange} />
      {initialFolders.map((folder)=>(<Test key={folder.id} value ={checked} folderValue={folder}/>))}
    </div>
  )
}

export default App