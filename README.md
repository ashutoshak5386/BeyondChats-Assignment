# BeyondChats - Chatbot Setup Workflow
Live Website Link :https://beyond-chats-assignment-delta.vercel.app/login
## Overview
BeyondChats is a chatbot company that provides an easy step-by-step process for setting up a chatbot for new businesses. This project implements a UI/UX workflow that guides users through the chatbot onboarding process.

## Features
### 1. User Registration
- Users enter their name, email, and password.
- Option to "Continue with Google" for seamless sign-in.
- Email verification process to ensure genuine registrations.

### 2. Setup Organisation
- Users provide their company name, website URL, and description.
- Automatic fetching of meta-description from the provided website URL (if applicable).
- Display of detected, scraped, and pending webpages using dummy data.
- Users can view scraped data chunks from any webpage.

### 3. Chatbot Integration & Testing
- **Test Chatbot**: Opens the client's website with a dummy chatbot.
- **Integration Options**:
  - Copy-paste a dummy code into the `<head>` of the website.
  - Send integration instructions via email to the developer.
- **Test Integration**: 
  - If successful, displays a success UI with confetti animation.
  - If unsuccessful, provides troubleshooting UI.

### 4. Post-Integration
- "Explore Admin Panel" button for further chatbot management.
- "Start talking to your chatbot" button.
- Social media sharing options.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/ashutoshak5386/BeyondChats-Assignment.git
   cd beyondchats
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

## Technologies Used
- **React.js** for UI development
- **Framer Motion** for animations
- **Lucide-react** for icons
- **CSS** for styling

## Contributing
Feel free to submit issues and pull requests to enhance the project.

## License
This project is licensed under the MIT License.

## Author
This assessment was created by Ashutosh Kumar.

