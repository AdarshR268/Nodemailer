# Node.js Email Service

A simple Node.js backend service for sending OTP (One-Time Password) emails using Nodemailer.

---

## Features

- **Send OTP Emails**: Send OTPs to users' email addresses for verification.
- **CORS Support**: Built-in CORS middleware for cross-origin requests.

---

## Technologies Used

- **Node.js**: Runtime environment.
- **Express**: Web framework for handling HTTP requests.
- **Nodemailer**: Library for sending emails.
- **CORS**: Middleware for enabling cross-origin requests.

---

## Setup Instructions

### Prerequisites

1. **Node.js** (version 14 or higher)
2. **npm** (Node package manager)

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/AdarshR268/Nodemailer.git
cd Loan-Management-System



### Step 2: Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

---

### Step 3: Set Up Environment Variables

Create a `.env` file in the root of your project and add the following:

```env
# Gmail credentials for Nodemailer
GAPPMAIL=your-email@gmail.com
GAPSWD=your-gmail-app-password

# Server port (optional)
PORT=3000
```

Replace `your-email@gmail.com` and `your-gmail-app-password` with your Gmail credentials. 
---

### Step 4: Run the Server

Start the Node.js server:

```bash
npm start
```

The server will run at `http://localhost:3000`.

---

### Step 5: Test the API

You can test the API using tools like **Postman** .

#### API Endpoint

- **Send OTP Email**:
  - **URL**: `POST /send-otp`
  - **Request Body**:
    ```json
    {
      "email": "recipient@example.com",
      "otp": "1234"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "OTP sent successfully"
    }
    ```

---

## Deployment

You can deploy this service to platforms like:
- **Render**


Ensure you set the environment variables (`GAPPMAIL`, `GAPSWD`, etc.) in the production environment.

---

## Contact

For questions or feedback, please contact:
- **Adarsh R**
- **Email**: adarshofficial268@gmail.com
- **GitHub**: [AdarshR268](https://github.com/AdarshR268)

