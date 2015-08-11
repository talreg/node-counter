Overview
=============
This is a simple web app that display a counter every time a request is made. 
it was created to test redis connection with node.

Requirements
----------
You'll need a redis server running on localhost.
You'll need nodejs express installed (version 10+).


Installing the app(local):
--------------
`npm install`

Running the app (local):
---------------
just run `npm start` inside the app directory after installing.

**Note:** you'll need redis server running on your localhost, or environment variable `REDIS_LOCATION` set to an open redis server (no authentication).


Running the app (docker):
-----------------------------
First, built the image: `docker build -t talreg/counter .`.

Then , to run the container, run `docker run -e "REDIS_LATION=192.168.0.4" -p 3000:3000 talreg/counter`
where 192.168.0.4 is replaced by your local redis container.

Running the app (compose):
-----------------------------
You can use `docker-compose start` or in order to refresh and run, use `docker-compose up -d`.
`stop` and `restart` also work from the same directory where the configuration file resides.
Note that here no redis configuration is needed, as redis is a part of the composing, and linked within the compose file directly (which is one of the great things of composer)

About the files
----------------
Dockerfile is used to build a docker image.
docker compose is used to run full service with redis (and then you don't need to run redis).

Installing compose:
use this link: https://docs.docker.com/compose/
