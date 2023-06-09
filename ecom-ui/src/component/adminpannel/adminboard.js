import { useState } from 'react';
import './adminboard.css'
import Product from './product';
import PageNotFound from './pagenotfound';

function Adminboard() {

    const [currentPage, setCurrentPage] = useState(<Product />)

    const getMenuPage = ( pageVal ) => {
        if (pageVal === "product") {
            setCurrentPage( <Product />)
        } else {
            setCurrentPage( <PageNotFound menu={pageVal} />)
        }
    }


    return (
        <>

            <div className='container d-flex justify-content-center my-3' >
                <div className='admin-square' >
                    <h2>Admin Dashboard</h2>
                    <div className='menu-square justify-content-center'>
                        <div className='menu-items d-flex justify-content-center align-items-center'>
                            
                            <button className='menu-buttons' onClick={ ()=> getMenuPage("product") }>Product</button>
                            <button className='menu-buttons' onClick={ ()=> getMenuPage("order") }>Order</button>
                            <button className='menu-buttons' onClick={ ()=> getMenuPage("history") }>History</button>
                            <button className='menu-buttons' onClick={ ()=> getMenuPage("stock") }>Stock</button>
                            <button className='menu-buttons' onClick={ ()=> getMenuPage("stats") }>Stats</button>
                                
                            
                        </div>
                        <div className='grid-page'> {currentPage} </div>
                    </div>
                </div>
            </div>

        </>
    )


}

export default Adminboard;