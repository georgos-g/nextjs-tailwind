## Description

The frontend of this project was built with Next.js, a React framework for building server-rendered applications. It provides a powerful and flexible development experience for creating modern web applications.

The (Headless) CMS used in this project is Strapi, an open-source headless CMS that allows you to build and manage your own APIs. Strapi provides a user-friendly interface for creating content structures and managing content for your application.

I've used Tailwind CSS as the CSS framework for this project. Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined utility classes, enabling rapid UI development and easy customization.

The backend of this project is integrated via GraphQL. GraphQL is a query language for APIs and a runtime for executing queries with your existing data. It offers a flexible and efficient approach to retrieve and manipulate data from the backend server.

## Installation

1. Clone the repositorsy:

   ```shell
   git clone https://github.com/georgos-g/nextjs-tailwind

    Install dependencies:
    cd project-folder
    npm install
   ```

2. Configure the environment variables:

   ### Frontend:

   add the environment variables in .env.local file for the frontend:

   #### STRAPI_GRAPHQL_ENDPOINT=

   #### NEXT_PUBLIC_API_ENDPOINT=

   ### Backend:

   Configure the necessary environment variables for your Strapi CMS and GraphQL server.

3. Run the project:

   ```shell
   npm run dev
   ```
