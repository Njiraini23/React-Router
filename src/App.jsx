import './App.css';
import RecipeList from './pages/recipes';
import CommentsList from './pages/comments'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <h1>React Routing</h1> 
      <Routes>
        <Route  path='/recipe-list' element={<RecipeList />} />
        <Route path='/comments-list' element={<CommentsList />} />
      </Routes>
     
    </div>
  )
}

export default App
