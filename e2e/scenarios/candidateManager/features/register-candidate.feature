Feature: HR can register the Candidate
  As a user of Candidate Shortlisting Application
  I should be able to use Candidate Dashboard
  In order to Register the candidate

  @RegisterCandidate
  Scenario: HR can register the candidate in the application
    Given I am on candidate data page
    When I click on register candidate button
    And I add firstname "Rajni"
    And I add lastname "kanth"
    And I add email "Rajnikanth_007@gmail.com"
    And I add mobile number "1234567890"
    And I add address "Adress1\\nAddress2"
    And I click register button
    Then I verify alert message "Successfully Upload"
