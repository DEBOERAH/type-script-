import React from 'react'

const ProductCard:React.FC <{productName:string,ProductPrice:number,ProductQuantity:number,Category:string,Description:string}>= ( {productName,ProductPrice,ProductQuantity,Category,Description}) => {
  return (
    <div>
        <h1>Product</h1>
        <p>ProductName :{productName??"iphone12"}</p>
        <p>ProductPrice :{ProductPrice ?? "200"}</p>
        <p>ProductQuantity :{ProductQuantity ?? "2"}</p>
        <p>Category :{Category ?? "Electronics"}</p>
        <p>Description :{Description ?? "Iphone12" }</p>
        
    </div>
  )
}

export default ProductCard