import { baseline, run } from 'mitata';
import { romanToInt as f1 } from './index';
import { romanToInt as f2 } from './index.2';
import { romanToInt as f3 } from './index.3';

baseline('f1', () => f1('MCMXCIV'));
baseline('f2', () => f2('MCMXCIV'));
baseline('f3', () => f3('MCMXCIV'));

await run();