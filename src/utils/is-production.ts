import { getStage } from '../services/settings';

const isProduction = (): boolean => getStage() === 'production';

export default isProduction;
