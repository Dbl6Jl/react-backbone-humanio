/**
 * Created by dsptushkin on 13.08.17.
 */
import {Collection} from 'backbone';
import Human from './Human';

const HumanCollection = Collection.extend({
  model: Human
});

export default HumanCollection;