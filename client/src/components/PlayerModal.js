import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addPlayer } from '../actions/playerActions'

class PlayerModal extends Component {
  state = {
    modal: false,
    name: '',
    team: '',
    shirt: '',
    position: '',
    age: '',
    birthday: '',
    country: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const newPlayer = {
      name: this.state.name,
      team: this.state.team,
      shirt: this.state.shirt,
      position: this.state.position,
      age: this.state.age,
      birthday: this.state.birthday,
      country: this.state.country
    }

    // Add player via addPlayer action
    this.props.addPlayer(newPlayer)

    // Close modal
    this.toggle()
  }

  render() {
    return (
      <div>
        <Button
          color="warning"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >Add Player</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Add To Player List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Full name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First and last name..."
                  onChange={this.onChange}
                />
                <Label for="team">Team</Label>
                <Input
                  type="text"
                  name="team"
                  id="team"
                  placeholder="Playing for..."
                  onChange={this.onChange}
                />
                <Label for="shirt">Shirt Number</Label>
                <Input
                  type="text"
                  name="shirt"
                  id="shirt"
                  placeholder="Number on shirt..."
                  onChange={this.onChange}
                />
                <Label for="position">Position</Label>
                <Input
                  type="select"
                  name="position"
                  id="position"
                  placeholder="Position in team..."
                  onChange={this.onChange}
                >
                  <option>Goalkeeper</option>
                  <option>Defender</option>
                  <option>Midfielder</option>
                  <option>Attacker</option>
                  <option>Coach</option>
                </Input>
                <Label for="age">Age</Label>
                <Input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Enter age of player..."
                  onChange={this.onChange}
                />
                <Label for="birthday">Birthday</Label>
                <Input
                  type="text"
                  name="birthday"
                  id="birthday"
                  placeholder="Enter date of birth..."
                  onChange={this.onChange}
                />
                <Label for="country">Country</Label>
                <Input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Citizen of..."
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{ marginTop: '2rem' }}
                  block
                >Add Player</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  player: state.player
})

export default connect(mapStateToProps, { addPlayer })(PlayerModal)