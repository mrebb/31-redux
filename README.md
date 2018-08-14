![cf](http://i.imgur.com/7v5ASc8.png) 31: Budget Tracker
===



#### Documentation
This app lets you create categories and budget for each category.

##### category
* in this app a category contains the following properties
  * `id` a uuid
  * `timestamp` a date from when the category was created
  * `name` a string that is the name of the category
  * `budget` a number that is the total amount of $ in the category

##### redux
###### reducer
* created a category reducer in your reducer directory
* this reducer supports the following interactions
  * `CATEGORY_CREATE`
  * `CATEGORY_UPDATE`
  * `CATEGORY_DESTROY`

###### action creators
* created an action creator for each interaction supported by category reducer

###### store
* in `lib/store.js` exported a function that will return a new redux store from category reducer

##### Components
Created the following components and structure.
```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [Category Item]
           CategoryForm  -- for updating categories
```

###### App Component
The App component sets up the Provider for the redux store and the Router.

###### Dashboard Component
* Displays dashboard on the `/` route
* Use react-redux's `connect` to map state and dispatchable methods to props
* Displays a `CategoryForm` for adding categories to the app state
* Displays a `CategoryItem` for each category in the app state

###### CategoryItem Component
* Displays the category's name and budget
* Displays a delete button
  * `onClick` the category would be removed from the application state
* Displays a CategoryForm
  * `onComplete` the form updates the component in the application state

#### Test
* each interactions of actions & reducer is covered under tests