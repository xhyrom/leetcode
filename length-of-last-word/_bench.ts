import { baseline, run } from 'mitata';
import { lengthOfLastWord as f1 } from './index';
import { lengthOfLastWord as f2 } from './index.2';

baseline('f1', () => f1('hello                       wwwwwwwwwww   wwwwwwwwwwwwww oooooooooooo ooooo o  oooor ld       '));
baseline('f2', () => f2('hello                       wwwwwwwwwww   wwwwwwwwwwwwww oooooooooooo ooooo o  oooor ld       '));

await run();