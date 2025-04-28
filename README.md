# CornerCart - React E-commerce Frontend

A simple e-commerce frontend application built with React and Vite, featuring product Browse, cart management, and basic user interactions.

## Features

- **Product Listing:** Displays products fetched from a data source.
- **Product Cards:** Shows product details like title, image, tags, rating, and price.
- **Shopping Cart:** Allows users to add and remove items from the cart.
- **Cart Summary:** Calculates and displays the total price of items in the cart.
- **Routing:** Uses React Router DOM for navigating between different pages like Home, Products, Cart, Login, Signup, About, etc.
- **State Management:** Uses React Context API (`ProductContext`) to manage product data, cart state, and user login status.
- **User Authentication (Simulated):** Includes Login and Signup pages. User data seems to be managed via a local JSON server (`data.json`).
- **Payment Page (Simulated):** A basic payment interface.
- **Profile Page:** A page for logged-in users to view details and potentially edit them.
- **Static Pages:** Includes About Us, Privacy Policy, and Terms of Service pages.

## Technologies Used

- **Frontend:** React, Vite, CSS Modules
- **Routing:** React Router DOM
- **State Management:** React Context API
- **HTTP Client:** Axios
- **Development Server:** Vite
- **Linting:** ESLint
- **Mock Backend (Potential):** JSON Server

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd ecommerce-react/eCommerce-project
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    _(or `yarn install` if you use Yarn)_

## Running the Project

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the Vite development server, usually at `http://localhost:5173`.

2.  **(Optional) Start the mock JSON server (if used):**
    The project includes `json-server` as a dependency and a `src/backend/data.json` file. If the application relies on this for user data or other API calls, you might need to run it separately. Check the project setup or add a script to `package.json` like:
    ```json
    "scripts": {
      // ... other scripts
      "server": "json-server --watch src/backend/data.json --port 5000"
    }
    ```
    And run it in a separate terminal:
    ```bash
    npm run server
    ```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the project files using ESLint.
- `npm run preview`: Serves the production build locally.
