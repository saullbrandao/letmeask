<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/saullbrandao/letmeask/">
    <img src="src/assets/images/logo.svg" alt="Logo" width="335" height="80">
  </a>

  <p align="center">
    <a href="https://www.twitter.com/saullbrandao/">
      <img alt="Saull Brandão" src="https://img.shields.io/badge/-saullbrandao-1DA1F2?style=flat&logo=Twitter&logoColor=white" />
    </a>
    <a href="https://www.linkedin.com/in/saullbrandao/">
      <img alt="Saull Brandão" src="https://img.shields.io/badge/-saullbrandao-0A66C2?style=flat&logo=Linkedin&logoColor=white" />
    </a>
    <a href="./LICENSE">
      <img alt="License MIT" src="https://img.shields.io/github/license/saullbrandao/letmeask" />
    </a>
    <a href="https://github.com/saullbrandao/letmeask/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/saullbrandao/letmeask" />
    </a>
  </p>
  <h2 align="center">Letmeask</h2>

  <p align="center">
    Create live Q&A rooms
    <br />
    </p>
</p>

# :bookmark_tabs: Table of Contents

- [About the project](#about-the-project)
- [Technologies](#technologies)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

# :page_with_curl: About the Project

![letmeask](https://raw.githubusercontent.com/saullbrandao/letmeask/main/src/assets/images/demo.png)

- You can create or join a Q&A room
- Login with google account using Firebase Auth
- Respects your system preferred color scheme(light or dark)
- The room creator can highlight, delete and mark a question as answered
- Users can give likes to questions
- Questions with more likes appear first

# :computer: Technologies

- [React](https://github.com/facebook/react)
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss/)
- [Typescript](https://github.com/microsoft/TypeScript)
- [React Modal](https://github.com/reactjs/react-modal)
- [React Router Dom](https://github.com/ReactTraining/react-router)
- [Firebase](https://firebase.google.com/)

# :rocket: Getting Started

## Prerequisites

You will need to install Node.js and yarn

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

## Installation

```sh
# Clone Repository
$ git clone https://github.com/saullbrandao/letmeask.git && cd letmeask

# Install Dependencies
$ yarn

# You have to create a [firebase](https://console.firebase.google.com/) project and activate the option to login using google account(Firebase Auth) and the Firebase Realtime Database. Refer to the [firebase docs](https://firebase.google.com/docs) for more information

# Fill .env.local file with YOUR environment variables, according to .env.example file.

# Run Application
$ yarn start
```

This starts the development server on http://localhost:3000/

# :interrobang: Issues

Create a <a href="https://github.com/saullbrandao/letmeask/issues">new issue
report</a>, it will be an honor to be able to help you solve and further improve
our application.

# :mailbox: Contributing

- Fork this repository;
- Create a new branch to develop your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: my new feature'`;
- Push to your branch: `git push origin my-feature`.
- Open a Pull Request

# :lock: License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more
information. Made by [Saull Brandão](https://www.linkedin.com/in/saullbrandao/).
