import { useParams } from "react-router-dom";

 
function RecipeDetails() {

    const params = useParams();
    console.log(params);
    const {id} = params;
    
  return <div>
    <h1>Recipe Details of recipe item {id}</h1>
    </div>;

}

export default RecipeDetails