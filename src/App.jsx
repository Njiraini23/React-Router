import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import CommentsList from './pages/comments'
import ReceiptList from './pages/recipes'

function App() {
  const navigate =  useNavigate()
  return (
    <div>
       <h1>React routing, Custom hooks and more</h1>
       <div>
        <Link to={"/recipe-list"} >Alternative way of navigating to recipe list pages</Link>
       </div>
       <button 
       onClick={() => navigate('/recipe-list')} 
       style={{background : 'black', color : 'white'}}
       >
        Navigate to Recipe List Page
        </button>
       <button 
       onClick={() => navigate('/comments-list')}
        style={{background : 'black', color : 'white'}}
        >
        Navigate to Comments List Page
        </button>
       <Routes>
         <Route path='/recipe-list' element ={<ReceiptList/>} />
         <Route path='/comments-list' element={<CommentsList/>} />

       </Routes>
    </div>
  )
}

export default App
