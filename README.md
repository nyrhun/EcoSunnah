# Project Name : EcoSunnah

EcoSunnah is a web-based e-commerce platform featuring halal, eco-friendly, and sustainable products. The project provides users with a platform to browse product categories, view product details, manage shopping cart items, and proceed through a checkout process.
The website is developed using HTML, CSS, and JavaScript, with AJAX for asynchronous data loading and form submissions. A Node.js and Express backend handles server-side requests and contact form submissions.

## Features

- Product Browsing: Browse products across different categories.
- Dynamic Product Loading: Retrieve and display product information from a JSON file using AJAX.
- Category Filtering: Filter products based on their respective categories.
- Shopping Cart: Add, remove, and manage selected products.
- Checkout: Review cart items and complete the checkout form.
- Contact Form: Submit enquiries through asynchronous form submission without reloading the page.
- Responsive Design: Adapt the website layout to different screen sizes.

## Technologies Used

- **HTML5**: Structure and content of web pages
- **CSS3**: Website styling and responsive layouts
- **JavaScript**: Client-side functionality and interactivity
- **jQuery**: DOM manipulation and AJAX requests
- **JSON**: Storage and retrieval of product information
- **Node.js**: Server-side runtime environment
- **Express**: Backend routing and request handling
- **CORS**: Cross-origin resource sharing configuration

## Project Structure

The project consists of the following files:

1. `ecoSunnah_index.html`: Homepage of the website.
2. `ecoSunnah_aboutUs.html`: About Us page with information about the project.
3. `ecoSunnah_contact.html`: Contact Us page with AJAX-powered form submission.
4. `ecoSunnah_cart.html`: Shopping cart page to review added items.
5. `ecoSunnah_checkout.html`: Checkout page to complete the purchase.
6. `ecoSunnah_products.html`: Products will be loaded here dynamically with a filter product function based on category of the products.
7. `ecoSunnah.js`: JavaScript logic for cart functionality, dynamic product loading, and form handling.
8. `ecoSunnah.css`: CSS for styling the project.
9. `ecoSunnah_products.json`: JSON file containing product details.
10. `ecoSunnah_server.js` sets up the backend server, handles routes, and manages API requests.
11. `node.js` handles the server-side logic, manages product data, and facilitates contact form submissions.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- Visual Studio Code (recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nyrhun/EcoSunnah.git
   ```

2. Navigate to the project directory:

   ```bash
   cd EcoSunnah
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the Project

1. Start the backend server:

   ```bash
   node src/ecoSunnah_server.js
   ```

2. Open the website through the configured local server address.

   Alternatively, use the Live Server extension in Visual Studio Code to preview the frontend, provided the required backend services are running separately.

3. Navigate through the available pages to explore the website's features.

## Main Website Pages

| Page | Description |
|---|---|
| Home | Displays the website's main content and featured products. |
| About Us | Provides information about EcoSunnah. |
| Products | Displays available products with category filtering. |
| Cart | Allows users to review and manage selected items. |
| Checkout | Provides the checkout form and order summary. |
| Contact Us | Allows users to submit enquiries through a contact form. |

## Contact

For enquiries or further information:

- **Email:** nuwairahhanan@gmail.com
- **GitHub:** [nyrhun](https://github.com/nyrhun)
