/**
 * Created by dsptushkin on 12.08.17.
 */
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
export default class EventPanel extends Component {

  render() {
    const {events} = this.props;
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