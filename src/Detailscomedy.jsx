import React from 'react'
import { useContext } from 'react'
import { NewContent } from './App'
import { useNavigate, useParams } from 'react-router-dom'
import {FaStar  } from 'react-icons/fa';
import { Button, Card, ListGroup } from 'react-bootstrap';

function Detailscomedy() {
    const {user}=useParams()
    const navigate=useNavigate();
    const {movies1,nav,setnav}=useContext(NewContent)
    setnav(false)
    console.log(movies1)
    const imageUrl = "https://image.tmdb.org/t/p/original";
    const backgroundImageUrl =`${imageUrl}${movies1[user].backdrop_path}`
    const backgroundImageUrl1 =`${imageUrl}${movies1[user].poster_path}`
    console.log(backgroundImageUrl)
    const containerStyle = {
        background: `url(${backgroundImageUrl})`,
         backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '420px', // Set the desired height
        // zIndex: 2
        
      };
     
  return (
    <div >
         <div style={containerStyle} ></div>
         <div style={{backgroundColor:'black',opacity:'0.9',height:'21rem'}}>
            <div style={{marginRight:'10%',paddingTop:'5%',marginLeft:'50%',paddingBottomBottom:'20%'}} className='text-center'>
      <h1 style={{textShadow:'2px 2px 2px aliceblue;',color:'white'}}>{movies1[user].name}</h1>
      <p style={{color:'white',lineHeight:'2rem',fontStyle:'italic'}}>{movies1[user].overview}</p>
      
      
    </div>


    <Card style={{ width: '22rem' ,height:'28rem',position:'absolute',top:'250px',left:'150px',
    backgroundColor:'black',boxShadow:'10px 10px 10px 2px lightblue'}}>
      <Card.Img variant="top" src={backgroundImageUrl1} style={{height:'17rem',backgroundColor:'black'}} />
      <Card.Body>
      </Card.Body>
      <ListGroup className="list-group-flush" >
        <ListGroup.Item className='text-center' style={{backgroundColor:'black',color:'white'}}>Released On {movies1[user].first_air_date}</ListGroup.Item>
        <ListGroup.Item className='text-center' style={{backgroundColor:'black',color:'white'}}> <span><FaStar style={{color:'yellow',scale:'1.5',paddingBottom:'4px'}}/></span><span>
        &nbsp;{movies1[user].vote_average}
        </span><span>&nbsp;({movies1[user].vote_count})</span>
        </ListGroup.Item>
        <ListGroup.Item className='text-center' style={{backgroundColor:'black',color:'white'}}>Popularity:&nbsp;{movies1[user].popularity}</ListGroup.Item>
      </ListGroup>
     <Button  style={{backgroundColor:'#068DA9'}} onClick={()=>navigate('/comedy')}>Back</Button>
    </Card>
    </div>
    </div>

    

  )
}

export default Detailscomedy