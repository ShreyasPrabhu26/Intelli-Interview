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

## Key Features

1. **AI-Powered Interviews**:
   - Utilizes the Gemini API to generate and assess interview questions.
   - Provides smart feedback based on the user's performance and understanding.

2. **User-Friendly Interface**:
   - Built with Next.js and React for a fast, responsive, and modern web experience.
   - Clean and intuitive UI to help users focus on improving their interview skills.

3. **Authentication and Authorization**:
   - Implements secure login and user session management with Clerk.
   - Ensures that only authenticated users can access the interview functionality.

4. **Theme Customization**:
   - Supports customizable themes with dark and light modes for user preference.
   - Seamless transition between themes to enhance user experience.

5. **Open-Source**:
   - Encourages community contributions to continuously improve the application.
   - Well-structured codebase with comprehensive documentation to assist new developers.

## Benefits

1. **Effective Interview Preparation**:
   - Offers a realistic mock interview experience using AI-driven questions and assessments.
   - Helps users refine their interview skills and build confidence.

2. **Personalized Feedback**:
   - Provides feedback focused on the content and intent of answers, allowing users to improve where it matters most.

3. **Responsive Design**:
   - Fast and responsive application, optimized for various devices and screen sizes.
   - The user interface is designed to be both accessible and modern.

4. **Extensible**:
   - Open-source nature allows for future expansion of features and easy integration of new capabilities.
   - Scalable architecture to support a growing user base.

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
