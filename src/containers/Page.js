/**
 * Created by dsptushkin on 12.08.17.
 */
import React, {Component} from 'react';
import {Button, Col, Grid, Row} from 'react-bootstrap';
import Sidebar from './Sidebar';

export default class Page extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}><Sidebar /></Col>
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
        </Row>
      </Grid>
    );
  }
}