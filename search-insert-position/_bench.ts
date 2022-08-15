import { baseline, run } from 'mitata';
import { searchInsert as f1 } from './index';
import { searchInsert as f2 } from './index.2';

baseline('f1', () => f1([3,5,7,9,10], 8));
baseline('f2', () => f2([3,5,7,9,10], 8));

await run();