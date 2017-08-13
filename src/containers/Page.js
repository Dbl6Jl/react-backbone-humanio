/**
 * Created by dsptushkin on 12.08.17.
 */
import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import Sidebar from './Sidebar';
import HumanInfoForm from './HumanInfoForm';
import EventPanel from './EventPanel';

export default class Page extends Component {
  render() {
    console.log('page render');
    console.log(this.props);
    const { humans } = this.props;
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}><Sidebar onAdd={this.onAdd} onSelect={this.selectHuman} humans={humans.models}/></Col>
          <Col xs={6} md={4}><HumanInfoForm onSave={this.onSave}/></Col>
          <Col xsHidden md={4}><EventPanel /></Col>
        </Row>
      </Grid>
    );
  }
  onSave = (human) => {
    const { humans } = this.props;
    humans.add(human);
    console.log(human)
  };
  onAdd = () => {
    console.log('add clicked');
  };
  selectHuman = (human) => {
    console.log('human selected: ' + human.toJSON());
  }
}