import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Info extends Component {
  render() {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
          <div className="card">
            <h5 className="card-header">
              Application Information
            </h5>
            <div className="card-body">
              <div className="card-text">
                <div>
                This application is showing the squad of Barnsley FC and some information about the players. It is possible to see all players, get some deeper information about a single player. 
                It is also possible to delete a player or update information about one player.
                The application is fetching all of its data from an API written in Node.js. The data is stored in
                a Mongo database and in the application the state is stored in a Redux store.
                The techniques used for creating this application is React, Node.js, Express and MongoDB.
                </div>
                <hr />
                <div>
                  <ul className="info-list">
                    <li><span>Creator:</span> Anders Strömberg</li>
                    <li><span>Date:</span> 2020-01-18</li>
                    <li><span>Email:</span> anst9000@student.miun.se</li>
                    <li><span>Phone:</span> 070 - 648 48 48</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </React.Fragment>
      )
    }
}
export default Info
