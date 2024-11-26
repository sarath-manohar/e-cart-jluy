import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div><div style={{height:'300px',marginTop:"100px"}} className='d-flex justify-content-center align-items-center w-100 flex-column bg-info '>
    <div className='d-flex justify-content-evenly align-items-center w-100'>
     <div className="websites" style={{width:'400px'}}>
     <h4 className='mb-3'>
       <i class="fa-solid fa-truck-fast me-3"></i>
           E-Cart
     </h4>
     <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit velit placeat quasi animi maxime natus vero aspernat blanditiis magni, molestias</h6>
     <h6>similique? Nesciunt, aspernatur?</h6>
     </div>
     <div className="links d-flex flex-column">
      <h4 className='mb-3'>Links</h4>
      <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link>
      <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>Cart</Link>

      <Link to={'/Whishlist'} style={{textDecoration:'none', color:'white'}}>Whishlist</Link>

     </div>
     <div className="guides  d-flex flex-column">
     <h4 className='mb-3'>Guides</h4>
      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>React</Link>
      <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none', color:'white'}}>React Bootstrap</Link>

      <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>Bootswatch</Link>
     </div>
     <div className="contacts d-flex flex-column">
      <h4 className='mb-3'>Contact Us</h4>
      <div className='d-flex mb-2'>
        <input type="text" className='form-control' placeholder='Enter your Email ID' />
        <button className='btn btn-warning ms-3'>Subscribe</button>
      </div>
      <div className='d-flex justify-content-evenly align-items-center'>
      <Link to={'/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram "></i></Link>
      <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter "></i></Link>

      <Link to={'/whishlist'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin "></i></Link>
      <Link to={'/whishlist'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook "></i></Link>

      </div>
     </div>
    </div>
    <p className='mt-5'>Copyright © 2024 E-Cart. Built with React.</p>

  </div></div>
  )
}

export default Footer