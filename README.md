# Job Application Tracker

## Project Overview

Job Application Tracker is a simple web application where users can manage job applications. Users can mark jobs as Interview or Rejected, toggle between them, and delete jobs dynamically. The dashboard updates automatically based on the selected status.

---

## JavaScript Questions & Answers

---

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Ans →**

- getElementById() is used to select one specific element by its unique id, and it always returns a single element.

- getElementsByClassName() is used to select multiple elements that share the same class name. It returns an HTMLCollection.

- querySelector() can select elements using CSS selectors such as `#id`, `.class`, tag names (like `p`), and other complex selectors. It always returns the first matching element.

- querySelectorAll() also uses CSS selectors, but it returns all matching elements. It returns a NodeList.

---

### 2. How do you create and insert a new element into the DOM?

**Ans →**

We first create the element using `document.createElement()`. Then we add content or attributes to it. Finally, we insert it into a parent element using methods like `appendChild()` or `append()`.

---

### 3. What is Event Bubbling? And how does it work?

**Ans →**

Event Bubbling is a process where an event starts from the target element and then bubbles up to its parent elements.  
For example, if you click a button inside a div, the event first runs on the button, then on the div, and then on the body.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

**Ans →**

Event Delegation is a technique where we add an event listener to a parent element to handle events for its child elements.  
It is useful because it improves performance and works for dynamically added elements.

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

**Ans →**

preventDefault() stops the default browser behavior, such as form submission or link navigation.  
stopPropagation() stops the event from bubbling up to parent elements.

---

## Live Link

Live Site:  
https://kamalcodezen.github.io/job-application-tracker-project/

---

## GitHub Repository

Repository Link:  
https://github.com/kamalcodezen/job-application-tracker-project
