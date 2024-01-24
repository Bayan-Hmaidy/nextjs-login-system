This project is a Full stack authentication project, consists of login, logout, signin, verification, and resetting password logic.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000/signup](http://localhost:3000/signup) with your browser to see the result.

### Navigations:
Signup page: http://localhost:3000/signup
Login page: http://localhost:3000/login
Account page: http://localhost:3000/account

### Technologies and packages useds:
1. Next JS
2. Tailwind
3. bcryptjs
4. axios
5. nodemailer
6. MongoDB and mongoose
7. jsonwebtoken

**Notes:** 
1. Default users are added.
2. You need to set your own MONGODB_URI environment variable.

### I aspired for more but faced limitations due to time constraints, including:
1. Enhance pages styles.
2. Add unit tests.
3. Add more details in account page (using user data).
4. Allow user to login using social authentication.
5. Handle errors when user try to signup with existing user data, or log in with non-existing data.
6. Enable Verification and resetting password feature.