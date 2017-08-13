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
  }
});
export default Human;