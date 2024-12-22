import person from './util/Person'
import ProductCard from './component/ProductCard'
import { useState } from 'react'
import './App.css'
import Display from './component/Display'


function App() {
  let brandName : string = "Behulah"
  const [show, setShow] = useState<boolean>(false)

  const toggleShow = () => {setShow(!show)}

 

  return (
    <>
     {show ? (<Display func={toggleShow}/>):(
      <div> <h1>React Typescript{brandName}</h1>
      <button onClick={toggleShow}>show</button>
    
      <h2>{person("Behulah","Nairobi")}</h2>

      
        <ProductCard
          productName="iphone12"
          ProductPrice={200}
          ProductQuantity={2}
          Category="Electronics"
          Description="Iphone12"
          />
          <ProductCard
          productName="Samsong"
          ProductPrice={400}
          ProductQuantity={2}
          Category="Device"
          Description="Xml"
          />

      </div>
     )}
    </>
  )
}

export default App
