// action creator

const buyShirt=()=>
{
    return {
        type: 'buy-a-shirt'
    }
}

const initialShopState={
    shirt:100,
    jean:100
}

const shirtReducer=(state=initialShopState,action)=>
{

}


// reducer comes from reduce method from array

// Reducer is pure function --- for same input you will get same output

// redux is predictable container for JS App
// here you have reducer -- it is function and you can predict the output