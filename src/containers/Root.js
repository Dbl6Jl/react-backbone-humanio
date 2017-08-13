import React from 'react'
import Page from './Page';
import HumanCollection from '../classes/HumanCollection';
const humans = new HumanCollection();
const Root = () => (
  <div>Hello react and backbone!
    <Page humans={humans}/>
  </div>
);


export default Root
