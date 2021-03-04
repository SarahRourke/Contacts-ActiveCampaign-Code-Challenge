import React from 'react';
import './App.css';
import { Table } from 'react-bootstrap';
import Data from './components/Data';


function App(props) {
  
  return (
    <div className="App">
      <div className="table-container" >
        <Table striped bordered hover>
          <thead className="text-muted">
            <tr>
              <th className="text-center">
                
                  <input type="checkbox" value=""></input>
                
              </th>
              <th>Contact</th>
              <th>Total Value</th>
              <th>Location</th>
              <th className="text-center">Deals</th>
              <th>Tags</th>
            </tr>
          </thead>
          <Data />
        </Table>
      </div>
    </div>
  );
}

export default App;
