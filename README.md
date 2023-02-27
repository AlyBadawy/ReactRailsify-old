# README

This Rails application is a demonstration of how to create a Rails application with a React front-end. Additionally, it includes various technologies, including Redux Toolkit Query, JWT, and CORS.

The purpose of creating this application (repository) is to show and document the process of building and including all the packed technologies in this app.

## Getting Started

Before getting started with the application, ensure that you have the following installed on your system:

- Ruby 3.2.0
- Rails 7.0.4
- Node.js 19.6.1
- Yarn 1.22.19

To get started, clone the repository and install the dependencies:

```
git clone git@github.com:AlyBadawy/ReactRailsify.git
cd ReactRailsify
bundle install
yarn install
```

Next, you need to set up the database. Run the following command to create the database and run the migrations:

```
rails db:create db:migrate
```

## Running the Application

To start the Rails server, run the following command:

```
bin/dev
```

This will start the server on `http://localhost:3000`.

## Technologies

This application includes the following technologies:

### Redux Toolkit Query

This application uses Redux Toolkit Query to handle data fetching and caching. You can find the code for Redux Toolkit Query in `app/javascript/store/store.ts`.

### JWT

This application uses JSON Web Tokens (JWT) to authenticate users. You can find the code for JWT in `app/helpers/auth_helper.rb`.

### CORS

This application uses Cross-Origin Resource Sharing (CORS) to allow requests from different domains. You can find the code for CORS in `config/initializers/cors.rb`.

## Wiki

Please use the wiki page of this repository to find detailed explanation for the usage and implementation of these technologies and the building process of this application

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Please include detailed information about the changes you made and why they were made.

## License

This application is released under the MIT License. See the `LICENSE` file for more information.
