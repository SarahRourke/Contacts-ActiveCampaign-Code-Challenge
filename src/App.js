import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import Contacts from './components/Contacts';


function App(props) {
  return (
    <div className="App">
      <div className="table-container" >
        <Table striped bordered hover>
          <thead className="text-muted">
            <tr>
              <th className="text-center">
                <div className="form-check">
                  <input className="form-check-input position-relative" type="checkbox" value="" id="defaultCheck1" aria-label="..."></input>
                </div>
              </th>
              <th>Contact</th>
              <th>Total Value</th>
              <th>Location</th>
              <th className="text-center">Deals</th>
              <th>Tags</th>
            </tr>
          </thead>
          <Contacts />
        </Table>
      </div>
    </div>
  );
}

export default App;
