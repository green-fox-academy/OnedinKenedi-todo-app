import minimist from "minimist";
import fs from 'fs';

const args = minimist(process.argv);

// manual

if (Object.keys(args).length < 2) {
    const manual = fs.readFileSync('manual.txt', 'utf-8');
    console.log(manual);
  };

  // listing tasks

if (args.l) {
    const content = fs.readFileSync('tasks.txt', 'utf-8');
    const todos = content.split('\n');
    todos.forEach((todo, i) => {
        if (todo[0] === '/') {
            todo = todo.slice(1);
        }
        console.log(`${i + 1}. ${todo}`);
    });
}