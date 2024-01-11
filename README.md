Overview:
The Stadium Ticket Booking System is a web application developed to facilitate the booking of tickets for sports tournaments. It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and incorporates Tailwind CSS 3.0 for a sleek and responsive frontend design.

Project Highlights
Frontend Design with Tailwind CSS 3.0: Implemented a visually appealing and responsive frontend using the latest version of Tailwind CSS.

Scalable MongoDB Operations:

Concurrent Requests: Engineered the system to handle up to 500 concurrent requests to MongoDB Atlas, ensuring seamless basic CRUD (Create, Read, Update, Delete) operations.
User Database Scalability: The MongoDB database is designed to accommodate up to 5000 users, with the potential for 100% scalability by efficiently handling requests concurrently.
Secure User Operations:

User Registration: Implemented a secure user registration process with encryption and hashing.
Ticket Booking and Cancellation: Ensured the security of ticket-related operations, including booking and cancellation.
Authorization Security: Integrated robust authorization mechanisms to safeguard sensitive functionalities.
Password Hashing and Salting:

Utilized the bcrypt library for secure password hashing and salting, enhancing user account security.
Technologies Used
MongoDB: NoSQL database for efficient and scalable data storage.
Express.js: Web application framework for Node.js, facilitating backend development.
React.js: Frontend library for building dynamic and user-friendly interfaces.
Node.js: Server-side JavaScript runtime for building scalable and performant applications.
Tailwind CSS 3.0: A utility-first CSS framework for designing modern and responsive interfaces.
bcrypt.js: Library for secure password hashing and salting.
Getting Started
To run this project locally, follow these steps:

Clone the repository.
git clone https://github.com/Utkarsh13-ray/stadium-ticket-booking.git

Install dependencies.

cd stadium-ticket-booking
npm install

Set up MongoDB Atlas and configure the connection string in the application.

Start the development server.
npm start
Open your browser and navigate to http://localhost:3000 to access the ticket booking portal.

Contributions and Contact
If you have suggestions, enhancements, or would like to contribute, feel free to reach out. Contact us at utkarshswivedi130903@gmail.com

License
This project is licensed under the MIT License.
