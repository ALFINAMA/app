import React, { useContext } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NewContent } from './App'

function Top() {
    const {NavClick,ComedyMovies,fetchcomedyMovies,fetchpopularMovies,fetchlatestMovies}=useContext(NewContent)
  return (
    <div>
        
        <Navbar style={{backgroundColor:'black',opacity:'0.9'}} variant="dark">
        <Container>
            <Link to='/'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src='https://cdn-gce.allmovie.com/images/allmovie_wordmark.png'
           
              height="34"
              className="d-inline-block align-top"
            />
            
          </Navbar.Brand></Link>
         
          <Navbar.Collapse className="justify-content-end">
          <Nav  style={{marginLeft:'48px'}}>
            <Nav.Link href="#home" style={{color:'#068DA9'}}  ><Link to='/comedy'  > <Button style={{backgroundColor:'black',color:'#068DA9',border:'none',fontFamily:'fantasy'}} onClick={() => fetchcomedyMovies}>Comedy Movies</Button></Link></Nav.Link>
            <Nav.Link href="#home" style={{color:'#068DA9'}}  ><Link to='/popular' ><Button style={{backgroundColor:'black',color:'#068DA9',border:'none',fontFamily:'fantasy'}} onClick={() => fetchpopularMovies}>Popular Movies</Button></Link></Nav.Link>
            <Nav.Link href="#home" style={{color:'#068DA9'}}  ><Link to='/latest'   ><Button style={{backgroundColor:'black',color:'#068DA9',border:'none',fontFamily:'fantasy'}} onClick={() => fetchlatestMovies}>Latest Movies</Button></Link></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Top