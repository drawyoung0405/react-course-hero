import React from 'react'
import { useParams } from "react-router-dom";

function BooksDetails( { data } ) {
  const { invoiceNumber } = useParams();
  const invoiceItem = data.find(invoice => invoice.number === Number(invoiceNumber));

  if(!invoiceItem) {
    return <>Do not invoice</>
  }
    
  return (
    <>
        <h2>Total Due: {invoiceItem.amount}</h2>
        <p>{invoiceItem.name}: {invoiceItem.number}</p>
        <p>Due Date: {invoiceItem.due}</p>
    </>
  )
}

export default BooksDetails