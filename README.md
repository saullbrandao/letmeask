[![MIT License][license-shield]][license-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/saullbrandao/letmeask">
    <img src="src/assets/images/logo.svg" alt="Logo" width="200" height="80">
  </a>

  <h2 align="center" style="font-weight: 700">Let Me Ask</h2>

  <p align="center">
    Create live Q&A rooms
    <br />
    <br />
    <a href="https://letmeask-saullbrandao.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/saullbrandao/letmeask/issues">Report Bug</a>
    ·
    <a href="https://github.com/saullbrandao/letmeask/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

![letmeask](https://raw.githubusercontent.com/saullbrandao/letmeask/main/src/assets/images/demo.png)

* You can create or join a Q&A room
* Login with google account provided by Firebase Auth
* There is a light and dark mode
* Clicking on a card will open a new page which display the user's stats

### Built With

* [React](https://github.com/facebook/react)
* [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss/)
* [Typescript](https://github.com/microsoft/TypeScript)
* [React Modal](https://github.com/reactjs/react-modal)
* [React Router Dom](https://github.com/ReactTraining/react-router)
* [Firebase](https://firebase.google.com/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You will need to install Node.js and yarn
* [Node.js](https://nodejs.org/en/download/)
* yarn
  ```sh
  npm install -g yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/saullbrandao/letmeask.git
   ```
2. Install packages
   ```sh
   yarn
   ```
3. You have to create a [firebase](https://console.firebase.google.com/) project and activate the option to login using google account(Firebase Auth) and the Firebase Realtime Database. Refer to the [firebase docs](https://firebase.google.com/docs) for more information
4. Create a `.env.local` file at the root of the project and cop
  
    * Change everything inside quotes with the config you got from your firebase project([example](https://firebase.google.com/docs/web/setup?authuser=0#config-object))

      ```sh
      REACT_APP_API_KEY='API_KEY'
      REACT_APP_AUTH_DOMAIN='AUTH_DOMAIN'
      REACT_APP_DATABASE_URL='DATABASE_URL'
      REACT_APP_PROJECT_ID='PROJECT_ID'
      REACT_APP_STORAGE_BUCKET='STORAGE_BUCKET'
      REACT_APP_MESSAGING_SENDER_ID='MESSAGING_SENDER_ID'
      REACT_APP_APP_ID='APP_ID'
      ```
<!-- USAGE EXAMPLES -->
## Usage

1. Run the project
    ```sh
    yarn start
    ```
2. This starts the development server on http://localhost:3000

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Saull Brandão - [@saullbrandao](https://twitter.com/saullbrandao) - saull@outlook.com

Project Link: [https://github.com/saullbrandao/letmeask](https://github.com/saullbrandao/letmeask)


[issues-shield]: https://img.shields.io/github/issues/saullbrandao/letmeask.svg?style=for-the-badge
[issues-url]: https://github.com/saullbrandao/letmeask/issues
[license-shield]: https://img.shields.io/github/license/saullbrandao/letmeask.svg?style=for-the-badge
[license-url]: https://github.com/saullbrandao/letmeask/blob/main/LICENSE
