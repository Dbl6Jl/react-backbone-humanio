/**
 * Created by dsptushkin on 12.08.17.
 */
import React, {Component} from 'react';
import {Button, Col, FormControl, FormGroup, Grid, HelpBlock, Row} from 'react-bootstrap';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div className="sidebar">
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Search.."
            onChange={this.handleChange}
          />
        </FormGroup>
      </div>
    );
  }
  handleChange = () => {

  }
}