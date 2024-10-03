# Redux Overview

Redux is a predictable state container for JavaScript apps, primarily used with React. It helps manage application state in a centralized store, making it easier to debug and test your applications. 

## Table of Contents

1. [Core Concepts](#core-concepts)
2. [Getting Started](#getting-started)
3. [Key Components](#key-components)
4. [Example Implementation](#example-implementation)
5. [Using `useReducer` Hook](#using-usereducer-hook)
6. [Conclusion](#conclusion)

## Core Concepts

### 1. Store
The store is a single JavaScript object that holds the application's state. The state is read-only, and it can only be changed by dispatching actions.

### 2. Actions
Actions are plain JavaScript objects that describe what happened in the application. Each action has a `type` property and can have additional data.

### 3. Reducers
Reducers are pure functions that take the current state and an action as arguments and return a new state. They determine how the state changes in response to actions.

### 4. Dispatch
The `dispatch` function is used to send actions to the store. This tells the store that something happened, and the reducers need to calculate the new state.

### 5. `useReducer`
The `useReducer` hook is a React hook that manages complex state logic in components. It’s similar to Redux but used for local component state.

## Getting Started

To get started with Redux, you need to install the Redux and React-Redux libraries:

```bash
npm install redux react-redux
