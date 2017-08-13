/**
 * Created by dsptushkin on 12.08.17.
 */
import {Model} from 'backbone';

const Human = Model.extend({
  defaults: function() {
    const date = new Date().toLocaleDateString();
    return {
      name: '',
      notes: '',
      events: [{text: 'created', date}, {text: 'changed', date}]
    };
  },
  changeEvent: function(newEvent, index) {
    this.attributes.events = this.attributes.events.map((el, i) => i === index ? newEvent : el);
  }
});
export default Human;