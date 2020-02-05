import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PlayerInfo extends Component {
  render() {
    // console.log(this.props.location.state.player)
    const { name, team, shirt, position, age, birthday, country } = this.props.location.state.player

      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
          <div className="card">
            <h5 className="card-header">
              {name}  <strong> #</strong><span className="text-secondary">{shirt}</span>
            </h5>
            <div className="card-body">
              <div className="card-text">
                <p><strong><i className="fas fa-futbol"></i> Team</strong>: {team}</p>
                <p><strong><i className="fas fa-running"></i> Position</strong>: {position}</p>
                <p><strong><i className="fas fa-male"></i> Age</strong>: {age}</p>
                <p><strong><i className="fas fa-birthday-cake"></i> Birthday</strong>: {birthday}</p>
                <p><strong><i className="fas fa-flag"></i> Country</strong>: {country}</p>
              </div>
            </div>
          </div>

        </React.Fragment>
      )
    }
  }

export default PlayerInfo