# Balanced website

Our project is called Balanced, a productivity application  that aims to increase productivity levels for Ngee Ann Polytechnic Students. We adapted this concept from our Innovation Made Possible (IMP) Project and refined it to incorporate gamification to our application.

## Design Process

User Stories:

1. As a Ngee Ann Polytechnic student, I want to write down any errands or tasks I have for a certain day in a mobile application, so that I can easily refer to it for any Ngee Ann
   Polytechnic related tasks.

2. As a Ngee Ann Polytechnic student, I want a productivity app that allows me to focus on my tasks without feeling any stress, so that I can complete the tasks I have for a specifc
   day quicker.

3. As a Ngee Ann Polytechnic student, I want a productivity app that allows me to manage my time better in completing tasks that I have, so that I can submit tutorials and practicals
   on time without worrying about handing in overdue work.

4. As a Ngee Ann Polytechnic IT student, I want an app that allows me to test myself with concepts I have learn in class in a form of gamification, so that I can not only learn but find
   joy in the process of learning.

Acceptance Criteria:

1. - User can login to our Balanced app using their school email.
   - User can type in all of their tasks they have.
   - Tasks will be added to the main page.

2. - User can access our Music feature.
   - User can choose the genre of music that suits their liking.

3. - User can access our Timer feature.
   - Following the Pomodoro Technique, timer starts and reset every 25 minutes per session.

4. - User can access our Quiz feature.
   - User can choose the type of module that they want to be tested on.
   - A selection of questions will be shown and user will have to pick the correct answer based on the question displayed.
   - Answers will be updated onto our database to see how many of the questions students answered correctly/wrong.

You can access our wireframe for this project via this link: https://xd.adobe.com/view/3931e9b9-bdc4-4a92-ab7b-752d69c6e329-6c62/

## Features

### Existing Features

- To Do List - Students are able to write down what they want to do for the day, similar to a sticky note application.

- Music - Students are able to pick the genre of music they like to listen to based on the type of music our app offers.

- Timer - Part of our application that incorporate gamification where students will earn "coins" based on how many tasks they have completed. The more tasks completed, the more coins accumulated, allowing them to purchase in-game emoticons.

- Quizes - Part of our application that incoporate gamification to allow students to get tested based on what they learn with small quizes.

### Features Left to Implement

- An improvement to music - we hope to collaborate with Spotify in the future and provide greater source of music and songs.

- Scoreboard - To record whoever answers the most amount of quizzes correctly.

- Implement API to our quiz - To record the number of students who get the quiz's questions correct/wrong.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [HTML](https://www.w3.org/standards/)

  - The project uses **HTML** to create electronic documents (also known as pages) to display different elements in a browsor.

- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)

  - The project uses **CSS** to control the styling of HTML elements.

- [JS](https://www.javascript.com/)

  - The project uses **JS** to interact with users by adding dynamic behaviour and special effects to webpages.

- [JQuery](https://jquery.com)

  - The project uses **JQuery** to simplify DOM manipulation.

- [Bootstrap](https://getbootstrap.com/)
  - The project uses **Bootstrap** to support JavaScript plugins.

## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Sign-in Page:

   1. First enter the login page
   2. Try to submit an empty form and verify that an error message about the required fields appears
   3. Try to submit the form with an invalid email address and verify that a relevant error message appears
   4. Try to submit the form with all inputs valid and verify you are able to enter the main page of our app.

2. To Do List:

   1. Go to the "To Do List" page
   2. Click on the "+" icon on the top right and verify that a textbox appears in the middle of the screen
   3. Try to type a few words to verify that it inputs correctly
   4. Click on the "x" icon and verify that the textbox has been closed
   5. Click on the "+" icon in the textbox and verify that your input has been recorded on the "To Do List" page
   6. Click on textbox of your input and verify that the textbox has been deleted from the "To Do List" page.

3. Music:

   1. Go to the "Music" page
   2. Click on one of the genre and verify that it brings you to a page where the songs are located
   3. Click on all of the 3 icons at the bottom and verify that it allows you to skip to the previous song, pause or play the current song, and skip to the next song respectively

4. Timer:

   1. Go to the "Timer" page
   2. Click on the ">" icon and verify that it starts from 24:59
   3. Click on the curved arrow icon and verify that it resets back to 25:00
   4. After 25 minutes have past, ensure that a success message appears between the timer and the start and reset icons.

5. Quiz:

   1. Go to the "Quiz" page
   2. Click anywhere on the screen and verify that the questions have been displayed
   3. Click on "Quit" and verify that the quiz has stopped and return back to the main page of Quiz
   4. Click on a correct answer and vertify that a tick has been displayed
   5. Click on a wrong answer and verify that a cross has been displayed
   6. Verify that a "Good Job" message will be displayed after completion of quiz.

6. Settings:

   1. Click on the settings icon and verify that it brings you to the setting page
   2. Click on the various section of the setting page and verify that it brings you to the respective sections
   3. Click on the back arrow icon and verify that it brings you back to the last window you were in the app.

7. Contact form:

   1. Go to the "Contact Us" page
   2. Try to submit the empty form and verify that an error message about the required fields appears
   3. Try to submit the form with an invalid email address and verify that a relevant error message appears
   4. Try to submit the form with all inputs valid and verify that a success message appears.

8. Help:
   1. Click the "?" button
   2. Verify that a small textbox containing additional information on the respective features appears
   3. Click on any part of the screen and verify that it closes the "Help" feature.

Our application works according to the specifications we adjusted (for mobile devices) across browsors like Chrome, Microsoft Edge and Firefox.

## Credits

### Content

We mostly obtained help and resources via:

- https://www.w3schools.com/default.asp

### Media

- https://www.iconfinder.com/icons/435788/fast_forward_fast_forward_button_forward_forward_button_next_player_icon
- https://www.audiolibrary.com.co/kevin-macleod?page=4
- https://www.free-stock-music.com/ghostrifter-official-on-my-way.html

### Acknowledgements

I received inspiration for this project from these sources:

- https://www.w3schools.com/howto/howto_js_countdown.asp
- https://www.w3schools.com/howto/howto_js_todolist.asp
- https://www.w3schools.com/howto/howto_js_popup_form.asp
- https://www.youtube.com/watch?v=QTHRWGn_sJw
