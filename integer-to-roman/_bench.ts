import { baseline, run } from 'mitata';
import { intToRoman as f1 } from './index';
import { intToRoman as f2 } from './index.2';
import { intToRoman as f3 } from './index.3';

baseline('f1', () => f1(1994));
baseline('f2', () => f2(1994));
baseline('f3', () => f3(1994));

await run();