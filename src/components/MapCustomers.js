import React, { useEffect, useState } from 'react';
// import MapDOB from './MapDOB'

export default function MapCustomers(props) {
    let dob = props.customer.dob
    return (
        <div style={{ border: "2px solid green", margin: "5px", padding: "5px" }}>

            <p><label>Licence Number: </label>{props.customer.licenceNumber} </p>
            <p><label>First Name: </label>{props.customer.firstName} </p>
            <p><label>Last Name: </label>{props.customer.lastName} </p>
            {/* <p><label>DOB Day</label>{dob.map((d) => d.day)} </p> */}
            {/* <p><label></label>{}</p> */}
            {/* <p><label>DOB Day</label>{[props.customer.dob]} </p> */}
            <p><label>Address: </label>{props.customer.address} </p>
            <p><label>Licence Class: </label>{props.customer.licenceType} </p>
            {/* <p><label>Licence Expiry</label>{Object.keys(props.customers.expiry).map((c)=>c.day)} </p> */}
        </div>
    )
}