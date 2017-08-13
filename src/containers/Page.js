/**
 * Created by dsptushkin on 12.08.17.
 */
import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import Sidebar from './Sidebar';
import HumanInfoForm from './HumanInfoForm';
import EventPanel from './EventPanel';

export const NEW_HUMAN_INDEX = -1;

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHuman: NEW_HUMAN_INDEX
    }
  }
  render() {
    const {selectHuman, onAdd, onSave, onDelete} = this;
    const { humans } = this.props;
    const {selectedHuman} = this.state;
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <Sidebar onAdd={onAdd} onSelect={selectHuman} models={{humans}} />
          </Col>
          <Col xs={6} md={4}><HumanInfoForm onSave={onSave} models={{humans}} selectedHuman={selectedHuman}/></Col>
          <Col xsHidden md={4}><EventPanel models={{humans}} selectedHuman={selectedHuman} onDelete={onDelete}/></Col>
        </Row>
      </Grid>
    );
  }
  onSave = (human) => {
    const { humans } = this.props;
    const {selectedHuman} = this.state;
    if(selectedHuman !== NEW_HUMAN_INDEX){
      humans.at(selectedHuman).set(human)
    } else {
      this.setState({selectedHuman: humans.length});
      humans.add(human);
    }
  };
  onAdd = () => {
    this.setState({selectedHuman: NEW_HUMAN_INDEX});
  };
  selectHuman = (index) => {
    this.setState({selectedHuman: index});
  };
  onDelete = () => {
    const {humans} = this.props;
    const {selectedHuman} = this.state;
    if(selectedHuman !== NEW_HUMAN_INDEX) {
      this.setState({selectedHuman: NEW_HUMAN_INDEX}, ()=>humans.remove(humans.at(selectedHuman)));
    }
  }
}

