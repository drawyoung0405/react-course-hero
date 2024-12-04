import React from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Router/Home'
import Contact from './Router/Contact'
import InvoiceBook from './Router/InvoiceBook'
import { invoiceData } from './Data/mocksData'
import BooksDetails from './BooksDetails'

function Invoice() {
    const navigate = useNavigate();
    const [data, setData] = React.useState(invoiceData);

    function gotoHome() {
        navigate("/");
    }
  return (
    <>
        <h1>Bookkeeper</h1>
        <div className='menu-book'>
            <ul>
                <li>
                    <Link to = "/" >Home</Link>
                </li>
                <li>
                    <Link to ="/contact">Contact</Link>
                </li>
                <li>
                    <Link to ="/invoice">Invoice</Link>
                </li>
            </ul>
            <button type='button' onClick={gotoHome}>Test navigate home</button>
        </div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/invoice" element={<InvoiceBook data={data}/>}>
                <Route index element = {<p>Select an invoice</p>}/>
                <Route path =":invoiceNumber" element={<BooksDetails data={data} />} />
            </Route>
        </Routes>
    </>
  )
}

export default Invoice