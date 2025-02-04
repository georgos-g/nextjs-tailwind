## Description

The frontend of this project was built with Next.js, leveraging its SSR, ISR, and hybrid rendering capabilities to optimize performance, SEO, and scalability.

For content management, I work with Strapi, a flexible headless CMS that allows for efficient API structuring, role-based access control, and seamless content workflows.

On the frontend, I use Tailwind CSS to create clean, responsive UIs with a utility-first approach, ensuring maintainability and rapid development.

I integrate GraphQL with Apollo for efficient data fetching, enabling precise, declarative queries that minimize over-fetching and improve performance.

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
