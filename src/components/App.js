import React, {useState, useEffect} from 'react';
import AddCustomer from './AddCustomer'
import ListCustomers from './ListCustomers'
import SearchCustomers from './SearchCustomers'

function App() {
  const [customers, setCustomers] = useState([])

  useEffect(()=>{
      fetch('http://localhost:4000/api/customers')
      .then(response => response.json())
      .then(data=>setCustomers(data))
  }, [])

  function addCustomer(customer){
      setCustomers([...customers, customer]);
      setView(1);
  }
  const [view, setView] = useState(0);

  let views=[
    <AddCustomer addCustomer={addCustomer} searchCustomersButton={searchCustomersButton}/>,
    <ListCustomers  searchCustomersButton={searchCustomersButton} customers = {customers}/>,
    <SearchCustomers  listCustomersButton={listCustomersButton}/>
  ]
  function listCustomersButton(){
    setView(1)
  }
  function searchCustomersButton(){
    setView(2)
  }
  



  return (
    <div style={{border:"2px solid green", margin:"5px", padding:"5px"}}>
      <h1 style={{textAlign:"center", color:"green"}}>Drives Boat Licence System</h1>
       {views[view]}
    </div>
  );
}

export default App;
