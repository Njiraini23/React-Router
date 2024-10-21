import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';
import CommentsList from './pages/comments';
import RecipeList from './pages/recipes';
import Layout from './components/layout';
import RecipeDetails from './pages/recipe-details';
import NotFoundPage from './pages/not-found';

{/*function CustomRoutes(){
  const element = useRoutes([
    {
      path : '/home',
       element : <layout />,
      children : [
        {
          path : 'recipe-list',
          element : <RecipeList/>,
        },
        { path : 'comments-list', 
          element : <CommentsList/>},
        { path : 'recipe-list/:id', element : <RecipeDetails/>}
      ],
    },
    {
      path : '*', element : <NotFoundPage/>
    }
  ]);

  return element
} */}

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
        <Route path='/home' element={<Layout />}>
        <Route path='recipe-list' element ={<RecipeList />} />
         <Route path='comments-list' element={<CommentsList />} />
         <Route path='recipe-list/:id' element={<RecipeDetails />} />
         
        </Route> 

       </Routes> 
     
         
    </div>
  )
}

export default App
