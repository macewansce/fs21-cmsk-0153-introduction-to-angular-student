# Assignment 4: Managing Devices in Angular

## Objective
Build an Angular application to manage a list of devices using the provided classes and services.

## Instructions
1. **Understand the Model**:
   - The `Device` model has three properties: `id`, `brand`, and `model`.

2. **Routing**:
   - Routing is already set up. Focus on implementing the functionality for `/devices`.

3. **Components**:
   - **ManageDevicesComponent**:
     - Implement two key functions:
       - **List Devices**: Display all items in a table or list format.
       - **Add Device Form**: Create a form to add new items with fields for `brand` and `model`. Ensure the form validates user input.

4. **Service**:
   - Use `DevicesService` to interact with the backend (`db.json`).
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
