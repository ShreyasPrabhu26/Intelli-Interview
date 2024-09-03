# **Welcome to Intelli Interviewer**

> This project is an AI-powered interview preparation platform built with Next.js. It provides users with mock interview sessions, analyzes their responses, and offers personalized feedback.

## Project Overview

Intelli Interviewer is a B2C web application designed to simulate interviews using AI. The platform provides a user-friendly interface where individuals can practice answering interview questions and receive detailed feedback on their performance.

The application includes the following core functionalities:

1. **User Registration and Authentication**:

   - Allows new users to sign up using Clerk authentication.
   - Supports login and session management with secure token handling.

2. **AI-Powered Mock Interviews**:

   - Users can start a mock interview session where AI generates interview questions.
   - The AI evaluates user responses based on intent and context, providing actionable feedback.
   

3. **Interview Feedback**:

   - Detailed feedback is given after each interview session, focusing on the intent and structure of answers rather than grammar.
   - Helps users improve their response clarity, depth, and confidence.


4. **Dark/Light Mode Theme**:

   - Users can switch between dark and light modes for a better user experience.
   - Smooth transition between themes using the `next-themes` library.


5. **Open Source and Community-Driven**:
   - The project encourages contributions from the community to help expand features and improve the platform.


## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js

# Installation Guide:

Clone the repository:

git clone [https://github.com/ShreyasPrabhu26/Intelli-Interview](https://github.com/ShreyasPrabhu26/Intelli-Interview)

Navigate to the project directory:

- cd Intelli-Interview

- Install dependencies:

- - npm install

- Create a .env file in the root of the project and add the following environment variables:

- - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
- - CLERK_SECRET_KEY=

- - NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
- - NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

- - NEXT_PUBLIC_DRIZZLE_DB_URL=

- - NEXT_PUBLIC_GEMINI_API_KEY=
- - NEXT_PUBLIC_NO_OF_INTERVIEW_QUESTION =

### Running the Application:

Start the Node.js application:

- npm run dev
