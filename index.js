import minimist from "minimist";
import fs from 'fs';

const args = minimist(process.argv);

// manual

if (Object.keys(args).length < 2) {
    const manual = fs.readFileSync('manual.txt', 'utf-8');
    console.log(manual);
  };

  // listing tasks -l

if (args.l) {
    const content = fs.readFileSync('tasks.txt', 'utf-8');
    if (content.length === 0) {
        console.log('Nincs mára tennivalód! :)');
    }
    else {   
        const todos = content.split('\n');
        todos.forEach((todo, i) => {
            if (todo[0] === '/') {
            todo = todo.slice(1);
            }
        console.log(`${i + 1} - ${todo}`);
    });
    }
};

function addTask(todo) {
	const content = fs.readFileSync('tasks.txt', 'utf-8');
	if (content.length === 0) {
		fs.appendFileSync('tasks.txt', todo);
	} else {
		fs.appendFileSync('tasks.txt', '\n' + todo);
	}
};

if (args.a) {
    console.log('Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!');
} else if (typeof args.a === 'string') {
    addTask(args.a);
};;