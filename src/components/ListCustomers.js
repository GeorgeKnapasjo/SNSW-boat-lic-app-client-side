import React, {useState, useEffect} from 'react'
import AddCustomer from './AddCustomer'
import MapCustomers from './MapCustomers'

export default function ListCustomers(props){

    // let toExport = [<AddCustomer addCustomer={addCustomer}/>]

    return(
        <div style={{border:'2px solid green', padding:'5px', margin:'5px'}}>
            <button onClick={props.addCustomersButton}>Add Customer</button>
            <button onClick={props.searchCustomersButton}>Search Customers</button>
            <h2 style={{textAlign:"center", color:"green"}}>List Customers</h2>
            {props.customers.map((c)=><MapCustomers customer={c}/>)}
            
            {/* {customers} */}

            
        </div>
    )
}