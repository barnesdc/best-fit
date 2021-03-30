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
  - (Passport may be a good solution)
- PDF parser and anaylsis
- Counter
- web scraping
- SonarQube Community edition for Code Smells

## Initial Setup

- The following command will install dependencies for both client and server:

  ```BASH
  yarn install && yarn install:dev
  ```

## How to Run the Server

- **Set up MongoDb**
  - Create an account and database if you dont already have one at <https://www.mongodb.com/cloud/atlas>
  - **Create a Cluster**
  - In the **Network Access** tab, _Add IP Address_
  - In the **Database Access** tab, _ADD new databse user_
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

- If in the server directory: `yarn start`
- If in the root directory: `yarn start:server`
- You should see a console output of: _"Server running on port: youApplcationPortNumber"_

## How to Run the Client


## Resources:

Eslint / Prettier
- https://thomlom.dev/setup-eslint-prettier-react/
- https://www.npmjs.com/package/eslint-plugin-prettier
- https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats
