import useFetch from "../../hooks/use-fetch";


function UseMemoExample(){
    const {data, loading} = useFetch('https://dummyjson.com/products');

    function filterProductByPrice(getProducts){

        return getProducts?.length > 0 ? getProducts.filter(singleProductItem => singleProductItem.price > 10) : [];  
    }

    if(loading) return <h1>loading data! Please wait</h1>

    console.log(data);
    

    return (
        <div>
            <h1>Use Memo</h1>
            <ul>
                {
                    filterProductByPrice(data?.products).map(item=> <li>{item.title} </li> )
                }
            </ul>
        </div>
    );
}

export default UseMemoExample;