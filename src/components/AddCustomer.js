import React, { useState, useEffect } from 'react'

export default function AddCustomer(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dobDay, setDobDay] = useState('')
    const [dobMonth, setDobMonth] = useState('')
    const [dobYear, setDobYear] = useState('')
    const [address, setAddress] = useState('')
    const [licenceType, setLicenceType] = useState('')
    const [display, setDisplay] = useState()
    function sendAddCustomerRequest(c) {
        debugger
        c.preventDefault()
    
        let customer = { firstName, lastName, dobDay, dobMonth, dobYear, address, licenceType }
        fetch('http://localhost:4000/data', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customer)
        })
            .then((res) => res.json())
            .then((json) => {
                // props.listCustomersButton()
                debugger
                props.addRegistration(json)
                

            })
    }


    return (
        <div style={{ border: "2px solid green", margin: "5px", padding: "5px" }}>
            <h2 style={{ textAlign: 'center', color: "green" }}>Add Customer</h2>
            <form style={{ border: '2px solid green', margin: '5px', padding: "5px" }}>
                <button onClick={props.listCustomersButton}>View Customers</button>
                <button onClick={props.searchCustomersButton}>Search Customers</button> <br /><br />
                <label>First Name: </label>
                <input onChange={(c) => setFirstName(c.target.value)} value={firstName} /> <br /><br />
                <label>Last Name: </label>
                <input onChange={(c) => setLastName(c.target.value)} value={lastName} /> <br /> <br />
                <label>DOB: </label>
                <input style={{ width: '70px' }} placeholder="Day" type="number" onChange={(c) => setDobDay(c.target.value)} value={dobDay} />
                <input style={{ width: '70px' }} placeholder="Month" type="number" onChange={(c) => setDobMonth(c.target.value)} value={dobMonth} />
                <input style={{ width: '100px' }} placeholder="Year" type="number" onChange={(c) => setDobYear(c.target.value)} value={dobYear} /> <br /> <br />
                <label>Address: </label>
                <input onChange={(c) => setAddress(c.target.value)} value={address} /> <br /> <br />
                <label>Licence Class: </label>
                <input value="General Boat Licence" id='gbl' type="checkbox" onChange={(c) => setLicenceType(c.target.value)} />
                <label htmlFor='gbl'>General Boat Licence</label>
                <input value="Personal Water Craft" id='pwc' type="checkbox" onChange={(c) => setLicenceType(c.target.value)} />
                <label htmlFor='pwc'>Personal Water Craft</label> <br />
                {/* <input onChange={(c) => setLicenceType(c.target.value)} value={licenceType} /> <br /> */}
                <button onClick={sendAddCustomerRequest}>Add customer</button>


            </form> <br />
        </div>
    )
}

// if (json.status == 200) {

//     props.listCustomersButton()
//     setFirstName('')
//     setFirstName('')
//     setLastName('')
//     setDobDay('')
//     setDobMonth('')
//     setDobYear('')
//     setAddress('')
//     setLicenceType('')
//     props.addCustomer(json.data)
//     alert('Success Customer has been added')
// }
// else {
//     alert('There was an error')
// }