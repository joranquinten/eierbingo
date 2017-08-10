# Dutch Weather Complain Service

This project was bootstrapped with the [Create React App](https://github.com/facebookincubator/create-react-app) to provide a quick slightly opinionated basis for the app.

## Table of Contents

- [Introduction](#introduction)
- [Disclaimer](#disclaimer)
- [Decisions](#decisions)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)

## Introduction

This app is a coding excercise to demonstrate my style, skills and familiarity with frontend coding and the use of frameworks.
The app displays the weather report for a certain location and supplies a functionality to place comments on the weather.

We Dutch are accustomed to discuss (read: complain about)  the weather when we make smalltalk. 
So why limit these vital discussions to face to face conversations? Why not provide an online platform to nag about the cold, the heat, the rain, the humidity?
I have built the app around this proposition as a possible solution.

Code is commented and not very complicated. I feel the code is accessible for review in current state.

## Disclaimer

As technology on which I have built this app I have chosen [React](https://facebook.github.io/react/) with [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [ES6](https://github.com/lukehoban/es6features).
I am not familiar with this stack, coming from [Angular 1.x](https://angularjs.org/). In fact, this is the first (partially) functional app I have built this way.
I felt the need to demonstrate my ablity to learn and apply new techniques and frameworks, apart from the coding itself.

I was very pleased with the concepts of one way data flow and the fact that React is *all javascript* instead of DOM mixed with two way data.
With my background, it seemed counter intuitive to manually bind properties to objects in the virtual DOM, but the level of control, modularity and clarity of dataflow are pretty nice tradeoffs.

With having said that this app represents my first steps into the React/JSX/ES6 stack, 
I feel confident in developing more complex solutions and also realize that due to the limitation of complexity and development time of this app, 
a lot of learning opportunities await. For instance, I haven't dealt with different states, testing, sending to an API, error handling, transitions... The list goes on.

## Decisions

During the development I have made some decisions and assumptions and I would like to outline some of those in this paragraph.
- I started out using the Create-React-App package, which gave me a solid structure to expand upon.
- I have split the app into two main components: the weather widget and the comment section. 
  I would imagine that (as is the goal of the React architecture) reusing these components in different features would be a breeze with not dependencies.
  In the future, I could imagine the comments being tied to the weather location, which would in fact let the two components depend on  one another somewhat. For now: strictly seperated.
- There is no backend from which comments are being loaded or saved to. 
  To (at least) mimic the functionality somewhat, I have a set of predefined comments. 
  After adding a comment, all comments are saved in the browser (localStorage) and retrieved upon revisit.
- I could have added more granular components. A button component would have served purpose already in this scale and I might imagine splitting up the form controls in components as well, to deal with stuff such as validation.
- It would have been nice to be able to enter a custom city instead of the predefined 'Eindhoven'. All comments would have been attached to the selected city and would be made visible after the weather report would have finished loading.
- The UI/Design could use some TLC, but serves it's purpose for now. I feel the interface is clear enough to communicate it's affordance.
- Testing is not implemented. This is due to lack of time and mainly inexperience in testing the React framework.
- Little error handling is implemented: some required properties get validated before load and the most rudimentary form validation occurs (without UI updates) when adding a comment.


## Folder Structure

After creation, your project should look like this:

```
app/
  README.md
  node_modules/
  package.json
  public/
  src/
    components/
      comments/
      weather/
```

This app has very limited functionality, therefore the folderstructure is limited in complexity. I have split up the different components per subject in the components-folder.
That's about it.

## Available Scripts

I have employed yarn as a wrapper for the Node package manager. So in the following commands 'yarn' could be replaced by 'npm' without any issues. 
I have a preference for yarn over npm due to the local repository and use of a functional lockfile.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.



