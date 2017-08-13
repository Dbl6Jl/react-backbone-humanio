/**
 * Created by dsptushkin on 12.08.17.
 */
import React, {Component} from 'react';
import {Button, FormControl, FormGroup} from 'react-bootstrap';
import {NEW_HUMAN_INDEX} from './Page';
import {connectBackboneToReact} from 'connect-backbone-to-react';
import HumanCollection from '../classes/HumanCollection';

const initialState = {
  name: '',
  notes: ''
};
class HumanInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentWillReceiveProps(nextProps) {
    const {selectedHuman: newId, humans} = nextProps;
    const {selectedHuman: id} = this.props;
    if(id !== newId) {
      if(newId === NEW_HUMAN_INDEX) {
        this.setState(initialState);
      } else {
        this.setState(humans[newId]);
      }
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

const mapModelsToProps = (models) => ({humans: models.humans.toJSON()});

const options = {
  debounce: false,
  modelTypes: {
    humans: HumanCollection,
  },
};

export default connectBackboneToReact(mapModelsToProps, options)(HumanInfoForm);
