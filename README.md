# Development

### Link to Deployed Website
https://hilariousalpaca112.github.io/cs1300-development

### Goal and Value of the Application

The goal of this application is to provide users with a page where they can easily find wines by their grape/wine type and what country the wine comes from. Some people have strong preferences to only wines from France, or wines from the USA, so this page lets users find those wines. 

### Usability Principles Considered

Several usability principles were considered when making this webpage. One was in terms of accessibility. Alt tags were added to the images so that they are more accessible to those who may not be able to view them. Additionally, it was very important to me that the website was easy to learn how to use. This was done by making the layout of components very straightforward. Users first see the filters and sorting features and then the list of all items that fit their criteria. The buttons are made clear that they are buttons so that a user will not be confused when interacting with it. 

### Organization of Components

My components are a shopping cart, a filter list mechanism, and a list to display all the items. 

The shopping cart (ShoppingCart.js) handles all of the items that the user wishes to add to their cart and calculates the total cost of everything in the cart. It also makes it possible for the deletion of a cart item. 

The filtered list (FilteredList.js) makes use of several functions to check the selected filter and sort slections made by the user.

The display list (DisplayList.js) component maps all the wine information into a card from React Bootstrap to be displayed on the page.

### How Data is Passed Down Through Components

For the shopping cart, data is passed through as properties such as cartItem and onRemove. These keep track of the items in the cart by their id and removes it if desired also by the id.

For filtered list, data is passed through with props similar to the shopping cart so that items can actually be added to the cart by their id. Additionally, the wine types and regions are passed through as eventKeys to functions that check if those were selected and passes that through to displayList.

For the displayList, the data is taken in from the filtered list as a wineList array. This list contains the specifications of which wines to display. Whether that is with filters applied or not.

### How the User Triggers State Changes

State changes are triggered by the user in several different ways. Each time the wines are sorted, filtered, and sent to the cart all trigger a state change. This is because the items, their wine regions, wine types, are all kept as states that get updated dynamically.


### References

React Bootstrap was used for the wine cards, the nav component for the filters, and the card for the shopping cart.
