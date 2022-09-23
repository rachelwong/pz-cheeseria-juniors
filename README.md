# Welcome to Patient Zero's Cheeseria Coding Challenge (For Juniors)

## Learnings

1. When clicking on a Cheese card, open a [Dialog](https://material-ui.com/components/dialogs/#dialog) that contains all the details of the card, including the item's **description**.

> This is completed

2. Add a **Purchase** button to the Cart (In the sliding view that opens when you click the 'Cart' button). Clicking on the **Purchase** button will send all items in the cart to the server (backend) and store them for later use (You are not required to use a Database in this exercise, but you may do so if you wish).

> I researched and attempted various methods including commiting the changes to a text file as a JSON.stringif-ied array but to no avail.

3. Show all recently purchased items when clicking on the "Recent Purchases" button on the top left of the page. You may choose to display those items in a Drawer, a Dialog or any other control you see fit. Note that the recent purchased items **must** be retrieved from the server.

> Same as above in point 2, I'm not able to configure the server backend as I really did not understand the workings of the backend. I tried retrieving data from textfile and reconvert it into an array. Instead I injected dummy data into the /api/purchase endpoint (GET route).

4. Add a UI automation test that performs the Purchase action you implemented as part of Feature #2. For this test case you will add two separate items to the cart and click on the **Purchase** button you have added as part of Feature #2.
For this exercise we will be using the Cypress.io tool-set. You will find code to get you started in the 'e2e' folder.
***Note: You are free to add any selectors to your client code which may be required by the e2e tests.***

> I managed to get tests running. However the test ultimately fails because I'm using dummy data for the /api/purchase (GET route) instead of getting data live from the server.

Once done, please notify us of your repository details and make sure it is publicly accessible. As part of your assessment we will confirm that all features were implemented as instructed.

## Important Scripts

This project was tested with node v16.15.0 and npm v8.5.5.

In the project directory, you can run:

### `npm install`

Installs package dependencies (node v16.15.0)

### `npm start`

Builds and runs the app in the development mode.\
The browser will be automatically launched under [http://localhost:9000](http://localhost:9000).
The server backend will start listening on [http://localhost:3000](http://localhost:3000)

### Cypress.io

You will open the e2e folder, then run following commands to get started

```bash
npm install
npm test
```

### Helpful links

[React Material UI](https://material-ui.com/getting-started/usage/)