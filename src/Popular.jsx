import React, { useContext, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { NewContent } from './App'
import { Link } from 'react-router-dom';

function Popular() {
    const {movies2,setMovies2,fetchcomedyMovies,nav,setnav}=useContext(NewContent)
    setnav(true)
    const imageUrl = "https://image.tmdb.org/t/p/original";
    console.log(movies2)
    const [searchQuery, setSearchQuery] = useState('');
    console.log(searchQuery)
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };

    const filteredProducts = movies2.filter((item) =>
      item.original_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return (
    <div>
          <div style={{backgroundColor:'black'}}>
     
     
          <Container>
        <Row >
          <Col>
          <h5 className='subheader' style={{color:'#068DA9',padding:'1rem',fontFamily:'fantasy'}}>POPULAR MOVIES</h5>
          </Col>
          <Col >
          <form  role="search" >
           <label style={{color:'#068DA9',padding:'1rem',fontFamily:'fantasy',marginLeft:'10rem'}}>Search</label>
           <input  type="search" placeholder="Search by title" aria-label="Search" value={searchQuery}
          onChange={handleSearch}/>
       
          </form>
          </Col>
        </Row>
      </Container>
 
  
      <Container>
   <Row style={{paddingBottom:'30px'}}>
     
         <div>
         {filteredProducts.map((data,index)=>
     <Link to={`/popular/${index}`}>  <Card  className='zoom'  style={{width:'20%',margin:'15px',float:'left',height:'16rem',backgroundColor:'#068DA9',color:'whitesmoke'}}>
       <Card.Img  src={`${imageUrl}${data.poster_path}`} style={{height:'12rem'}} />
         <Card.Body className='text-center'>{data.original_title}</Card.Body>
       </Card></Link>
       )}
      </div>
    
     
  
   </Row>
 </Container>
 </div>
    </div>
  )
}

export default Popular