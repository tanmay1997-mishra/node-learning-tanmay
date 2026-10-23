# Day 2: JS Essentials for Node

Practice of modern JavaScript (ES6+) using small "tasks" and "users" datasets, split into reusable modules.

Topics: `let`/`const`, destructuring, spread/rest, ES modules, array methods, error handling (sync + async).

## Structure

```
src/
├── basics.js                  # const vs let, nested destructuring, spread copy
├── data/tasks.js              # sample tasks
├── data/users.js              # sample users
├── utils/task.utils.js        # filter, sort, reduce, Set, rest params
├── utils/price.utils.js       # calculateSum (rest params)
├── utils/array.utils.js       # removeDuplicates
├── utils/user.utils.js        # findUserById, throws ValidationError / NotFoundError
├── utils/format.js            # formatTask (destructuring + ??)
├── utils/validation.js        # validateTask
├── errors/validation-error.js # bad input (will become 400)
├── errors/not-found-error.js  # missing data (will become 404)
├── services/task.service.js   # async lookup with fake delay
└── index.js                   # uses all of the above
tests/                         # node:test, no extra packages
```

## Run

```bash
npm start        # main demo
npm run basics   # const/let, destructuring, spread
npm run dev      # restart on file change
npm test
```
