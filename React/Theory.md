#Virtual DOM & Reconciliation: 
*React creates an in-memory lightweight copy of the real DOM. When state changes, a new Virtual DOM is built. React uses a diffing algorithm to compare it with the old one, updating only the modified nodes in the real DOM (a process called reconciliation)*
#JSX (JavaScript XML): 
*It is a syntax extension allowing you to write HTML-like code inside JavaScript. It is not executed directly by browsers; compilers like Babel transform it into React.createElement() function calls*