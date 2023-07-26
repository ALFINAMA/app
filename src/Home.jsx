import React, { useContext, useEffect } from 'react'
import { NewContent } from './App';

function Home() {
  const {movies1,setMovies1,fetchcomedyMovies,nav,setnav}=useContext(NewContent)
   
    // console.log(movies1)
    // const generateRandomIndex = () => {
    //   return Math.floor(Math.random() * 20);
    // };
  
    // const randomIndex = generateRandomIndex();
    // console.log(randomIndex)
    // const bg=movies1[randomIndex]
    // console.log(bg)
    //const bg1=bg.poster_path
    return (
    <div>
<div  >
  <img style={{width:'100%',height:'500px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfW1pL93uKbp-ac8QTKuwwN6xGydPjmY9hNg&usqp=CAU'></img></div>
<div style={{width:'100%',height:'300px',backgroundColor:'black'}}>
  
  
<h1 className='text-center' style={{color:'white',padding:'4rem',fontFamily:'fantasy'}}>Welcome back!</h1>

<h3  className='text-center' style={{margin:'1rem',color:'white',fontFamily:'fantasy'}}>Unlimited movies, TV shows and more
Watch anywhere. Cancel anytime.</h3>
</div>

<div>
  <img style={{width:'100%',height:'500px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4KI5PiObEriePVHlDg52xXd0srLwn4Hhmw&usqp=CAU'></img>
</div>

    </div>
  )
}

export default Home;
