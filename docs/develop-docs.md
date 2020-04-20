# Documentation

## Ticket: CAT-11

### Child: CAT-24

1. Created a new PIM-WEBAPP GITHUB repository for basic frontend foundation (Base setup of the Vue.js framework)

2. Created new javascript file inside src/state/modules/ titled auth.js for the Dummy Authentication Token Process which is basically for store/state management process and has the following contents: State, Getters, Mutations and Actions and the methods for Private Helpers for setting and getting data into and from session storage

3. Basic implementation for the OAuth is done inside src/router/views/authlogin.vue file

4. BFF Server API's are used to get authorized token

5. File Auth.JS has API call to check refresh token for authenticaton process

6. Any new screens will be added under src/router/views

## Ticket: CAT-12

### Child: CAT-25

1. Added a common View for all masters

2. Masters added Currency, Language, Manufacturer, Package Type, Tag and Unit of measure

3. Common Grid for Create, Update, Delete options are implemented to handle CRUD operations for all above listed Entities

4. File master.vue is used to add Dynamic operations from src/router/views/masters/masters.vue file

5. Store/State management is done in Master.JS file which has Getters, State, Mutations and Actions inside src/state/modules/masters.js for API binding for CRUD operations of all entities dynamically

6. Dependency Added : Axios, using yarn

## Ticket: CAT-13

### Child: CAT-27

1. Added new views for catalog entity for listing catalogs, adding catalog, editing catalog and managing the hierarchy of catalogs

2. Grid for Add, Edit, Delete options are implemented to handle CRUD operations for all catalogs. 3. File catalogs.vue is used for listing all the catalogs from \src\router\views\masters\catalogs.vue

3. File addCatalog.vue is used to create new catalog and also allow set its products from \src\router\views\masters\ addCatalog.vue

4. File editCatalog.vue is used for editing catalog which are created from \src\router\views\masters\ editCatalog.vue

5. File manageHeirarchy.vue is used for managing the hierarchy catalogs setting parent-child relationships \src\router\views\masters\ manageHeirarchy.vue

6. Store/State management is done in catalogs.js file which has Getters, State, Mutations and Actions inside src/state/modules/ catalogs.js for API binding for CRUD operations for catalog

7. Dependency Added : vue-draggable and vue-drag-tree using yarn
