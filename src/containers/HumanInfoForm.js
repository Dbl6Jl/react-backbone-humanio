/**
 * Created by dsptushkin on 12.08.17.
 */
import React, {Component} from 'react';
import {Button, FormControl, FormGroup} from 'react-bootstrap';

export default class HumanInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      notes: ''
    }
  }

  render() {
    return (
      <div className="main-info">
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleChange('name')}
          />
          <Button bsStyle="primary" onClick={this.handleSave}>save</Button>
          <FormControl componentClass="textarea" placeholder="notes"
                       value={this.state.notes}
                       onChange={this.handleChange('notes')}
          />
        </FormGroup>
      </div>
    );
  }
  handleChange = (field) => (e) => this.setState({[field]: e.target.value});
  handleSave = () => this.props.onSave(this.state);
}