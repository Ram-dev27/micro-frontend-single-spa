# Single-SPA Application with Angular and React

This repository demonstrates a microfrontend architecture using single-spa to integrate Angular and React applications.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)

## Introduction

This project sets up a microfrontend architecture using [single-spa](https://single-spa.js.org/) to combine Angular and React applications into a single application. Each microfrontend (Angular and React) is developed and deployed independently.

## Prerequisites

Ensure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (version 6.x or higher)
- [single-spa CLI](https://single-spa.js.org/docs/create-single-spa) (optional, for creating new microfrontends)

## Installation

Clone the repository and install dependencies for the root configuration and each microfrontend.

```bash
# Clone the repository
git clone https://github.com/ram1257/micro-frontend-single-spa.git
cd single-spa

# Install root configuration dependencies
cd root-config
npm install

# Install Angular microfrontend dependencies
cd ../microApp-angular
npm install

# Install React microfrontend dependencies
cd ../microApp-react
npm install

# Install React microfrontend dependencies
cd ../microApp-sideMenu
npm install

```
## Project Structure
```bash
single-spa-angular-react/
├── root-config/      # Root configuration for single-spa
├── microApp-angular/      # Angular microfrontend
├── microApp-react/        # React microfrontend
├── microApp-sideMenu/     # React side menu microfrontend
└── README.md         # This file
```
## Running the Application

To run the application, you need to start the root configuration and each microfrontend.

Open separate terminal windows for each service:

```bash
# Start the root configuration
cd root-config
npm start

# Start the Angular application
cd ../microApp-angular
npm start

# Start the React application
cd ../microApp-react
npm start

# Start the Sidemenu React application
cd ../microApp-sideMenu
npm start
```
