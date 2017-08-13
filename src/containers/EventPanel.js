/**
 * Created by dsptushkin on 12.08.17.
 */
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connectBackboneToReact} from 'connect-backbone-to-react';
import HumanCollection from '../classes/HumanCollection';
import {DRAFT_OBJECT_INDEX} from './Page';

class EventPanel extends Component {

  render() {
    const {humans, selectedHuman, onDelete} = this.props;
    const events = selectedHuman !== DRAFT_OBJECT_INDEX ? humans[selectedHuman].events : [];
    const list = events.map((el, i) => (
      <li key={el.text + el.i}>
        {el.date}
        <br/>
        {el.text}
      </li>
    ));
    return (
      <div>
        <Button bsStyle="success" onClick={this.openModal(DRAFT_OBJECT_INDEX)}>add event</Button>
        <ul>
          {list}
        </ul>
        <Button bsStyle="warning" onClick={onDelete}>delete human</Button>
      </div>
    );
  }
  openModal = (eventIndex) => () => this.props.openModal();
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
