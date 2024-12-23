import './App.css';
import RecipeList from './pages/recipes';
import CommentsList from './pages/comments'
import RecipeDetailsPage from './pages/recipe-details';
import { Link, useNavigate, useRoutes } from 'react-router-dom';
import NotFoundPage from './pages/not-found';
import Layout from './components/layout';
import ReactFormExamplePage from './pages/react-hook-form-example';
import Hooks from './pages/hooks';
import UseMemoExample from './pages/use-memo-example';
import UseCallBackExample from './pages/use-callback-example';
import ReactQuerry from './pages/react-query';

function CustomRoutes(){
  const element = useRoutes([
    {
      path: '/', element : <Layout />,
      children : [
        { 
          path : '/recipe-list', 
          element : <RecipeList />,
         },
          { path : '/comments-list',
            element : <CommentsList />
          },
         { path : '/recipe-list/:id', 
          element : <RecipeDetailsPage />
        },
      ],
    },
    {
      path : "*", 
      element : <NotFoundPage/>
    }, 
    {
      path : '/react-hook-form',
      element : <ReactFormExamplePage />
    }, 
    {
      path : '/hooks',
      element : <Hooks />
    },
    {
      path : '/usememo',
      element : <UseMemoExample />
    },
    {
      path : '/usecallback',
      element : <UseCallBackExample /> 
    },
    {
      path : '/react-query',
      element : <ReactQuerry />
    },
  ]);
  return element
}

function App() {

  const navigate = useNavigate();
  return (
    <div>
      {/* <h1>React Routing</h1> 
      <div>
        <Link to={'/recipe-list'}>
        Altenative way of navigating to recipe list page
        </Link>
      </div>
      <button onClick={()=>navigate('/recipe-list')} style={{background: 'black', color : 'white'} }>Navigate to Recipe List Page </button>
      <button onClick={()=>navigate('/comments-list')} style={{background: 'black', color : 'white'} } >Navigate to Comments List Page</button>
       {/* <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/comments-list" element={<CommentsList />} />
        <Route path="/recipe-list/:id" element={<RecipeDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
      <CustomRoutes />
     
    </div>
  )
}

export default App
