# Expense Tracker

## Overview

This project was built as part of my JavaScript learning journey to strengthen my understanding of core frontend development concepts without relying on frameworks or libraries.

The primary goal was not to build a feature-rich expense management application, but to gain hands-on experience with JavaScript fundamentals by creating a real-world CRUD application from scratch.

## Project Goals

While building this project, I focused on learning and implementing:

* DOM Manipulation
* Event Handling
* Form Validation
* Dynamic UI Rendering
* Arrays and Objects
* JavaScript Array Methods
* CRUD Operations
* Local Storage
* State Management
* Debugging and Problem Solving

## Features Implemented

### Expense Management

* Add new expenses
* Edit existing expenses
* Delete expenses
* Display expenses in a dynamic table

### Data Persistence

* Save expenses using Local Storage
* Restore expenses automatically after page refresh

### Expense Summary

* Calculate total expenses dynamically
* Update totals after every create, update, and delete operation

### Validation

* Prevent empty expense names
* Prevent invalid or negative amounts

## JavaScript Concepts Practiced

### DOM Manipulation

* `getElementById()`
* `querySelector()`
* `createElement()`
* `appendChild()`
* `textContent`
* `innerHTML`

### Event Handling

* Form Submit Events
* Button Click Events
* `preventDefault()`

### Array Methods

* `push()`
* `map()`
* `filter()`
* `find()`
* `reduce()`

### Browser Storage

* `localStorage.getItem()`
* `localStorage.setItem()`
* `JSON.stringify()`
* `JSON.parse()`

## Challenges Faced

### Dynamic Rendering

At first, I manually created rows whenever a new expense was added. This caused issues when loading data from Local Storage.

I later refactored the application to use a dedicated rendering function that rebuilds the table from the application's state.

### Managing Unique IDs

After introducing Local Storage, I discovered that IDs could be duplicated after refreshing the page. I solved this by calculating the next available ID from the existing expense data.

### Update Functionality

Implementing Edit functionality helped me understand the difference between creating new objects and updating existing ones using the `find()` method.

### State Synchronization

One of the biggest lessons from this project was keeping the UI, Local Storage, and application state synchronized after every operation.

## Key Learnings

This project helped me understand how modern frontend applications work internally by:

* Managing application state
* Rendering UI from data
* Handling user interactions
* Persisting data locally
* Structuring JavaScript code into reusable functions

It also gave me practical experience with the complete CRUD lifecycle:

* Create
* Read
* Update
* Delete

## Future Improvements

I intentionally stopped after completing the core JavaScript learning objectives.

Possible future enhancements include:

* Expense Categories
* Search Functionality
* Sorting Expenses
* Analytics and Charts
* Backend Integration
* Full MERN Stack Version
