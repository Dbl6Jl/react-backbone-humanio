/**
 * Created by dsptushkin on 12.08.17.
 */
import {Model} from 'backbone';

const Human = Model.extend({
  defaults: function() {
    return {
      name: '',
      notes: '',
      events: []
    };
  }
});
export default Human;