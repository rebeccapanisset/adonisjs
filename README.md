# AdonisJS Class

This project was developed to learn about AdonisJS, following the Rocketseat classes.

## Used Technologies

* AdonisJS
* PostgreSQL
* Redis

## How to Install and Configure

* `git clone https://github.com/rebeccapanisset/adonisjs.git`
* Open the project folder `cd rocketseat-adonisjs`
* `yarn install` (installs all dependencies)
* Create and fill `.env` file according to the base file `.env.example`
* `adonis key:generate` (generates the application key)
* Create a PostgreSQL database named 'adonis'
* `adonis migration:run` (creates database tables)

## How to Execute

* `adonis serve` to start server, or `adonis serve --dev` to start the development mode
* `adonis kue:listen` (starts the kue manager)
