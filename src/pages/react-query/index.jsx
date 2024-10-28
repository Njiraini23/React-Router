import { useQuery } from "@tanstack/react-query";
import { fetchListOfProducts } from "./api";


function ReactQuerry(){

    const {data: productList, isLoading} = useQuery({
        queryKey : ['productList'],
        queryFn : ()=> fetchListOfProducts()
    });

    if(isLoading) return <h1>Loading products ! Please wait</h1>

    

    return (
        <div>
            <h1>React Query Demo</h1>
            <ul>
                {
                    productList?.length > 0 ? (
                    productList.map((product)=> (
                    <li key={product.id} >{product.title} </li> 
                ))
                 ) : (
                     <h3>No Product Found</h3>
                )}
            </ul>
        </div>
    )
}
export default ReactQuerry;