function Counter(){

    let quantity = 1;

    function upQuantity(){
        quantity += 1;
        document.getElementById("count-qtde").innerHTML = quantity
        console.log(quantity)
    }

    return(
        <>
            <h1 id="count-qtde">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
        </>
    )
}

export default Counter;