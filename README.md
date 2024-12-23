## Suuq.io
Welcome to Suuq.io – the ultimate online marketplace where YOU can buy, sell, and showcase products, services, and creative content! 🚀 Powered by YOU, our vibrant community of users, Suuq.io lets individuals and businesses effortlessly create listings, upload products, and engage with a dynamic network of buyers and sellers. Whether you're looking to score awesome deals, promote your brand, or simply connect with like-minded people, Suuq.io has everything you need – and it's super easy, secure, and fun to use! Let’s make something amazing happen together! 🌟

### Features

***User-Generated Listings:*** Sellers can create and manage their own product and service listings.
***Secure Payment Gateway:*** Safe transactions between buyers and sellers.
***Ratings and Reviews:*** Buyers can leave feedback on products and services to help others make informed decisions.
***Search and Filter:*** Powerful search functionality with advanced filters to find exactly what you're looking for.
***Personalized Accounts:*** Users can manage their profile, view transaction history, and track purchases or sales.
***Responsive Design:*** Fully optimized for desktop and mobile devices, providing a seamless experience on any platform.

### Technologies Used

***Frontend:*** Vue 3, TypeScript, Vite
***Backend:*** Node.js, Express
***Database:*** DynamoDB, Pinecone
***Cloud:*** AWS (Lambda, S3, API Gateway)
***Authentication:*** JWT-based authentication
***Payment:*** Integrated secure payment gateway (e.g., EVC, eDahab, Stripe or PayPal)

### Directory Structure
The structure of the project is organized as follows:

        src
        ├── App.vue
        ├── assets
        ├── components
        ├── controllers
        ├── layouts
        ├── main.ts
        ├── models
        ├── router
        ├── services
        ├── store
        ├── styles
        ├── utils
        └── views
            ├── auth
            ├── products
            ├── search
            └── users

        amplify
        ├── auth
        ├── backend.ts
        ├── data
        ├── package.json
        └── tsconfig.json


### Breakdown of Key Directories:
***assets/:*** 
Static assets such as images and CSS files.
***components/:*** 
Vue components used across different views.
***controllers/:*** 
Logic to handle orders, products, search, and user-related operations.
***layouts/:*** 
Vue layout components for different page structures.
***models/:*** 
TypeScript models for data structures like order, product, review, and user.
***router/:*** 
Vue Router setup and routing logic.
***services/:*** 
API and service integrations.
***views/:*** 
Views for different sections of the app, such as authentication, products, and user profiles.
***amplify/:*** 
AWS Amplify configuration files.

### Getting Started
To get started with Suuq.io, follow these steps:

### Prerequisites
Node.js and npm installed on your local machine.
AWS account and access to the necessary services (Lambda, DynamoDB, S3, etc.).
A modern web browser.

Clone the Repository

        git clone https://github.com/mhassan72/app.git
        cd app

### Install Dependencies
Install the required dependencies:
        
        npm install

### Set Up Environment Variables
Create a .env file in the root directory and add your environment variables. Example:
        
        AWS_REGION=eu-west-2
        DYNAMODB_TABLE=Products
        JWT_SECRET=your_secret_key
        PAYMENT_GATEWAY_API_KEY=payment_gateway_api_key

### Run Locally
To run the application locally for development:
        
        npm run dev

The application will be available at http://localhost:3000.

### Deployment
Deploying to AWS
You can deploy Suuq.io to AWS using the following steps:

Set up your AWS credentials and IAM roles for Lambda, DynamoDB, and S3.
Deploy the backend services (Lambda functions) to AWS.
Deploy the frontend (Vue.js app) to an S3 bucket or a CDN (e.g., CloudFront).
Continuous Integration / Continuous Deployment
We use GitHub Actions to automate the deployment process. On every push to the main branch, the app will be automatically built and deployed.

