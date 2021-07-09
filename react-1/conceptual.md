### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    
        React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

- What is Babel?
    
        Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language.

- What is JSX?

        JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code. ... Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.

- How is a Component created in React?

        The simplest way to define a component is to write a JavaScript function. It accepts a single “props” object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.


- What are some difference between state and props?

        The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.

- What does "downward data flow" refer to in React?

        Downward data flow is the idea that parent components pass data down to their children via props. In order to make data go the other way, we have to pass a. function down from the parent that the child can then call with some information.

- What is a controlled component?

        A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange . A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component.

- What is an uncontrolled component?

        A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it.

- What is the purpose of the `key` prop when rendering a list of components?

        React's key prop gives you the ability to control component instances. Each time React renders your components, it's calling your functions to retrieve the new React elements that it uses to update the DOM. If you return the same element types, it keeps those components/DOM nodes around, even if all* the props changed.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

        The 2 things that a key should be is stable and unique. An index would be unique but it would not be stable since the array can mutate and indices can shift around.

- Describe useEffect.  What use cases is it used for in React components?

        Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don't need a special API to read it — it's already in the function scope. It is mainly used for clearing intervals and counters.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

        The useRef Hook is a function that returns a mutable ref object whose . current property is initialized with the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component.React's useRef hook, short for reference, allows us to persist data across renders without causing the component to rerender. 

- When would you use a ref? When wouldn't you use one?

        A typical use case for this hook would be to store a DOM element, which we can use to access it programmatically. You can also use it to keep a reference to the previous state of a component. It can be used to manage focus, text selection, trigger imperative animations or integrating third-party libraries.  Developers should avoid using useRef if they could use useState instead.

- What is a custom hook in React? When would you want to write one?

        Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Building your own Hooks lets you extract component logic into reusable functions. 
        Always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That's what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.
