/**
 * Created by dsptushkin on 12.08.17.
 */
import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import Sidebar from './Sidebar';
import HumanInfoForm from './HumanInfoForm';
import EventPanel from './EventPanel';
import EventModal from './EventModal';

export const DRAFT_OBJECT_INDEX = -1;

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHuman: DRAFT_OBJECT_INDEX,
      selectedEvent: DRAFT_OBJECT_INDEX,
      showEventModal: false
    }
  }

  render() {
    const {selectHuman, onAdd, onSave, onDelete, onCloseModal, onEventSave, onOpenModal} = this;
    const {humans} = this.props;
    const {selectedHuman, showEventModal} = this.state;
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <Sidebar onAdd={onAdd} onSelect={selectHuman} models={{humans}}/>
          </Col>
          <Col xs={6} md={4}><HumanInfoForm onSave={onSave} models={{humans}} selectedHuman={selectedHuman}/></Col>
          <Col xsHidden md={4}>
            <EventPanel models={{humans}} selectedHuman={selectedHuman} onDelete={onDelete} openModal={onOpenModal}/>
          </Col>
        </Row>
        <EventModal show={showEventModal} onSave={onEventSave} onClose={onCloseModal}/>
      </Grid>
    );
  }

  onSave = (human) => {
    const {humans} = this.props;
    const {selectedHuman} = this.state;
    if (selectedHuman !== DRAFT_OBJECT_INDEX) {
      humans.at(selectedHuman).set(human)
    } else {
      this.setState({selectedHuman: humans.length});
      humans.add(human);
    }
  };
  onAdd = () => {
    this.setState({selectedHuman: DRAFT_OBJECT_INDEX});
  };
  selectHuman = (index) => {
    this.setState({selectedHuman: index});
  };
  onDelete = () => {
    const {humans} = this.props;
    const {selectedHuman} = this.state;
    if (selectedHuman !== DRAFT_OBJECT_INDEX) {
      this.setState({selectedHuman: DRAFT_OBJECT_INDEX}, () => humans.remove(humans.at(selectedHuman)));
    }
  };
  onCloseModal = () => this.setState({showEventModal: false});
  onOpenModal = () => this.setState({showEventModal: true});
  onEventSave = (event) => {
    const {humans} = this.props;
    const {selectedHuman, selectedEvent} = this.state;
    humans.at(selectedHuman).get('events').push(event);
    this.setState({showEventModal: false});
  }
}

