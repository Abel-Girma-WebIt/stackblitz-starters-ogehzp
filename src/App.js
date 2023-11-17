import React,{useState} from 'react';
import './style.css';
import Data from './Data';

export default function App() {



let [search, setSearch]=useState("");



  let box =Data.filter((item)=>{

    return(

search.toLowerCase()===""? item: item.name.toLowerCase().includes(search))

  }).map((item) => {
    return (
  
      <div id="item-box" key={item.id}>
        <img src={item.url} alt="" width="300px" height="300px" />
          <h3>{item.name}</h3>
          <h4>Brand: {item.brand}</h4>
          <p>$ {item.price}</p>
          <p><b>{item.description}</b></p>

          <div id="button-div">
          <button>Add to Cart</button>
          <button>Buy Now!</button>
          </div>
      </div>

      
    );
  });




  return (
    <div id="main-div">
      <h1>Abel Shoping Center</h1>
      { <h2></h2>}
      <input onChange={((e)=>{setSearch(e.target.value)})} type="text" placeholder="Search your product here..."/>
      <div id="parent">
           {box}
      </div> 





    </div>
  );
}
