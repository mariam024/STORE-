# Store

**Store** is a modern e-commerce web application built with **React**. It provides a clean, responsive interface for browsing products from the **Fake Store API**. The application demonstrates best practices in React development, including component structure, routing, and API integration.

---

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices  
- **Product Catalog**: Browse through a collection of products with image previews  
- **Product Details**: View detailed information about each product  
- **Modern UI**: Clean and intuitive user interface built with Bootstrap  
- **Fast Loading**: Optimized performance with Vite build tool  

---

## Technologies Used

### Frontend
- **React 19** – Latest version of the popular JavaScript library for building user interfaces  
- **React Router 7** – For handling navigation and routing  
- **Bootstrap 5** – For responsive design and pre-styled components  
- **Axios** – For making HTTP requests to the API  

### Development Tools
- **Vite** – Next generation frontend tooling for faster development and optimized builds  
- **ESLint** – For code linting and maintaining code quality  
- **npm** – Package manager for JavaScript  

### API
- **Fake Store API** – RESTful API that provides product data for e-commerce websites  

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)  
- npm (v7 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/username/repo-name.git
cd store
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```
4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.
## Project Structure
├── public/              # Public assets
├── src/                 # Source files
│   ├── assets/          # Static assets
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── .gitignore           # Git ignore file
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── README.md            # Project documentation
└── vite.config.js       # Vite configuration


## License
MIT

## Acknowledgements
- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [React](https://reactjs.org/) for the amazing library
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [Bootstrap](https://getbootstrap.com/) for the responsive design framework