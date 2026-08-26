# Todo Backend API / CRUD API
A simple CRUD backend build with **NodeJS**, **ExpressJS** and **MongoDB**. This project demostrates how to structure a backend app with routes, controllers, models and middleware.

## 📂 Project Structure
- `server.js` → Entry Point
- `/config` →  Database Connection
- `/routes` → API Endpoints
- `/controller` → Main/Bussiness Logic
- `/models` → Database Schema
- `/middleware` → Error Handling

## ⚙️ Tech Stack 
- NodeJS + Express
- MongoDB + Mongoose
- Thunder Client (for testing)

## 🚀 Features
> Version 1.0.0
- Create, Read, Update, Delete todos (CRUD Operations)
- Centralized error handling
- Clean folder structure

> Version 1.2.0
- Add Authentication (JWT)
- Add Register/Login Logout Features.
- Add Protected Routes for Todos (only accessible to authenticated users)
- Add User Model and Todo Model with Mongoose
- Add Validation for User Registration and Login
- Upgrade Schema of Todo
- Add User-Todo Relationship (One-to-Many)


## 🧪 Tests
 > Main Purpose of this project is to demonstrate a clean folder structure and CRUD operations. You can test the API using **Thunder Client** or **Postman**.
Here are some tests you can perform to verify the functionality of the API:

### Test 1 — Server & API
**Purpose:** Verify that the Express API is running correctly.
**Request:**
```
GET http://localhost:5000/
```
**Expected Response:*
```json
{  
    "message": "API is running" 
}
```

**Result:** If you receive the expected response, it indicates that the server is running and the API is accessible. PASSED ✅

---

### Test 2 — User Sign-Up/Register
**Purpose:** Verify that the user registration endpoint is working correctly.

**Request:**

```
POST http://localhost:5000/api/auth/signup
```

``` json
{
  "name": "TestUser",
  "email": "test@example.com",
  "password": "password123"
}
```

**Expected Response:**

```text
200 OK
```
```json
{  
    "message": "User registered successfully" 
}
```

**Result:** If you receive the expected response, it indicates that the user registration endpoint is working correctly. PASSED ✅

---
### Test 3 - User Login/Sign-In
**Purpose:** Verify that an existing user can successfully log in and receive a JWT.
**Request:**

```http
POST http://localhost:5000/api/auth/login
```

**Body:**

```json
{
    "email": "test@example.com",
    "password": "TestPassword123"
}
```

**Expected Response:**

```json
{
    "_id": "...",
    "username": "TestUser",
    "email": "test@example.com",
    "token": "JWT_TOKEN"
}
```
**Result:** If the request is successful and returns the expected data, it indicates that the protected route is functioning correctly. PASSED ✅

---

### Test 4 - Protected Route With Valid JWT

**Purpose:** Verify that an authenticated user can access protected Todo routes.

**Request:**

```http
GET http://localhost:5000/api/todos
```

**Authorization:**

```text
Bearer <VALID_JWT_TOKEN>
```

**Expected Result:**

```text
200 OK
```

The API should return the user's Todo data.

**Result:** If the request is successful and returns the expected data, it indicates that the protected route is functioning correctly. PASSED ✅

---

### Test 5 - Protected Route Without Token

**Purpose:** Verify that unauthenticated users cannot access protected routes.

**Request:**

```http
GET http://localhost:5000/api/todos
```

**Authorization:**

```text
No Auth
```

**Expected Response:**

```json
{
    "message": "Not authorized, no token"
}
```

**Expected Status:**

```text
401 Unauthorized
```

**Result:** If the request is denied with the expected response, it indicates that the protected route is functioning correctly. PASSED ✅

---

### Test 6 - Logout

**Purpose:** Verify that the logout endpoint is available and responds correctly.

**Request:**

```http
POST http://localhost:5000/api/auth/logout
```

**Expected Response:**

```json
{
    "message": "User logged out successfully"
}
```

**Expected Status:**

```text
200 OK
```

**Result:** If the request is successful and returns the expected data, it indicates that the logout endpoint is functioning correctly. PASSED ✅

> **Note:** The current logout implementation is a simple JWT logout endpoint. Because JWTs are stateless, the server does not invalidate an already-issued token. The client must remove the stored token. Server-side token revocation can be implemented later using refresh tokens or a token blacklist.

---

### Test 7 - Protected Route With Invalid JWT

**Purpose:** Verify that the API rejects malformed or invalid JWTs.

**Request:**

```http
GET http://localhost:5000/api/todos
```

**Authorization:**

```text
Bearer this-is-a-fake-token
```

**Expected Response:**

```json
{
    "message": "Not authorized, invalid token"
}
```

**Expected Status:**

```text
401 Unauthorized
```

**Result:** If the request is denied with the expected response, it indicates that the protected route is functioning correctly. PASSED ✅

---

## Test Summary

| # | Test         | Expected Result            | Status |
| - | ------------ | -------------------------- | ------ |
| 1 | Server & API | API responds               | PASS   |
| 2 | User Login   | JWT returned               | PASS   |
| 3 | Valid JWT    | Protected route accessible | PASS   |
| 4 | No JWT       | `401 Unauthorized`         | PASS   |
| 5 | Logout       | Logout response returned   | PASS   |
| 6 | Invalid JWT  | `401 Unauthorized`         | PASS   |


## 🎯 Benefits
- Easy to extend (add auth, validation, etc.)
- Scalable and maintainable
- Beginner-Friendly CRUD example

## 🧑🏻‍💻 About Me
Created by **Syed Adil Hassan (@adil12hassan)**

📍Location: Faisalabad, Pakistan  <br>
💻 Intrests: Full Stack Development, UI/UX design, SaaS apps, web security <br>
📧 Contact: **[syedadilhassan06@gmail.com](mailto:syedadilhassan06@gmail.com)** <br>
🌐 GitHub: [adil12hassan](https://github.com/Adil-12-Hassan) <br>
🌏 Website / Blog App: [Official Website](https://code-with-hassan-phi.vercel.app) <br>
📞 Phone Number: +92 328 151 1293 <br>

Feel free to reach our for collaboration or question!
