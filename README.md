# 🔒 Nodejs Authentication Template 🔒

 This template provides a quick back-end Node.js / Express server connected to a MongoDB Atlas cluster for application authentication and route protection

---
## Features 📢
- Supports `/register` and `/login` routes for authentication
- JWT integrated
- bcrypt to hash passwords for storing in MongoDB
- Protected routes example for `/posts`
---
## Get started 📓
1. Clone the repo  
`git clone https://github.com/mystikdeveloped/node-auth-template.git`  

2. Install dependencies
`npm install`

3. Edit the .env file for your MongoDB cluster and JWT token secret you wish to use

4. Run `npm start` to launch the backend

---

## Testing ✔️
You can test your deployment by making the following requests from Postman.
### Register:
```
POST http://localhost:5000/api/users/register 
Postman Body:
{
    "firstName": "First",
    "lastName": "Last",
    "email": "email@email.com",
    "username": "username",
    "password": "password"
}
```
This will return your MongoDB response via a `res.send(savedUser);` response from auth.js
 
### Login:
```
POST http://localhost:5000/api/users/login 
Postman Body:
{
    "email": "email@email.com",
    "password": "password"
}
```
This will create a JWT token after validating the email exists and password matches, append it to the header, and send a response to show the token

### Posts (protected route):
```
GET http://localhost:5000/api/posts 
Postman Headers:
- Key: auth-token
- Value: token response from login post request
```
This will return sample posts data in a json format if you are successfully authenticated, otherwise you will see Access Denied.

---
## Moving ahead ▶️
This back-end gives you everything you need to easily connect to a front-end of your choice. The opportunities are endless 🌐😄