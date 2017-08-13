/**
 * Created by dsptushkin on 12.08.17.
 */
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connectBackboneToReact} from 'connect-backbone-to-react';
import HumanCollection from '../classes/HumanCollection';
import {NEW_HUMAN_INDEX} from './Page';

class EventPanel extends Component {

  render() {
    const {humans, selectedHuman} = this.props;
    const events = selectedHuman !== NEW_HUMAN_INDEX ? humans[selectedHuman].events : [];
    const list = events.map((el, i) => (
      <li key={el.text + el.i}>
        {el.date}
        <br/>
        {el.text}
      </li>
    ));
    return (
      <div>
        <Button bsStyle="success">add event</Button>
        <ul>
          {list}
        </ul>
        <Button bsStyle="warning">delete human</Button>
      </div>
    );
  }
}
EventPanel.defaultProps = {
  events: []
};

const mapModelsToProps = (models) => {
  const { humans } = models;
  return {
    humans: humans.toJSON(),
  };
};

const options = {
  debounce: false,
  modelTypes: {
    humans: HumanCollection,
  },
};

export default connectBackboneToReact(mapModelsToProps, options)(EventPanel);
