# Lab 8 - Starter
*Question 1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.*

1. Within a Github action that runs whenever code is pushed 
2. Manually run them locally before pushing code
3. Run them all after all development is completed

Answer: I would fit my automated tests in my Recipe project within a Github action that runs whenever code is pushed because you can make github actions run automated tests everytime code  is pushed into the Github repository. 
<br>
<br>
*Question 2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)*

Answer: No I would not use an end to end test to check if a function is returning the correct output because an end to end test is supposed to emulate user actions in order to determine if the program runs smoothly. Unit Testing would be much for suitable to check if a function is return the correct output or not. 
<br>
<br>

*Question 3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.*

Answer: No I would not use a unit test because the message feature requires user interaction, which is not suitable to test with unit testing. Unit testing is more suitable for testing specific code functionalities. 
<br>
<br>

*Question 4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.*

Answer: Yes I would use a unit test to test this functionality because it only checks a specific funtionality of the code that prevents the user from typing more than 80 characters and doesn't overlap much with other functionalities. 