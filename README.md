# Shoparize

This repository is an assignment for implementing a products list, consists of a Reactjs application, alongside with a PHP/Lumen for server-side.


&nbsp;

## How to run locally

### With Docker (recommended)

You should have **`docker`** and **`docker-compose`** installed on your machine.

Clone the project

```bash
  git clone https://github.com/arminetemadi/shoparize.git
```

Go to the project directory

```bash
  cd shoparize
```

run with `docker-compose`

```bash
  docker-compose up
```
**note:** You can use **`-d`** to run the process in background. 

Access the application on `http://localhost:3001`

&nbsp;

### Without Docker

You should have **`php`**, **`composer`** and **`yarn`** installed on your machine.

Clone the project

```bash
  git clone https://github.com/arminetemadi/shoparize.git
```

Go to the project directory

```bash
  cd shoparize
```

Go to the server directory

```bash
  cd server/
```

Run the backend application:

```bash
  composer install
  php -S server:8001 -t public
```

Go to the web directory

```bash
  cd web/
```

Run the frontend application:

```bash
  yarn install
  yarn start
```

Access the application on `http://localhost:3000`


  
&nbsp;

## Deployment

To deploy this project run

For frontend application:

```bash
  yarn build
```

  
&nbsp;

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in **`web/`** directory (there is already an `env.example` file added for demonstration)

`REACT_APP_API_URL`

  
&nbsp;

## Features

- I implemented an infinite scroll style for products list page instead of typical pagination, since I thought it would be more user friendly (with all the filters and sorting it makes more sense in my opinion).

- I implemented product details as a `modal`, which opens when user clicks on a product card. I could also have it as a seperate page, and find the product by id in `csv` file (also by `page` parameter for a more optimized search in csv file), but it could be time consuming for the server. A better approach would be to store the data in a database and then query from it. Since the implementation time is limited, I went for a simple modal :)
  
## Tech Stack

**Client:** React, Styled-component

**Server:** PHP, Lumen

  
## Roadmap

If I had more time into implementing the assigment, I would go for the following items in order to improve my solution:

- Store CSV file data into a database for a better querying as well as caching the data alongside in a `redis` store (even using `ElasticSearch`)
- Optimize product list page in order to prevent lagging when too many items loaded with infinite scrolling, i.e. `virtual scroll` and `re-render optimizations`
- Improve browser compatibility
- Improve responsive design layout 
- Write tests for both sides
- Improve `linting`, pre-commit hook and better coding standards 
- Add a good `CONTRIBUTING.md` file
- Have `Dockerfile` and `docker-compose.yml` files for production.
- Add `Nextjs` for having server side rendering and better `SEO`
- Work on `Accessibility`
