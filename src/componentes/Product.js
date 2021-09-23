import React from 'react'

const Product = ({item}) => {
    return (
        <div className="product">
        <div className="img-div" style={{backgroundColor:`rgb(${Math.ceil(Math.random()*100)}, ${Math.ceil(Math.random()*100)},70)`}}>
        <img src={item.url} alt="" />
        </div>
        <div className="text-div">
        <h1>{item.name}</h1>
        <p>{item.des}</p>
        <p>RS.{item.price}</p>
        <div><span>Quantity:</span>&nbsp;<span>{item.qty}</span></div>
        </div>
        </div>
    )
}

export default Product
