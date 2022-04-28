# Express-TypeScript-Boilerplate



# API Commune

## Prérequis :

L'application utilise Node.js installé à l'aide de [NVM](https://github.com/nvm-sh/nvm)
Installer [MongoDB](https://www.mongodb.com/docs/manual/installation/)

## Installation :

  Ouvrir un terminal à la racine du projet, puis :

```ts

npm  install

```

  

## Launch :

  

```ts

npm  start

```



# BDD

## Utilisateur :
username : string,
id : string,
email : string,
password : string,

## Actuateurs
type : enum,
id : string,
designation : string,
state : boolean

## Capteurs
type : enum,
designation : string,
id : string,
value : int | boolean,

# Endpoints

## Utilisateur :

| Query | URI | Query parameter | Description | Body |
|--|--|--|--|--|
| GET | /user | N/A | Returns all user | N/A |
| GET | /user/:id | N/A | Return an existing user | N/A |
| POST | /user | N/A | Post a new user | {...}:User |
| PUT(or PATCH) | /user/:id | N/A | Update an existing user | {...}:Partial\<User>
| DELETE | /user/:id | N/A | Delete an existing user | N/A
| POST | /user/login | N/A | Connect a user | {...}:User

## Actuateur :

| Query | URI | Query parameter | Description | Body |
|--|--|--|--|--|
| POST | /actuator | N/A | Post a new actuator | {...}:Actuator
| GET | /actuator | N/A | Get all actuator | N/A
 | GET | /actuator/:id | N/A | Get an existing actuator | N/A
 | PUT (or PATCH) | /actuator | N/A | Post a new actuator | {...}:Partial\<Actuator>
 | DELETE | /actuator/:id | N/A | Delete an existing actuator | N/A

## Capteur :
| Query | URI | Query parameter | Description | Body |
|--|--|--|--|--|
| POST | /sensor | N/A | Post a new capteur | {...}:Sensor
| GET | /sensor | N/A | Get all capteur | N/A
 | GET | /sensor/:id | N/A | Get an existing capteur | N/A
 | PUT (or PATCH) | /sensor | N/A | Post a new capteur | {...}:Partial\<Sensor>
 | DELETE | /sensor/:id | N/A | Delete an existing sensor | N/A








