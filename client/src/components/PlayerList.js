import React, { Component } from 'react'
import { Container, Button, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import EditPlayerModal from './EditPlayerModal'
import { getPlayers, deletePlayer, editPlayer } from '../actions/playerActions'
import PropTypes from 'prop-types'

class PlayerList extends Component {

  componentDidMount() {
    this.props.getPlayers()
  }

  onDeleteClick = id => {
    this.props.deletePlayer(id)
  }

  render() {
    const { players } = this.props.player

    return (
      <Container>
        <Row>
          {players.map((player) => (
              <div key={player._id} className="col-md-6">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <Link to={{
                      pathname: `/${player._id}`,
                      state: {
                        player: {
                          _id: player._id,
                          name: player.name,
                          team: player.team,
                          shirt: player.shirt,
                          position: player.position,
                          age: player.age,
                          birthday: player.birthday,
                          country: player.country
                          }
                      }
                    }}
                      className="info-btn btn btn-primary"
                      size="sm"
                    >
                      {player.name}
                    </Link>
                    <EditPlayerModal info={player} />
                    <Button
                      className="remove-btn btn"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, player._id)}
                    >
                    <i className="fas fa-trash-alt"></i>
                    </Button>

                  </div>
                </div>
              </div>
          ))}
        </Row>
      </Container>
    )
  }
}

PlayerList.propTypes = {
  getPlayers: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  player: state.player
})

export default connect(mapStateToProps, { getPlayers, deletePlayer, editPlayer })(PlayerList)