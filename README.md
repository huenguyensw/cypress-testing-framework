# cypress-testing-framework
How to setup and run the project
1/ Environment setup: NodeJs, GitBash, VS code
2/ Clone the project "Cypress-testing-framework"
3/ Open the project on VS Code
4/ Setup the project by running command: npm install
5/ run the project by running command: npx cypress open

In  my project, I created UI and API tests in which
1) UI tests 
    Test case file in BDD format is located cypress\integration\Evernote\features\login_logout.feature
    Steps definition file is located cypress\support\step_definitions\login-logout-steps.js
    Tests are covered: 
        Unsuccessful login using email
        Successful login using email
        Login and write a note followed by a logout
        Login again and make sure you open the note create in step 3
2) API tests
    cypress\integration\Evernote\API_Testing\create_note.js
    Test is covered: create a note on evernote.com