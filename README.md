## DnD Inventory and spell management

## Description

_Duration: 2 Week Sprint_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it? 

This is is designed to help a player character keep track of their inventory and spells they have equipped in a game of DnD. I have found when playing a game like Dungeons and Dragons having to keep track of your player sheet can be very tedious, having to erase and re-write things all the or using multiple area to not only write things down but always having to look the details of a spell or item up. 
I made all of that easier by making a place where you can keep all the stuff in your inventory or all your spells close by. I am pulling from an api to get the information about said spells or items so its just a click away to have the information at your finger tips to keep the game moving.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](https://thawing-headland-71456.herokuapp.com/#/home)

## Screen Shot

![screenshot](./Screen%20Shot%202022-08-09%20at%2010.45.24%20AM.png)
![screenshot](./Screen%20Shot%202022-08-09%20at%2010.45.39%20AM.png)

### Prerequisites



- [Node.js](https://nodejs.org/en/)
- Relational DB software

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `dnd_char_sheet`,
2. The queries in the `dump.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Create your character
2. Select character your planning on playing
3. Start keeping track of your items and spells
4. Click search items to be able to search for items and add them to inventory
5. Click manage spells to have the spells that are usable by your class level


## Built With

React
React-redux
Redux-sagas
Postgresql
passport
Material UI
Node.js
Express 
3rd party API (https://www.dnd5eapi.co/)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 
Edan for all of his lectures and teaching us 
Friends and family back home for making this possible

## Support
If you have suggestions or issues, please email me at joeylundquist91@gmail.com