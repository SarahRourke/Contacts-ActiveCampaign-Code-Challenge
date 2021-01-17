import './App.css';
import { Table, Image } from 'react-bootstrap';


function App(props) {
  return (
    <div className="App">
      
      {/* contacts table */}
      <div className="table-container">
        <Table striped bordered hover>
        
          <thead className="text-muted">
            <tr>
              <th className="text-center head-row">
                <div className="form-check">
                  <input className="form-check-input position-static" type="checkbox" value="" id="defaultCheck1" aria-label="..."></input>
                </div>
              </th>
              <th>Contact</th>
              <th>Total Value</th>
              <th>Location</th>
              <th className="text-center">Deals</th>
              <th>Tags</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="text-center">
                <div className="form-check">
                  <input className="form-check-input position-static" type="checkbox" value="" id="defaultCheck1" aria-label="..."></input>
                </div>
              </td>
              <td>
                <Image src="..." roundedCircle thumbnail />
                Contact First Name
                Contact Last Name
              </td>
              <td>
                $Total Value
              </td>
              <td>
                City, State, Country
              </td>
              <td className="text-center">
                Deals - number of 
              </td>
              <td>
                Tags
              </td>
            </tr>
          </tbody>

        </Table>
      </div>

    </div>
  );
}

export default App;
