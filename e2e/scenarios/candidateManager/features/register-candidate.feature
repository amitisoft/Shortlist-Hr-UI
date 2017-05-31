Feature: HR can register the Candidate
  As a user of Candidate Shortlisting Application
  I should be able to use Candidate Dashboard
  In order to Register the candidate

  @RegisterCandidate
  Scenario: HR can register the candidate in the application
    Given I am on candidate data page
    Then I verify Register button is disabled
    When I click on register candidate button
    Then I verify Register button is disabled
    When I add firstname "Rajni"
    Then I verify Register button is disabled
    When I add lastname "kanth"
    Then I verify Register button is disabled
    When I add email "Rajnikanth_007@gmail.com"
    Then I verify Register button is disabled
    When I add mobile number "1234567890"
    Then I verify Register button is disabled
    When I add address "Adress1\nAddress2"
    Then I verify Register button is enabled
    And I click register button
    Then I verify alert message ""Successfully inserted data""
    And I accept the alert

  @VerifyCandidate
  Scenario: HR can verify the registered candidate in the application
    Given I am on candidate data page
    Then I verify the candidateName "Rajni kanth"
    And I verify the email "Rajnikanth_007@gmail.com"
    And I verify the mobileNo "1234567890"
    #When I enter name "Rajnikanth_007@gmail.com" in search

  @SearchCandidate
  Scenario: HR can search the candidate in the application
    Given I am on candidate data page
    When I type the candidate FirstName "Rajni" in search field
    Then I verify the searched candidate "Rajni kanth"
    When I type the candidate LastName "kanth" in search field
    Then I verify the searched candidate "Rajni kanth"
    When I type the candidate email "Rajnikanth_007@gmail.com" in search field
    Then I verify the searched candidate "Rajni kanth"
    When I type the candidate phoneNumber "" in search field
    Then I verify the searched candidate "Rajni kanth"

  @EditCandidate
  Scenario: HR can Edit the candidate details in the application
    Given I am on candidate data page
    When I click edit for candidate ""
    Then I verify the candidate firstname ""
    And I verify the candidate lastname ""
    And I verify the candidate email ""
    And I verify the candidate PhoneNumber ""
    And I verify the candidate adress is empty
    When I change the candidate phoneNumber ""
    And I change the candidate email ""
    And I change the candidate LastName ""
    When I click register button
    Then I verify alert message "Successfully inserted data"
    And I accept the alert
    When I click candidate data tab
    Then I verify the updated data of candidate

  @DeleteCandidate
  Scenario: HR can delete the candidate
    Given I am on candidate data page
    When I click delete for candidate ""
    Then I verify alert message ""
    And I accept the alert
    Then I verify the searched candidate ""
    When I click candidate data tab
    Then I verify the updated data of candidate


