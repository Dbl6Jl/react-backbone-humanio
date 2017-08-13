/**
 * Created by dsptushkin on 14.08.17.
 */
import React, {Component} from 'react';
import {Button, FormControl, FormGroup, Modal} from 'react-bootstrap';
export default class EventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '', date: ''
    }
  }
  render() {
    const {show, onClose} = this.props;
    const {onSave} = this;
    const {date, text} = this.state;
    return (
      <div className="static-modal">
        <Modal show={show} onHide={onClose}>
          <Modal.Header>
            <Modal.Title>Event</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                value={date}
                placeholder="Date"
                onChange={this.handleChange('date')}
              />
              <FormControl
                type="text"
                value={text}
                placeholder="Text"
                onChange={this.handleChange('text')}
              />
            </FormGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={onClose}>Close</Button>
            <Button bsStyle="primary" onClick={onSave}>Save changes</Button>
          </Modal.Footer>

        </Modal>
      </div>
    )
  }
  handleChange = (field) => (e) => this.setState({[field]: e.target.value});
  onSave = () => this.props.onSave(this.state);
}