## Assignment Details


Design Reference: [Figma Link](https://www.figma.com/design/JrfR4F7KowJCozSoSBNyLV/Frontend-Assignment---Public--Community-?node-id=2-442)

Task Goal: Implement a small part of a design system.

As part of the task, you need to create four components: button, input, number input, and slider, and then build a simple form using these components.
The components must be created using the react-aria-components UI library.
For styling, CSS Modules should be used (any modern CSS is allowed).
Components should not acceptclassName or styleas props.

### Button component:

a) Has two sizes (small and medium), two variants (contained and outlined), and two color themes (primary and secondary).

b) The button can contain text, text with an SVG icon, or only an icon.

c) The button can be in active state (hovered, focused, etc.) and disabled state.

### Input component
can be in focused and disabled states.

### NumberInput component: 
Has the same states as the Input component. The + and - buttons should use the Button component you created.

### Slider Component 
has only hovered state.

________________________

In the form, the values entered in the `NumberInput` should update the `slider` position and vice versa.
Pressing *Clear button* should clear the form. Pressing *Submit button* should output form values (you can print them in console, render inline or display inside window.alert).   


You can use any other additional libraries you need, but using React and Typescript is a must.
