import React, { useState, useEffect } from 'react'
import MapSearch from './MapSearch'

export default function SeachCustomers(props) {
    const [licenceNumber, setLicenceNumber] = useState('')
    const [search, setSearch] = useState([])
    function sendSearchRequest(c) {
        c.preventDefault()
        let searchTerm = { licenceNumber }
        fetch('http://localhost:4000/api/customers/search', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(searchTerm)
        })
            .then((res) => res.json())
            .then((json) => {
               setSearch(<div>
                   <p>Licence Number: {json.licenceNumber}</p>
                   <p>First Name: {json.firstName}</p>
                   <p>Last Name: {json.lastName}</p>
                   <p>Address: {json.address}</p>
                   <p>Licence Type: {json.licenceType}</p>
               </div>)
                })
        //    style={{border: "2px solid green", border:'5px', margin:'5px'}} 

}
    // function displayData(){
    //     for(let i = 0; i < data.length; i++)
    //     console.log(data[i])
    // }

    return (
        <div style={{ border: "2px solid green", margin: "5px", padding: "5px" }}>
            <h2 style={{textAlign:'center', color:'green'}}>Search Customers</h2>
            <button onClick={props.addCustomersButton}>Add Customer</button>
            <button onClick={props.listCustomersButton}>View Customers</button> <br/> <br/>
            <form>
                {/* {data.map((c)=><MapSearch customer={c}/>)} */}
                {/* {Object.values(search.dob)} */}
                {/* {search} */}
                <label>Enter Licence Number: </label>
                <input onChange={(c) => setLicenceNumber(c.target.value)} value={licenceNumber} />
                <button onClick={sendSearchRequest}> Search</button>
            </form>
            {search}
        </div>
    )
}

// .then((json)=>{
//     // if(json.status == 200){

//         console.log(json)
//         // setData(Object.values(json))
//         // console.log(Object.values(json))
//         setSearch(Object.values(json))
//         // for(let i = 0; i < data.length; i++)
//         // console.log(data[i])
//         // for (const [key, value] of Object.entries(json)){
//             // let results = []
//             // results.push(`${key}: ${value}`)
//             // setSearch(`${key}: ${value}`)
//             // setSearch(results)
//             // set
//             // setData(`${key}: ${value}`)
//         // }
//         // data.map((c)=>c.firstName)

//     // } else{
//         // alert('unsuccessful')
//     // }