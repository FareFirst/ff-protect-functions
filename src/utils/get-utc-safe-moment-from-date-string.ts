import moment, { Moment } from 'moment';
import makeUTCSafeMoment from './make-utc-safe-moment';

module.exports = (dateStr: string): Moment => makeUTCSafeMoment(moment(dateStr));
