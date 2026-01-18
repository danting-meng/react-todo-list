/*
1. import
   - same folder: ./
   - parent folder: ../
   - Without them it may be treated as an npm package

2. export
   - export default -> when import function in this file, don't need {}
                       e.g. import App from "./App.jsx"
   - export const/export function -> when import functions in this file, need {}
                                     e.g. import { PI, add } from "./utils.js"

3. <form className="" onSubmit={handler}></form>
   - turns “inputs + submit” into a standard interaction
   - submit with Enter in the input field
   - inside form: Inputs, Labels, Submit button
   - className: assigns a “class” to an element so CSS can target it and style it
   - onSubmit: listens for the form submission action
               when user submits, react calls handler to run submit logic

4. e
   - event object
   - e.target.value: current input text

5. .preventDefault()
   - prevents the browser’s default form submission behavior

6. <div></div>
   - generic container used for grouping/layout/wrapping content. 
   - no semantic meaning; mainly for structure and styling.

7. <label htmlFor=""></label>
   - describes an input
   - explicit - htmlFor: link to the input, which input does this label describe/control
     implicit - input inside the label

8. <input type="" id="" value={} checked={true}/{false} onChange={}/>
   - input: input field
   - type: controls the kind of input: text, password, email, number, checkbox, etc
   - explicit - id: links with <label htmlFor>
   - type= "text"/"checkbox"
   - value: the current text shown in the input
   - checked: the checked state (checked or unchecked)
   - onChange: 
     a. for text inputs it typically fires on each input change
        onChange={(e) => setState(e.target.value)}
     b. for checkbox inputs it typically fires when the user toggles the checkbox
        onChange={(e) => setState(item.id, e.target.checked)

9. <button onClick={handleClick}></button>
   - default type="submit"
   - onClick: React calls that function when the button is clicked

10. return 
   - one line: return ...
   - multiple lines: return (...)
   - return one top-level value / one top-level element

11. fragment <>...</>
   - just grouping (don't need a box for styling)

12. <ul></ul> 
    - unordered list, used to contain a group of list items
    - its children are typically multiple <li> elements
    - by default it shows bullet points

13. <li></li>
    - list item, inside <ul> or <ol> (not used alone)

14. useState
    - a React Hook that lets a component “remember data” (state) 
    - re-render when that data changes
    - return an array with two items: a. current state value b. a function to update that state
    - const [value, setValue] = useState(initialValue)
    - useState(() => initialValue) -> runs once on the first render (initialization)

15. destructuring: const [a,b] = someArray

16. spread: ...
    - [...oldArray, newItem]: creates a new array by copies all old items, then appends a new one.
    - {...oldObj, key: newValue }: update/add property
    - ...oldArray: spreads each old item into the new array

17. crypto.randomUUID()
    - generates a random, practically unique ID string

18. functions
    - named function
      function functionName(arg1, arg2, ...) {
        return expression; }
    - anonymous function
      function (arg1,arg2, ...) {
        return expression; }
    - arrow function
      const functionName = (arg1, arg2, ...) => expression
      OR
      const functionName = (arg1, arg2, ...) => {return expression}
      OR 
      (arg1, arg2, ...) => expression
  
19. newArray = oldArray.map((item) => newThing)
    - it transforms each element into something new and returns a new array.
    - Always put key on the top-level element directly returned by the .map()
    - key: an ID React uses when rendering lists

20. strict equality: === 
    - same value & same type -> return true
    strict not equal: !==
    - different value or different type -> return true

21. newArray = oldArray.filter((item) => condition)
    - .filter selects items from an array and returns a new array
    - condition True -> keep this item
      condition False -> remove this item

22. Logical AND: &&
    - If the left side is true, it returns the right side
    - If the left side is false, it returns false (React renders nothing for false)

23. .length
    - the number of items in an array

24. {...}
    - insert the result of a JavaScritp expression inside JSX
  
25. component
    - the function returns UI written (in JSX syntax)
    - e.g. function App( ) {...}
 
26 props
   - the component function’s argument, the “argument object” a component receives from its parent
   - parent passes props in: <ChildComponent propName={parentFunction}/>
     child receives it: export function ChildComponent({propName}){}
     child calls it: propName(...)
   - <Component {...obj} /> === <Component a={obj.a} b={obj.b} />

27. useEffect
    - runs side effects after rendering.
    - useEffect(function, [x]) -> run function when x changes

28. localStorage.getItem("key")
    - a method call from the browser Web Storage API
    - returns a string or null

29. x == null
    - x is null(intentionally empty) or undefined(not assigned / missing)

30. JSON.parse
    - built-in method on the global JSON object
    - converts a JSON string into a JS value/object
    - throw error if the string isn’t valid JSON.

31. JSON.stringify
    - built-in method on the global JSON object
    - converts a JS value/object into a JSON string for storage/transfer

32. localStorage.setItem(key, value)
    - stores data in the browser’s localStorage persistently
    - Data survives refresh/reopen until cleared
    - key: string
    - value: must be a string (often via JSON.stringify
    */
