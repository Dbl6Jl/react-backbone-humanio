/**
 * Created by dsptushkin on 12.08.17.
 */
import React, {Component} from 'react';
import {Button, FormControl, FormGroup} from 'react-bootstrap';
import { connectBackboneToReact } from 'connect-backbone-to-react';
import HumanCollection from '../classes/HumanCollection';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    const {humans, onAdd} = this.props;
    const humansList = humans.map((el, i) => (
      <li key={el + i} onClick={this.handleSelectClick(i)}>{el.name}</li>
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
  };
  handleSelectClick = (index) => () => {
    this.props.onSelect(index);
  }
}
Sidebar.defaultProps = {
  humans: []
};


const mapModelsToProps = (models) => {
  const { humans } = models;
  return {
    humans: humans.toJSON(),
    addHuman(newHuman) {
      humans.add(newHuman)
    },
  };
};

const options = {
  debounce: false,
  modelTypes: {
    humans: HumanCollection,
  },
};
export default connectBackboneToReact(mapModelsToProps, options)(Sidebar)