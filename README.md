#flex Buy E-commerce Backend

This is the backend service for the e-commerce website built with Express.js and MongoDB.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/ecommerce-backend.git
    cd ecommerce-backend
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory with the following content:

    ```env
    MONGO_URI=mongodb://localhost:27017/your-database-name
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the development server**

    ```bash
    npm run dev
    ```

## Endpoints

- **Authentication**: `/api/auth`
- **Products**: `/api/products`
- **Cart**: `/api/cart`
- **Orders**: `/api/orders`

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note**: Replace `your-username`, `your-database-name`, and `your_jwt_secret` with your actual GitHub username, MongoDB database name, and JWT secret key respectively.
