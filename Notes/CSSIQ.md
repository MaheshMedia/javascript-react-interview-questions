```js

## CSS Interview Questions

1) Do you know about Pseudo classes in CSS and Pseudo elements?
2) What is css box- modle?
3) What is the difference b/w static, relative, absolute, fixed and stcky? or What is different position in css?
4) Which one will be the high priprity? inline, internal and external?
5) Can you explain about grid structure?
6) In Material UI what does makeStyle Function Do?
7) Can we use multiple Class name in same object for Materia UI? in grid Ui can we use ?
8) What is difference between css and css3?
9) What are the selector in css?
10) What is media query in css?
11) What is bom in css?
12) What is difference between PX,unit,em,rem in css?
13) How to make website responsive?
14) What are breakpoint for viewport responsive device?
15) Why we use box-sizing in css? How is border-box different from content-box?
16) What is transition used for with example?
17) What is transform used for with example?
18) What is translate used for with example?
19) How to add box-shadow in css with example?
20) What is a z-index, how does it functions?







**Program Questions**

1) Can you make a `div` at vertically and horizontally at center?








Qns) Do you know about Pseudo classes in CSS and Pseudo elements?

    -Pseudo classes: A Keyword added to a selector that specifies a "special state" of the selected elements.
        :hover
        :active
        :checked
        :nth-of-type

    -Pseudo elements: A Keyword added to a selector that lets you style a "specific part" of the selected elements.
        ::first-letter
        ::first-line
        ::selection

Qns) What is css box- modle?

    - A rectangle box is wrapped around every HTML element. The box model is used to determine the height and width of the rectangular box. The CSS Box consists of Width and height (or in the absence of that, default values and the content inside), padding, borders, margin.

    Content: Actual Content of the box where the text or image is placed.
    Padding: Area surrounding the content (Space between the border and content).
    Border: Area surrounding the padding.
    Margin: Area surrounding the border.

Qns) What is the difference b/w static, relative, absolute, fixed and stcky? or What is different position in css?

    **static:** default position(The top, right, bottom, left, and z-index properties have no effect )

    **relative:** element is relative to itself. (The top, right, bottom, left, and z-index will work. it will
     create space if sibling element is moved )

    **absolute:** positioned relative to its closest positioned ancestor. (removed from the flow. it will not create
     space if sibling element is moved )

    **fixed:** positioned relative to browser. (removed from flow)

    **sticky:** positioned based on user's scroll position.

Qns) Which one will be the high priprity? inline, internal and external?

    - it will take tthe inline and if we have mentioned `important` in external. it will consider that.

Qns) can you explain about grid structure?

         - In web development, a grid structure refers to a layout system that arranges content into a grid-based structure, allowing for the organization and alignment of elements on a webpage. Grid systems provide a framework for creating responsive and consistent designs that adapt to different screen sizes and devices. They are essential for creating visually appealing and well-organized web layouts.

    CSS Grid and Flexbox are two popular grid systems used in modern web development:

    1. **CSS Grid:** CSS Grid Layout is a two-dimensional grid-based layout system that allows developers to design complex web layouts with rows and columns. It provides precise control over the placement and alignment of elements within the grid, making it suitable for creating both simple and complex page layouts. CSS Grid is well-suited for creating overall page structures and complex designs that require multiple rows and columns.

    2. **Flexbox:** CSS Flexbox is a one-dimensional layout model that is used to align and distribute items within a container along a single row or column. Flexbox is particularly useful for creating flexible and responsive layouts, such as navigation menus, lists, and card-based designs. It is ideal for creating dynamic and adaptive layouts that adjust to different screen sizes and orientations.

    Both CSS Grid and Flexbox offer powerful tools for creating responsive and visually appealing web layouts. Web developers often use a combination of these grid systems to achieve the desired layout and design for their web pages, providing a seamless and user-friendly experience across various devices and screen sizes.

Qns) in Material UI what does makeStyle Function do?

    - In Material-UI, the `makeStyles` function is a hook that allows you to create custom CSS styles for components. It is part of the styling solution provided by Material-UI, which enables you to customize the appearance of components in a more granular and flexible manner. Here's what the `makeStyles` function does and how it is used:

    1. **Custom Styling:**

    - The `makeStyles` function lets you define custom styles for Material-UI components, enabling you to override the default styles provided by Material-UI.
    - It allows you to create a style hook that can be applied to a specific component or set of components.

    2. **Hook-Based Approach:**

    - `makeStyles` is implemented as a hook, allowing you to leverage the power of React hooks to manage component styles.
    - It takes in a callback function where you can define the styles using the Material-UI styling solution.

    Here's an example of how you can use the `makeStyles` function in Material-UI:

    import React from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import Button from '@material-ui/core/Button';

    const useStyles = makeStyles((theme) => ({
    root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    },
    }));

    const CustomButton = () => {
    const classes = useStyles();

    return <Button className={classes.root}>Customized Button</Button>;
    };

    export default CustomButton;

    In this example, the `makeStyles` function is used to define custom styles for the `CustomButton` component. The defined styles are applied to the `root` class of the `Button` component, creating a customized button with the specified appearance.

    Using the `makeStyles` function, you can easily customize and style Material-UI components to match the design requirements of your application.

Qns) can we use multiple class name in same object for Materia UI? in grid Ui can we use ?

    - Yes, you can use multiple class names for Material-UI components, including the Grid component. Material-UI provides a className prop that allows you to add additional CSS classes to a component along with the Material-UI styles.

Qns) What is difference between css and css3?

    ### CSS:
    1. **Basic Styling**: CSS (versions 1 and 2) is the fundamental language for styling web pages.
    2. **Selectors**: CSS provides basic selectors such as element selectors, class selectors, ID selectors, and descendant selectors.
    3. **Properties**: CSS allows you to control properties such as color, font size, margins, padding, background colors, and more.
    4. **Browser Support**: CSS is widely supported by all modern web browsers and is the foundation of web design.

    ### CSS3:
    1. **Advanced Selectors**: CSS3 introduces more advanced selectors such as attribute selectors, pseudo-classes (:hover, :active, :focus), and pseudo-elements (::before, ::after).

    2. **New Properties**: CSS3 adds new properties that weren't available in earlier versions, including:
    - `border-radius`: for creating rounded corners on elements.
    - `box-shadow`: for adding shadows to elements.
    - `text-shadow`: for adding shadows to text.
    - `opacity`: for controlling the transparency of elements.
    - `transform`: for applying 2D and 3D transformations to elements.
    - `transition`: for creating smooth transitions between property changes.
    - `animation`: for creating complex animations.

    - CSS is the basic language for styling web pages, while CSS3 is the latest version with added features and enhancements.
    - CSS3 introduces advanced selectors, new properties, media queries for responsive design, Flexbox, Grid Layout, animations, transitions, and more.
    - CSS3 improves the capabilities of CSS and provides developers with powerful tools for creating modern and responsive web designs.

Qns) What are the selector in css?

   - Selectors in CSS are patterns used to select and style elements in an HTML document. They define the elements to which a set of CSS rules should be applied. CSS offers a wide range of selectors to target elements based on their type, attributes, relationships with other elements, and more. Here are some commonly used CSS selectors:

    ### 1. Type Selector:
    - Selects elements based on their tag name.

    p {
        color: blue;
    }


    ### 2. Class Selector:
    - Selects elements based on their class attribute.

    .btn {
        background-color: green;
    }


    ### 3. ID Selector:
    - Selects a single element based on its ID attribute.

    #header {
        font-size: 24px;
    }


    ### 4. Universal Selector:
    - Selects all elements on the page.

    * {
        margin: 0;
        padding: 0;
    }


    ### 5. Attribute Selector:
    - Selects elements based on the presence of a specific attribute or its value.

    input[type="text"] {
        border: 1px solid #ccc;
    }


    ### 6. Descendant Selector:
    - Selects elements that are descendants of another element.

    .container li {
        list-style-type: circle;
    }


    ### 7. Child Selector:
    - Selects elements that are direct children of another element.

    .menu > li {
        display: inline-block;
    }


    ### 8. Adjacent Sibling Selector:
    - Selects an element that is directly preceded by a specific sibling element.

    h2 + p {
        font-style: italic;
    }


    ### 9. Pseudo-classes:
    - Selects elements based on their state or position.

    a:hover {
        color: red;
    }

    input:checked {
        background-color: #f0f0f0;
    }


    ### 10. Pseudo-elements:
    - Selects specific parts of an element.

    p::first-line {
        font-weight: bold;
    }

    li::before {
        content: "•";
        margin-right: 5px;
    }


Qns) What is media query in css?

   - A media query in CSS is a technique that allows you to apply different styles to an HTML document based on the characteristics of the device or media where the document is being displayed. This allows you to create responsive designs that adapt to different screen sizes, resolutions, device types, and orientations.

    ### Syntax of Media Query:
    A basic media query consists of an `@media` rule followed by a media type and one or more media feature expressions:


    @media media_type and (media_feature) {
    /* CSS rules to apply for the specified media type and feature */
    }

    /* Default styles for all screen sizes */
    body {
    font-size: 16px;
    }

    /* Media query for screens smaller than 600px wide */
    @media screen and (max-width: 600px) {
    body {
        font-size: 14px;
    }
    .container {
        width: 90%;
    }
    }

    /* Media query for screens between 601px and 900px wide */
    @media screen and (min-width: 601px) and (max-width: 900px) {
    body {
        font-size: 16px;
    }
    .container {
        width: 80%;
    }
    }

    /* Media query for screens larger than 900px wide */
    @media screen and (min-width: 901px) {
    body {
        font-size: 18px;
    }
    .container {
        width: 70%;
    }
    }

Qns) What is bom in css?

   - In CSS, "BOM" typically stands for "Browser Object Model," which is different from the "Document Object Model" (DOM). The Browser Object Model (BOM) is a set of objects provided by the browser that allows JavaScript to interact with browser windows. It includes objects such as window, navigator, screen, history, and location.

Qns) What is difference between PX,unit,em,rem in css?

    Absolute Units:-
    PX: Pixels (px) are considered absolute units, the PX unit is fixed and does not change based on any other element.

    Relative Units:- better suited to responsive design
    EM: Relative to the parent element

    REM: Relative to the root element (HTML tag)

    %: Relative to the parent element

    VW: Relative to the viewport’s width

    VH: Relative to the viewport’s height

Qns) How to make website responsive?

    1. Use Responsive Design Frameworks:
Utilize front-end frameworks like Bootstrap, Foundation, or Tailwind CSS, which provide pre-built components and responsive grid systems.

    2. Use Media Queries:
Media queries allow you to apply specific CSS rules based on the device's characteristics, such as screen width, height, orientation, or resolution.

    3. Use Relative Units:
Instead of fixed units (px), use relative units (em, rem, %) for font sizes, padding, margins, and widths.

Qns) What are breakpoint for viewport responsive device?

    - Usually, adaptive designs use six standard screen widths - 320 px, 480 px, 760 px, 960 px, 1200 px, 1600 px

Qns) Why we use box-sizing in css?

   - The `box-sizing` property in CSS is used to control how the width and height of an element are calculated, particularly in relation to its padding and border. By default, when you set the width and height of an element, the browser adds the padding and border to the total size, which can sometimes lead to unexpected layouts. The `box-sizing` property helps to manage this behavior.

    ### The Two Values of `box-sizing`:

    1. **`box-sizing: content-box;` (Default)**:
    - This is the default value of `box-sizing`.
    - In this mode, the width and height of an element only include the content area, excluding padding and border.
    - This can cause elements to overflow their container or not align as expected when padding or border is added.

    2. **`box-sizing: border-box;`**:
    - When `box-sizing` is set to `border-box`, the width and height of an element include the padding and border, making calculations simpler and more intuitive.
    - This means that the total width of the element (content + padding + border) will be the specified width value.
    - It makes it easier to set dimensions for elements without worrying about the padding or border affecting the overall size.

    /* Using content-box (default) */
    .content-box {
    box-sizing: content-box;
    width: 200px; /* Only content width */
    padding: 20px;
    border: 1px solid black;
    }

    /* Using border-box */
    .border-box {
    box-sizing: border-box;
    width: 200px; /* Includes padding and border */
    padding: 20px;
    border: 1px solid black;
    }

    <div class="content-box">Content Box</div>
    <div class="border-box">Border Box</div>


    In this example, the `.content-box` element will have a total width of `242px` (200px content width + 20px padding on each side + 1px border on each side). The `.border-box` element, on the other hand, will have a total width of `200px`, as the padding and border are included within the specified width.

Qns) What is transition used for with example?

    - Transitions enable you to define the transition between two states of an element. Different states may be defined using pseudo-classes like :hover or :active or dynamically set using JavaScript.

    /* property name | duration | easing function | delay */
    transition: margin-right 4s ease-in-out 1s;

    /* property name | duration | behavior */
    transition: display 4s allow-discrete;

    /* Apply to all changed properties */
    transition: all 0.5s ease-out allow-discrete;
    transition: 200ms linear 50ms;

    /* Global values */
    transition: inherit;
    transition: initial;
    transition: revert;
    transition: revert-layer;
    transition: unset;

    ref link: https://developer.mozilla.org/en-US/docs/Web/CSS/transition

Qns) What is transform used for with example?

    - The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.


    transform: matrix(1, 2, 3, 4, 5, 6);
    transform: translate(120px, 50%);
    transform: scale(2, 0.5);
    transform: rotate(0.5turn);
    transform: skew(30deg, 20deg);
    transform: scale(0.5) translate(-100%, -100%);

    ref link: https://developer.mozilla.org/en-US/docs/Web/CSS/transform

Qns) What is translate used for with example?

    - The translate CSS property allows you to specify translation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.

    translate: none;
    translate: 40px;
    /*X-axis | Y-axis | */
    translate: 50% -40%;
    translate: 20px 4rem;
    translate: 20px 4rem 150px;

Qns) How to add box-shadow in css with example?

    - The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

  /* X-axis | Y-axis | shadow blurr | color */
    box-shadow: 10px 5px 5px red;

Qns) What is a z-index, how does it functions?

   - z-index is used for specifying the vertical stacking of the overlapping elements that occur at the time of its positioning. It specifies the vertical stack order of the elements positioned that helps to define how the display of elements should happen in cases of overlapping.

    The default value of this property is 0 and can be either positive or negative. Apart from 0, the values of the z-index can be:

    Auto: The stack order will be set equal to the parent.
    Number: The number can be positive or negative. It defines the stack order.
    Initial: The default value of 0 is set to the property.
    Inherit: The properties are inherited from the parent.
    The elements having a lesser value of z-index is stacked lower than the ones with a higher z-index.












**Program Questions**

1) can you make a `div` at vertically and horizontally at center?

    - refere interview bit for details.

    HTML:-

    <div>
        <h1>
          Hello World!
        </h1>
    </div>


    CSS:-

    div{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }











```
