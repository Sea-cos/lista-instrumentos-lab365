
import { Route, Routes } from 'react-router'
import './App.css'
import { Table } from './pages/Table/ListTable'
import { Cards } from './pages/Card/ListCard'

function App() {


  return (
    <>
     <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/tabela" element={<Table />} />
     </Routes>
    </>
  )
}

export default App
