import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Top from './Top';
import Comedy from './Comedy';
import Popular from './Popular';
import Latest from './Latest';
import Detailscomedy from './Detailscomedy';
import Detailspopular from './Detailspopular';
import Detailslatest from './Detailslatest';


const NewContent =createContext();



export const baseUrl = "https://api.themoviedb.org/3/";
export const imageUrl = "https://image.tmdb.org/t/p/original";
export const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";


export const ComedyMovies = `${baseUrl}discover/tv?api_key=${API_KEY}&with_networks=213`;
export const LatestMovies = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=28`;
export const PopularMovies = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=10749`;

function App() {

   const [movies1, setMovies1] = useState([])
   const [movies2, setMovies2] = useState([])
   const [movies3, setMovies3] = useState([])

   const [nav,setnav]= useState(true)
 const fetchcomedyMovies= useEffect(()=>{
   axios.get(ComedyMovies).then((val)=>setMovies1(val.data.results))
  },[])
  const fetchpopularMovies= useEffect(()=>{
    axios.get(PopularMovies).then((val)=>setMovies2(val.data.results))
   },[])
   const fetchlatestMovies= useEffect(()=>{
    axios.get(LatestMovies).then((val)=>setMovies3(val.data.results))
   },[]) 

 
// const mergedarray=[...movies1,...movies2,...movies3]

// console.log(mergedarray)
 
// const generateRandomIndex = () => {
//   return Math.floor(Math.random() * movies1.length);
// };

//   const randomIndex = generateRandomIndex();
 
// console.log(mergedarray[randomIndex].backdrop_path)
  return (
    <div>
      {/* <p>{movies.map((item,index)=>
<h3>{item.name}</h3>
    )}</p> */}

     <NewContent.Provider value={{nav,setnav,movies1,movies2,movies3,fetchcomedyMovies,fetchpopularMovies,fetchlatestMovies,ComedyMovies,LatestMovies,PopularMovies}}>
  <BrowserRouter>
     
     
{nav && <Top />}
   {/* <Moviecard/> */}
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/comedy' element={<Comedy/>}></Route>
      <Route path='/popular' element={<Popular/>}></Route>
      <Route path='/latest' element={<Latest/>}></Route>
       <Route path='/popular/:user' element={<Detailspopular/>}></Route>
       <Route path='/comedy/:user' element={<Detailscomedy/>}></Route>
       <Route path='/latest/:user' element={<Detailslatest/>}></Route>
     </Routes>
     
      </BrowserRouter>
  
 </NewContent.Provider>  
 {/* <Moviecard/> */}

    </div>
  )
}

export default App
export {NewContent}