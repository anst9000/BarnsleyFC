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
import { editPlayer } from '../actions/playerActions'

class EditPlayerModal extends Component {
  constructor(props) {
    super(props);
    const { _id, name, team, shirt, position, age, birthday, country } = this.props.info
    this.state = {
      modal: false,
      _id,
      name,
      team,
      shirt,
      position,
      age,
      birthday,
      country
    };
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
      _id: this.state._id,
      name: this.state.name,
      team: this.state.team,
      shirt: this.state.shirt,
      position: this.state.position,
      age: this.state.age,
      birthday: this.state.birthday,
      country: this.state.country
    }

    // Add player via addPlayer action
    this.props.editPlayer(newPlayer)

    // Close modal
    this.toggle()
  }

  render() {
    const { _id, name, team, shirt, position, age, birthday, country } = this.props.info
    return (
      <div>
        <Button
          className="edit-btn btn"
          color="success"
          size="sm"
          onClick={this.toggle}
        ><i className="fas fa-edit"></i></Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Edit following player {_id}</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Full name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={name}
                  onChange={this.onChange}
                />
                <Label for="team">Team</Label>
                <Input
                  type="text"
                  name="team"
                  id="team"
                  placeholder={team}
                  onChange={this.onChange}
                />
                <Label for="shirt">Shirt Number</Label>
                <Input
                  type="text"
                  name="shirt"
                  id="shirt"
                  placeholder={shirt}
                  onChange={this.onChange}
                />
                <Label for="position">Position</Label>
                <Input
                  type="select"
                  name="position"
                  id="position"
                  placeholder={position}
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
                  placeholder={age}
                  onChange={this.onChange}
                />
                <Label for="birthday">Birthday</Label>
                <Input
                  type="text"
                  name="birthday"
                  id="birthday"
                  placeholder={birthday}
                  onChange={this.onChange}
                />
                <Label for="country">Country</Label>
                <Input
                  type="text"
                  name="country"
                  id="country"
                  placeholder={country}
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{ marginTop: '2rem' }}
                  block
                >Edit Player</Button>
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

export default connect(mapStateToProps, { editPlayer })(EditPlayerModal)