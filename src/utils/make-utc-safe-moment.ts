import { Moment } from 'moment';

// This will make moment timezone to UTC without chaning the time
const makeUtcSafeMoment = (m: Moment): Moment => m.add(m.utcOffset(), 'minutes').utcOffset(0);

export default makeUtcSafeMoment;
