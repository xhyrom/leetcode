import { baseline, run } from 'mitata';
import { twoSum as f1 } from './index';
import { twoSum as f2 } from './index.2';
import { twoSum as f3 } from './index.3';

baseline('f1', () => f1([2,7,11,15], 9));
baseline('f2', () => f2([2,7,11,15], 9));
baseline('f3', () => f3([2,7,11,15], 9));

await run();