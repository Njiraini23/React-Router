

function Counter({countValue, onClick}){
    return (
        <div>
            <p>{countValue}</p>
            <button onClick={onClick} >Click Me</button>
        </div>
    )
}
export default Counter;