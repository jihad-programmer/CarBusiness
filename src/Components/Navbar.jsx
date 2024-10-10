import React from 'react'

function Navbar() {
  return (
    <>

<nav className='navbar navbar-expand-lg'>
        <div className='container'>

            <a href="">
                <img src="Img/Logo.png" alt="" />
            </a>

           <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#TogglerBtn">
               <span className='navbar-toggler-icon'></span>
           </button>

       <div className='collapse navbar-collapse' id='TogglerBtn'>
            <ul className='navbar-nav ms-auto gap-3'>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Used Cars</a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' href="">Auctions</a>
                </li>

                <li className='nav-item'>
                    <a  className='nav-link' href="">New Cars</a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' href="">Sell Cars</a>
                </li>

                <li className='nav-item'>
                    <a  className='nav-link' href="">Local Dealers</a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' href="">Support</a>
                </li>

                <li className='nav-item SignUp'>
                    <a  className='nav-link' href=""> <i className="bi bi-person-fill"></i>

                   <span>Sign Up</span>  
                   
                   </a>


                </li>



            </ul>

           </div>


        </div>

    </nav>
        
    </>
  )
}

export default Navbar