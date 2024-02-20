let name="farooq haider"
let age="23"
let address="pakistan"

// this is name export and we can have multiple name exports in js file 
// to import them in another file i will use the same variable or function name
export {age};
export {address};

// this is default export and we can have only one default export 
// to import them i can name it anything like
// import moduleName from 'module1.mjs'
export default name;
