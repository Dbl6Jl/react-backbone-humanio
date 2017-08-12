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
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}><Sidebar /></Col>
          <Col xs={6} md={4}><HumanInfoForm /></Col>
          <Col xsHidden md={4}><EventPanel /></Col>
        </Row>
      </Grid>
    );
  }
}