```js

## HTML Interview Questions

1) What is HTML element, tags and attribute?
2) What is Sub and Sup Tag?
3) What is <!Doctype html> in Html5
4) Tell me about semantic Tags in HTML?
5) Difference b/w sematic and non sematic tags with example?
6) What is Forms in HTML?
7) Do you know about the Meta Tags?
8) Have you used the responsive image tags? can you please give an example.
9) What is difference between html and html5?
10) What is Iframe tag in Html5?
11) What is difference <b> and <Strong> in html ?
12) What is view port attribute in htm?
13) What is attribute in html?
14) What is block level element and inline element in
html?
15) What are the formatting tags in html ?



**Document Object Modal examples like: document.getElementById() method.**

1) document.getElementById()
2) document.getElementsByClassName()
3) document.querySelector()
4) document.querySelectorAll()
5) document.createElement()
6) document.addEventListener()




Qns) What is HTML element, tags and attribute?

   - An HTML element is a fundamental building block of a webpage. It consists of an opening tag, content, and a closing tag. HTML tags are used to define and describe different parts of the content, such as headings, paragraphs, links, images, and more.
   - HTML attributes are special words used inside the opening tag to control the element's behaviour. HTML attributes are a modifier of a HTML element type.

Qns) What is Sub and Sup Tag?

   - In HTML, the <sub> and <sup> tags are used to create subscript and superscript text, respectively.

      <sub> Tag (Subscript): H<sub>2</sub>O
         Output: H₂O

      <sup> Tag (Superscript): x<sup>2</sup>
         Output: x².

Qns) What is <!Doctype html> in Html5

   - <!DOCTYPE html> declaration is used at the beginning of the document to indicate that the page is an HTML5 document. The rest of the HTML code follows, using HTML5 semantic elements such as <header>, <nav>, <article>, and <footer> to structure the content.

Qns) Tell me about semantic Tags in HTML?

   - Semantic HTML tags are tags that define the meaning of the content they contain. For example, tags like <header>, <article>, and <footer> are semantic HTML tags. They clearly indicate the role of the content they contain. On the other hand, tags like <div> and <span> are typical examples of non-semantic HTML elements. Semantic tags improve accessibility, search engine optimization (SEO), and overall code readability.

    <header>: Represents the top section of a web page or a section within a page. Typically contains the website's logo, navigation menu, and introductory content.

    <nav>: Defines a container for navigation links, such as menus or lists of links to other pages.

    <main>: Specifies the main content of a document, excluding headers, footers, and sidebars. There should be only one <main> element per page.

    <article>: Represents a self-contained, independent piece of content. Commonly used for blog posts, news articles, forum posts, or user-generated content.

    <section>: Defines a section within a document, often with its own heading. Used to group related content and can be nested within other <section> elements.

    <footer>: Defines the footer section of a document or a section within a page. Typically contains copyright information, contact details, and related links.


Qns) Difference b/w sematic and non sematic tags with example?

   - Semantic Tags:
      • Provide meaning and structure to the content.
      • Improve accessibility and SEO.
      • Convey the purpose of sections and elements clearly.
      • Recommended for organizing main content.

   - Non-Semantic Tags:
      • Purely presentational, used for styling and layout.
      • Do not provide any specific meaning to the content.
      • Useful for creating specific design elements and grouping for styling purposes.

   Exp:- <div>, <span>...

Qns) What is Forms in HTML?

   -  Forms are used to collect data from the user.

      <form action="/server"> //when button clicked action will trigger
         <div>
        <label for="username"
          >User Name:
          <input type="text" placeholder="Enter Name" id="username" />
        </label>
      </div>
      </form>

Qns) Do you know about the Meta Tags?

   - Meta tags are HTML elements that provide metadata about a web page. This metadata is not displayed on the web page itself but is used by browsers, search engines, and other web services to gather information about the page. Meta tags are typically placed within the <head> section of an HTML document.

    <meta charset="UTF-8">: Specifies the character encoding for the document. UTF-8 is the most common encoding and supports a wide range of characters.

    <meta name="description" content="Brief description of the page">: Provides a short description of the web page's content. This description is often used by search engines when displaying search results.

    <meta name="keywords" content="keyword1, keyword2, keyword3">: Specifies a list of keywords or phrases that are relevant to the content of the page. While not as important for SEO as in the past, it can still be used for context.

    <meta name="viewport" content="width=device-width, initial-scale=1.0">: Sets the viewport properties for responsive design. It ensures that the web page is displayed correctly on various screen sizes and devices.

Qns) Have you used the responsive image tags? can you please give an example.

     - Yes, I can certainly provide an example of using responsive image tags in HTML. Responsive images are designed to adapt and scale based on the size of the screen or viewport, ensuring optimal display on various devices. One common way to implement responsive images is by using the `<img>` tag with the `srcset` and `sizes` attributes.

   Here's an example:


   <!-- Using the img tag with srcset and sizes attributes -->
   <img
      src="small.jpg" <!-- Default image source for small screens -->
      srcset="
         small.jpg 300w, <!-- Image source for small screens with width 300px -->
         medium.jpg 600w, <!-- Image source for medium screens with width 600px -->
         large.jpg 900w  <!-- Image source for large screens with width 900px -->
      "
      sizes="
         (max-width: 600px) 300px, <!-- Image width for screens up to 600px -->
         (max-width: 900px) 600px, <!-- Image width for screens up to 900px -->
         900px <!-- Image width for screens larger than 900px -->
      "
      alt="Responsive Image Example"
   />

   In this example:
   - The `src` attribute provides the default image source for browsers that do not support `srcset`.
   - The `srcset` attribute lists multiple image sources with corresponding widths. Each source is followed by the width descriptor (`w`), indicating the width of the image.
   - The `sizes` attribute specifies the size of the image to use based on the viewport width. It consists of a comma-separated list of media conditions and image sizes.

   With this setup, the browser can choose the most appropriate image source based on the device's screen size and resolution, improving performance and optimizing display quality for different devices.


Qns) What is difference between html and html5?

HTML5 is the latest version of HTML and supports new markup language functionalities such as multimedia, new tags and elements as well as new APIs. HTML5 also supports audio and video. HTML does not provide native audio and video support. HTML5 provides native audio and video support.

Qns) What is Iframe tag in Html5?

The <iframe> HTML element represents a nested browsing context, embedding another HTML page into the current one.
   <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>

Qns) What is difference <b> and <Strong> in html ?

   The <strong> element is for content that is of greater importance, while the <b> element  just modifies the text.

Qns) What is view port attribute in htm?

   The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.

Qns) What is attribute in html?

   An HTML attribute is a piece of markup language used to adjust the behavior or display of an HTML element. For example, attributes can be used to change the color, size, or functionality of HTML elements.


Qns) What is block level element and inline element in
html?

   A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and it only takes up as much width as necessary. The <div> element is a block-level and is often used as a container for other HTML elements.

Qns) What are the formatting tags in html ?

   <b> - Bold text
   <strong> - Important text
   <i> - Italic text
   <em> - Emphasized text
   <mark> - Marked text
   <small> - Smaller text
   <del> - Deleted text
   <ins> - Inserted text
   <sub> - Subscript text
   <sup> - Superscript text



** Document Object Modal examples like: document.getElementById() method.**

1)  document.getElementById()

   - <html lang="en">
   <head>
      <title>getElementById example</title>
   </head>
   <body>
      <p id="para">Some text here</p>
      <button onclick="changeColor('blue');">blue</button>
      <button onclick="changeColor('red');">red</button>
   </body>
   </html>

   Javascript

   function changeColor(newColor) {
      const elem = document.getElementById("para");
      elem.style.color = newColor;
   }


2) document.getElementsByClassName()

   - <html lang="en">
   <head>
   <meta charset="UTF-8">
   <title>getElementsByClassName Example</title>
   </head>
   <body>
   <div class="container">
      <h1 class="heading">Hello, World!</h1>
      <p class="paragraph">This is a paragraph.</p>
      <p class="paragraph">Another paragraph here.</p>
   </div>

   </body>
   </html>


   Javascript

   // Select elements with the class name "paragraph"
   var paragraphs = document.getElementsByClassName("paragraph");

   // Loop through each paragraph and change its text
   for (var i = 0; i < paragraphs.length; i++) {
   paragraphs[i].textContent = "This paragraph has been updated!";
   }

3) document.querySelector()

   - <html>
      <body>
      <h1>The Document Object</h1>
      <h2>The querySelector() Method</h2>

      <h3>Add a background color to the first p element:</h3>
      <p>This is a p element.</p>
      <p>This is a p element.</p>

      </body>
      </html>

   Javascript

   document.querySelector("p").style.backgroundColor = "red";

   // id, class and element
   document.querySelector('p'); // selects first p element
   document.querySelector('#myId');// selects first element with id = myId
   document.querySelector('.myClass');// selects first element with class = myClass


4) document.querySelectorAll()

   - <html>
   <body>
   <h1>The Document Object</h1>
   <h2>The querySelectorAll() Method</h2>

   <p>Add a background color all elements with class="example":</p>
   <h2 class="example">A heading</h2>
   <p class="example">A paragraph.</p>

   </body>
   </html>

    Javascript

   const nodeList = document.querySelectorAll(".example");
   for (let i = 0; i < nodeList.length; i++) {
   nodeList[i].style.backgroundColor = "red";
   }

5) document.createElement()

   - <html>
      <body>

      <h1>The Document Object</h1>
      <h2>The createElement() Method</h2>
      <p>Create a p element with some text:</p>

      </body>
      </html>

   Javascript

   // Create element:
      const para = document.createElement("p");
      para.innerText = "This is a paragraph.";

   // Append to body:
      document.body.appendChild(para);

6) document.addEventListener()

   - <html>
      <body>

      <h1>The Document Object</h1>
      <h2>The addEventListener() Method</h2>

      <p>Click anywhere in the document to display "Hello World!".</p>

      <p id="demo"></p>

      </body>
      </html>

    Javascript

   document.addEventListener("click", myFunction);

   function myFunction() {
   document.getElementById("demo").innerHTML = "Hello World";
   }
```

````Js

##Setting content in Object##
   - Using Properties and methods

   innerText = Shows the visible text contained in node //it will just show the text
   textContent = Shows all the full text // it will show the text aling with the \n (new line element)
   innerHTML = Shows the full markup // it will show the text along with html elements like <p>  <b> \n <a>

##Manipulating Attributes##

obj.getAttribute( attr )
obj.setAttribute( attr, val)

##Manipulating Style##

style Property
obj.style

classList.add() to add new classes
classList.remove() to remove classes
classList.contains() to check if class exists
classList.tiggle() to toggle between add & remove

##Adding Elements##

documents.createElement('p')

appendChild(element) //adding the element inside the Parent element
append(element) //adding as a child in nested form (it will add at last)
prepend(element) // (it will add at first)
insertAdjacent(where, element)

##Removing Elements##

removeChild(element)
remove(element)



















```
````
