# Client for Games-Library App

[Games Library Deployed Site](https://patoday.github.io/game-library-client/)

The Games Library app is designed to allow users to input games they own into a database, allowing centralized storage for the games library, whether it's physical or digital copies of their games. That way if you have things packed away or in storage and you're out somewhere and see a deal that's almost too good to pass up, you can check the app and see if it's something you already own, but forgot about.

# Technologies Used

  * JavaScript
  * jQuery
  * AJAX
  * HTML
  * GitHub
  * Atom
  * CSS/SASS
  * Bootstrap
  * Handlebars
  * Bash/Terminal
  * Google Chrome

# Games Library API Links

[Games Library GitHub Repo](https://github.com/PatODay/games-library-api)
[Games Library Heroku Page](https://games-library-api.herokuapp.com/)

# Development Process

This is my first full-stack project, and I wasn't sure what to expect. I came into this project with a clearly defined idea of what I wanted v1 of this app to be. I started out by writing user stories and drawing wireframes. During the development process I started out by first getting this client-side app, and the backend API deployed. For the clint-side app, handlebars made the majority of the work incredibly easy, and some of the JS work I had done prior on my Tic Tac Toe game was very useful in a quicker, successful build of this app. I was very pleased with how smooth the development went for v1 of this app, the biggest challenge I feel that I'm facing with this would be the design/styling of the page.

# Wireframes

[Wireframes](https://i.imgur.com/XWHdA4L.jpg)

# User Stories
1. User stories: As an unregistered user I would like to be able to sign up for an account
  * Once signed up I would like to be able to sign in to my account
  * Once signed in I would like the option to change my password
  * I want to be able to sign out of my account and none of my form data is retained by the page

2. As a registered user I would like to be able to add games to the database
  * I want my games data accessible only to me (UPDATE/DELETE)

3. As a registered user I would like to be able to see what games I have within the database
  * I would like to be able to delete a game when the games index is returned to me

4. As a registered user I would like to be able to update my games in the database

# Future Iterations

In the future, I will continue to work on styling, that aspect will be a continual work-in-progress. Other features I hope to add/incorporate in future iterations:
  * A join table to link games and users to consoles/platforms
  * Instead of entering form field data to edit a game, add a button to edit the text on return, similar to the delete function.
  * Incorporate 3rd party API's to track user game data, such as time played, trophies/achievements etc.
