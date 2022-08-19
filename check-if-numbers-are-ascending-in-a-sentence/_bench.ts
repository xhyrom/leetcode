import { baseline, run } from 'mitata';
import { areNumbersAscending as f1 } from './index';
import { areNumbersAscending as f2 } from './index.2';

baseline('f1', () => f1("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"));
baseline('f2', () => f2("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"));

await run();