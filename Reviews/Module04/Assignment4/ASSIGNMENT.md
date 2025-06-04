# Assignment 4: Managing Items in Angular

## Objective
Build an Angular application to manage a list of items using the provided classes and services.

## Instructions
1. **Understand the Model**:
   - The `Item` model has three properties: `id`, `name`, and `description`.

2. **Routing**:
   - Routing is already set up. Focus on implementing the functionality for `/items`.

3. **Components**:
   - **ManageItemComponent**:
     - Implement two key functions:
       - **List Items**: Display all items in a table or list format.
       - **Add Item Form**: Create a form to add new items with fields for `name` and `description`. Ensure the form validates user input.

4. **Service**:
   - Use `ItemsService` to interact with the backend (`db.json`).
   - Focus on implementing the following methods:
     - **getAll()**: Fetch all items from the backend.
     - **add()**: Add a new item to the backend.

5. **Backend**:
   - Run `json-server` to serve `db.json` at `http://localhost:3000`.

6. **UI**:
   - Create forms and tables for managing items.

## Submission
Submit the completed project with all functionality implemented.

Good luck!
