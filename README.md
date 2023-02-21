# Collections
The repo contains source code that connects to firebase and checks if a collection exists or not.
if collection exists then log message is displayed.
if collection doesnot exist then the collection is created in firestore database

### Usage
To create a collection, pass the collection name as a parameter in createCollectionIfNotExists function

##### Example
``` createCollectionIfNotExists("users") ```
In this Example we are passing a parameter "users" in the createCollectionIfNotExists function which will be the name of the collection 
