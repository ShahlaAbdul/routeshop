import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './style.css'

function Cards() {

    const [getData, setGetData] = useState([])


    useEffect(() => {
        fetchData()
      }, [])

   async function fetchData(){
        const res= await fetch("https://fakestoreapi.com/products")
        console.log("res",res);
        const data= await res.json()
        console.log("data",data);
        setGetData(data)
    }

    
    console.log(getData)
  return (
    <div>
    
        <div className='card'>
            {
                
                getData.map((x)=>{
                    return(
                        <ul className='cards_element' key={x.id}>
                            <img className="image"src={x.image} alt="" />
                        <li>id: {x.id}</li>
                        <li>name: {x.title}</li>
                        <li>description: {x.description.slice(0,60)}</li>
                    </ul>
                    )
                })     
            }
        </div>


        
        <Card></Card>
    </div>
  )
}

export default Cards