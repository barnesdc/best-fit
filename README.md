# best-fit

Purpose: Create an application to track the status of job applications

## Technology

- Mongo
- Express
- React
- Node

## Data

- User data
- Appliation information
  
## Desired Features

- impliment sign in with (google / linked-in)
- PDF parser and anaylsis
- Counter
- web scraping
  
## How to Run the Server

- **Set up MongoDb**
  - Create an account and database if you dont already have one at <https://www.mongodb.com/cloud/atlas>
  - **Create a Cluster**
  - In the **Network Access** tab, *Add IP Address*
  - In the **Database Access** tab, *ADD new databse user*
    - Save username and password to be used as an environment variable
- **Environmnt Variables**
  - I personally like to save environment variables in a hidden file location in my home directory, then sourcing to use during development.

  ```BASH
  touch ~/.yourFilename
  nano ~/.yourFilename
  ```

  - inside the file, set your username and password:

  ```BASH
  export MONGO_USER=yourUsername
  export MONGO_PASS=yourPassword

  # (Optional) set by default in the app
  export PORT=youApplcationPortNumber
  ```

  - save and exit -> ctrl + x, select yes when prompted
  - open a terminal window within your code directory

  ```BASH
  source ~/.yourFilename
  ```

- Start the server with "**npm start**" or "**yarn start**" within the server directory, you should see a console output of: 
  - *"Server running on port: youApplcationPortNumber"*

## How to Run the Client
