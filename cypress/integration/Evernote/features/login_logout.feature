Feature: Login via Evernote portal page

    Scenario: Unssuccessful login using email
    Given I access the Evernote portal page
    When I enter a username
    And I enter an invalid password password123
    And I click on the login button
    Then I should be logged in unsuccessfully

    Scenario: Successful login using email
    Given I access the Evernote portal page
    When I enter a username
    And I enter a password
    And I click on the login button
    Then I should be logged in successfully

    Scenario: Login and write a note followed by a logout 
    Given I access the Evernote portal page
    When I enter a username
    And I enter a password
    And I click on the login button
    And I create a new note
    And I log out
    Then I should be logged out successfully

    Scenario: Login again and open the newest note 
    Given I access the Evernote portal page
    When I enter a username
    And I enter a password
    And I click on the login button
    And I open the newest note
    Then The newest note should be opened