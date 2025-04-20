

# 🍎 Fruit Finder
## Live Site
<a href="https://fruits-frontend-rose.vercel.app/" target="_blank"> Fruit Finder</a>


An interactive web application that provides detailed information about fruits, including nutritional data and images. This app combines data from the Fruityvice API for fruit information and Pixabay API for fruit images.

## ✨ Features

- **Smart Search**: Supports both singular and plural fruit names (e.g., "apple" or "apples")
- **Detailed Fruit Information**:
  - Botanical details (family, order, genus)
  - Comprehensive nutritional data
    - Calories
    - Fats
    - Sugars
    - Carbohydrates
    - Protein
- **Visual Content**: Displays relevant fruit images from Pixabay
- **User-Friendly Interface**:
  - Clean, modern design with Tailwind CSS
  - Search by clicking or pressing Enter
  - Responsive layout for all devices

## 🚀 Technologies Used

- **Frontend**:
  - HTML5
  - JavaScript (ES6+)
  - Tailwind CSS for styling
  - Custom font (Poiret One) for enhanced typography
- **Backend**:
  - Node.js
  - Express.js
- **APIs**:
  - Fruityvice API for fruit data
  - Pixabay API for images
- **Deployment**:
  - Vercel - Front End
  - Render - Back End

## Installation

To use the Fruit Finder project locally, follow these steps:

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (for development and running the server, if applicable)

### 1. Clone the Repository

- Clone the repository to your local machine using the following command:
- bash
- git clone https://github.com/your-username/fruit-finder.git

### 2. Navigate to the Project Directory

- move into the project folder
- cd fruit-finder

### 3. Install Dependencies

- npm install

### 4. Build Tailwind

- If you're using a preconfigured setup for Tailwind CSS, ensure you generate the output.css file by running:
- npx tailwindcss -i ./src/input.css -o ./output.css --watch

### 5. Open the Project in Your Browser

- You can either:
- Open the index.html file directly in your browser, or
- Run a local development server (e.g., Live Server for VS Code).

### 6. Usage

- Open the application in your web browser.
- Enter the name of a fruit in the input field.
- Click the "Click" button to fetch and display the fruit's information.# fruits-frontend
