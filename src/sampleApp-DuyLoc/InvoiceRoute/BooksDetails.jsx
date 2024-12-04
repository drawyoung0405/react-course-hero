import React from 'react'
import { useParams } from "react-router-dom";

function BooksDetails( { data } ) {
    const { invoiceNumber } = useParams();
    const selectInvoice = data.find(invoice => invoice.number === Number(invoiceNumber));
    
  return (
    <>
        <h2>Total Due: {selectInvoice.amount}</h2>
        <p>{selectInvoice.name}: {selectInvoice.number}</p>
        <p>Due Date: {selectInvoice.due}</p>
    </>
  )
}

export default BooksDetails