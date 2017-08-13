/**
 * Created by dsptushkin on 12.08.17.
 */
import React, {Component} from 'react';
import {Button, FormControl, FormGroup} from 'react-bootstrap';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    const {humans, onAdd} = this.props;
    const humansList = humans.map((el, i) => (
      <li key={el.attributes.name + i}>{el.attributes.name}</li>
    ));

    return (
      <div className="sidebar">
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Search.."
            onChange={this.handleChange}
          />
          <Button bsStyle="primary" onClick={onAdd}>new contact</Button>
        </FormGroup>
        <h3>total: {humans.length}</h3>
        <ul>
          {humansList}
        </ul>
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }
}
Sidebar.defaultProps = {
  humans: []
};