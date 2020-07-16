# Welcome to MakersBnB

![](https://i.imgur.com/ox2z9rf.png)

## Project Aim

To create a basic clone of AirBnb in a team using a Javascript frontend and Node.js backend.

## Screen recording – Signup & Login

[Click here]()

## How To Use

1. Install Node and NPM
2. Install Postgresql
3. Clone repository
4. Run `npm install`
5. Create `makersbnb` database
6. Create tables detailed in db/migrations directory
7. Run `npm start`
8. Navigate to `localhost:3000`

## User Stories

### MVP

```
- [x] As a User
So I can access my account
I would like to be able to sign in

- [x] As a User
So I can view other spaces
I would like to be able to sign up

- [x] As a User
So I can view other spaces
I would like there to be a list of available spaces

- [x] As a User
So I can list my own space
I would like there to be a feature to list my space

- [x] As a User
So I can stay in an available space
I would like to be able to book an available space for a night

- [x] As a User
So there are no double bookings
I would like nights for which a space has already been booked to not be available for users to book that space
```

### Additional

```
- [x] As a User
So no one else can access my account
I would like to be able to sign out

- [x] As a User
So prospective visitors can get a better description of my space
I would like to be able to provide a name, description and price per night for my listed space

- [ ] As a User
So I can specify when my place is available
I would like to be able to specify the range of dates in which the space is available

- [ ] As a User
So I can approve who will stay at my space
I would like to be able to approve or deny a booking

- [x] As a User
So I can list more than one space
I would like to be able to list multiple spaces
```

## Challenges With This Project

- Learning an entirely new framework in 5 days no experience in asynchronous programming.
- We encountered an issue with the order functions were run in. This was due to asynchronocity with Javascript. We overcame this through the use of labelling functions as async functions using `await` and `.then()` keywords.
- We were unable to implement CSS styling with `.jade` files and instead opted to use static html. We were then unable to display javascript variables and instead decided to changed the rendering engine to `.ejs`.

## Teamwork

- We scheduled a daily standup from 10:00 - 10:30 every morning in which we discussed our current progress in the features we were working on as well as laid out our goals for the remainder of the day.
- We scheduled a meeting after every significant milestone in order to consolidate our work and work through merging conflicts
- In the final stages of the project, we worked collectively on certain issues.
