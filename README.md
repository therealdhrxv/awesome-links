# Awesome-Links

## About Project
Awesome-Links is a full-stack web application that allows users to browse through a curated list of links and bookmark their favorite ones. This README provides an overview of the project and instructions for contributing. This repository is open for **Hacktoberfest 2023!!**

## Features

- Browse and search for curated links.
- Bookmark favorite links for later reference.
- User authentication and authorization.
- Add new links to the curated list (admin functionality).
- Clean and responsive user interface.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js: [Download & Install Node.js](https://nodejs.org/)
- npm: Typically comes with Node.js installation
- PostgreSQL: [Download & Install PostgreSQL](https://www.postgresql.org/download/)

### Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/therealdhruv/awesome-links.git](https://github.com/therealdhruv/Awesome-Links.git)
   cd awesome-links
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   ```bash
   # Create a PostgreSQL database (if not already created)
   # Create a new `.env` file and add your database configuration.
   # It could look something like this:
   DATABASE_URL="postgresql://username:password@localhost:5432/dbname"

   # Run Prisma migrations to create tables:
   npm run prisma:migrate

   # Seed initial data (optional):
   npm run prisma:seed
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## Contributing

We welcome contributions from the community! To contribute to this project, follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/therealdhruv/awesome-links.git
   cd awesome-links
   ```

3. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/my-new-feature
   ```

4. Make your changes and commit them:

   ```bash
   git commit -m "Add a new feature"
   ```

5. Push your changes to your fork on GitHub:

   ```bash
   git push origin feature/my-new-feature
   ```

6. Create a pull request from your forked repository to the original repository.

7. Describe your changes and submit the pull request.

We'll review your contributions and merge them into the project if they align with our goals.

## Technologies Used
- Next.js
- Tailwind CSS
- Prisma
- GraphQL
- Apollo Client
- Auth0 Next.js SDK

## Known Issues
1. ```bash
   /bin/sh: pnpm: command not found
   ```
   This is because the `pnpm` package manager is not installed or not available in your system. You need to install it globally by running:
   ```bash 
   npm install -g pnpm
   ```
