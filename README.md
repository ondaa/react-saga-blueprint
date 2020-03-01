# <center>react-saga-blueprint</center>

<center>
This is boilerplate for react ( with Typescript )<br/>
react, redux-saga and typescript<br/>
redux, react-router, typesafe-actions with additional settings
</center>

### First. Clone my git repogitory
```
$> git clone https://github.com/ondaa/react-saga-blueprint.git
```

### Second. Install module
```
// move to project folder
$> cd react-saga-blueprint

// install module

// use npm
$> npm install 

// use yarn
$> yarn install
```

### Third. Start react
```
// use npm
$> npm run start

// use yarn
$> yarn start
```

## Checking tree nodes in src folder

- <b>components (blank)</b>
- <b>containers</b>
  - <i>HomeContainer.tsx (count dispatch example)</i>
- <b>pages</b>
  - <i>About.tsx (sub router switch example)</i>
  - <i>Home.tsx</i>
- <b>store</b>
  - <b>mobules</b>
    - <b>base</b> (example base action, state, saga action)
      - <i>index.ts (example state & action)</i>
      - <i>actions.ts (example action)</i>
      - <i>saga.ts (example saga action)</i>
    - <b>saga</b>
      - <i>baseSaga.ts ( base saga effect put, call, takeEvery)</i>
      - <i>index.ts (combine all saga)</i>
  - <i>configure.ts (createReducer)</i>
  - <i>index.ts (createStore)</i>
- <i>App.tsx (main router switch example)</i>
- <i>index.tsx (all context component apply)</i>

## Notes

- Use `npx create-react-app [project-name] --template typescript`
- You can run scripts for `eject`
- You can change all the code
- Only very simple settings and example

## Updated

- 2020.03.01 install and use react-helmet