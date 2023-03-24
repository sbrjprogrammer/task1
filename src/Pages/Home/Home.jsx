import React from 'react'
import Bar1 from '../../Components/charts/Bar/Bar'
import "./home.css"
import Navbar from '../../Components/Navbar/Navbar'

function Home() {
    return (

        <>
          <Navbar />
        <div className='parent'>
        
         
            <h3 className='m-5'>Dashboard</h3>
            <div className='row m-5'>
            
                <div className='col-md-3 col-sm-2 ms-4 recordbox'>
                    <h6 className='mt-2'>Current Month total order </h6> 
                    <h1 className='text-center mt-5'>5</h1>
                </div>

                <div className='col-md-3 col-sm-2 ms-4 recordbox  bg-primary'>
                    <h6 className='mt-2'>Current Month total order </h6> 
                    <h1 className='text-center mt-5'>5</h1>
                </div>

                <div className='col-md-3 col-sm-2 ms-4   recordbox  bg-info'>
                    <h6 className='mt-2'>Current Month total order </h6> 
                    <h1 className='text-center mt-5'>5</h1>
                </div>

               
                
            </div>
            


            <div className='row m-5'>
            

            <div className='col-md-3 col-sm-2 ms-4 recordbox  bg-primary '>
                    <h6 className='mt-2'>Current Month total order </h6> 
                    <h1 className='text-center mt-5'>5</h1>
                </div>
            <div className='col-md-3 recordbox ms-4 bg-danger'>
                <h6 className='mt-2'>Current Month total order </h6> 
                <h1 className='text-center mt-5'>5</h1>
            </div>

            <div className='col-md-3 recordbox ms-4 bg-warning'>
                <h6 className='mt-2'>Current Month to tal order </h6> 
                <h1 className='text-center mt-5'>5</h1>
            </div>

            
        </div>

      <div className='row mt-5 ms-5'>
      <div className='col-md-5'>
      <Bar1/>
      </div>


      <div className='col-md-6'></div>
      </div>
        </div>
        </>
    )
}

export default Home
