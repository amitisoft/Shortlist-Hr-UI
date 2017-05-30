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
    Then I verify alert message "Successfully Upload"
    And I accept the alert
