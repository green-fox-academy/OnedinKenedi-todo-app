import minimist from "minimist";
import fs from 'fs';

const args = minimist(process.argv);

console.log(args)

// manual

if (
    Object.keys(args).length < 2 ||
    !Object.keys(args).every((arg) => ['_', 'l', 'a', 'r', 'c'].includes(arg))
  ) {
    let manual = fs.readFileSync('manual.txt', 'utf-8');
    console.log(manual);
  }