# pokeman
Project 3 Interactive MERN Stack Single-Page Application
# PokemAn - Pokemon Trading Card Game Discussion Board
PokemAn is a MERN-stack single-page application that serves as a discussion board for the Pokémon Trading Card Game. Users can create an account, log in, and participate in discussions with other users. The application allows users to post questions, share tips and tricks, and discuss the latest news about the Pokémon Trading Card Game.

# Concept:
* As a Pokémon Trading Card Game enthusiast, I want to join an online community where I can discuss strategies, trade cards, and connect with other players. 

## Acceptance Criteria
* I want to be able to create an account, log in securely, and see a personalized dashboard with my activity history.
* I want some kind of sorted Pokémon directory that groups the Pokémon by region.
* I want to be able to browse and search through a variety of threads and participate in the conversation by commenting.
* I also want to be able to create my own threads and edit or delete my own posts. 
* I want the website to be mobile-friendly, easy to navigate, and visually appealing.

## Technologies Used
1. React
2. GraphQL with Node.js and Express.js server
3. MongoDB with Mongoose ODM
4. JWT for authentication
5. Heroku for deployment

## Features
•	User authentication with JWT
•	Query and mutation functions for retrieving, adding, updating, and deleting data
•	Interactive user interface that responds to user input
•	Responsive design for mobile devices
•	Use of CSS-in-JS for styling with styled-components
•	Stripe payment platform integration for accepting charitable donations
•	PWA functionality with a web manifest and service worker for offline functionality

## Deployment
The application is deployed on Heroku and can be accessed at [insert deployed application link here]. The GitHub repository for the project can be found at https://github.com/fbdthree/project-3.

## Getting Started
* To run the application locally, follow these steps:
1.	Clone the repository to your local machine
2.	Navigate to the root directory and run npm install to install dependencies
3.	Navigate to the client directory and run npm install to install client dependencies
4.	Create a .env file in the root directory and add your MongoDB Atlas connection string and Stripe API key as environment variables
5.	Run npm run dev to start the development server
6.	Open your browser and navigate to http://localhost:3000 to view the application

## Future Development
*	Adding more features for user engagement, such as a live chat or private messaging system (which would work to facilitate card trades, price haggling).
*	Implementing more advanced search and filtering functionality for posts (giving you more freedom and ability to find the exact topic of discussion you would like to join or read).
*	Adding a grouping feature that allows the user to add the cards they have to their own collection to display them for other collectors to see (so that they could bid on them).
*	Adding more payment platform options for accepting donations or payments (maybe you could buy cards or merch from the site as well as working deals to procure cards from other users for money. Maybe a responsible gambling feature could be added for players who want to challenge each other to battles.).


## Credits
The development team for PokemAn includes Monica Pong, Braden Dawson and Jarrett Jennings. We would like to thank our instructor and teaching assistants for their guidance throughout the development process.
