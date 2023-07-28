import React , {useEffect,useState}from 'react'
import {Link} from 'react-router-dom'


export default function Home({setcart,cart}) {
    const [data, setstate] = useState([])
 
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setstate(json))
    }, [])
  return (
    <div>


        {data?.map((item) => (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <h1>{item.title}</h1>
            <h1>${item.price}</h1> 
            <p>{item.category}</p> 
            <p>{item.description}</p>
             <img src={item.image} alt=''/>

            <button onClick={() => alert(item.id)}>❤️</button>
            <button onClick={() => setcart([...cart,item.title])}>Add to cart</button>

              <button onClick={()=>window.open(`https://api.whatsapp.com/send?phone=233208941623&text=Please send ${item.title}`)}>Buy on whatsapp</button>

            <Link to={`/${item.id}`}>
            <button >Show item</button>
            </Link>
            
            <hr />
          </div>
        ))}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Home</h1>
      
    </div>
  )
}

