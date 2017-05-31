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
    And I click register button
    Then I verify alert message ""Successfully inserted data""
    And I accept the alert

  @VerifyCandidate
  Scenario: HR can verify the registered candidate in the application
    Given I am on candidate data page
    Then I verify the candidateName "Rajni kanth"
    And I verify the email "Rajnikanth_007@gmail.com"
    And I verify the mobileNo "1234567890"

  @SearchCandidate
  Scenario: HR can search the candidate in the application
    Given I am on candidate data page
    When I type the candidate FirstName "Rajni" and search
    Then I verify the searched candidate "Rajni kanth"
    When I type the candidate LastName "kanth" and search
    Then I verify the searched candidate "Rajni kanth"
    When I type the candidate email "Rajnikanth_007@gmail.com" and search
    Then I verify the searched candidate "Rajni kanth"
    When I type the candidate phoneNumber "1234567890" and search
    Then I verify the searched candidate "Rajni kanth"

  @EditCandidate
  Scenario: HR can Edit the candidate details in the application
    Given I am on candidate data page
    When I type the candidate FirstName "Rajni" and search
    When I click edit for candidate
    Then I verify the candidate firstname "Rajni"
    And I verify the candidate lastname "kanth"
    And I verify the candidate email "Rajnikanth_007@gmail.com"
    And I verify the candidate PhoneNumber "1234567890"
    When I change the candidate phoneNumber "3214569870"
    And I change the candidate email "Kanth_Rajni@amiti.com"
    And I change the candidate LastName "Bond"
    When I click update button
    Then I verify alert message ""Successfully updated data""
    And I accept the alert
    When I click candidate data tab
    Then I verify the updated data of Rajni
      | fName  | Rajni                 |
      | lName  | Bond                  |
      | email  | Kanth_Rajni@amiti.com |
      | phNo   | 3214569870            |

  @CancelEditCandidate
  Scenario: HR can cancel editing the candidate
    Given I am on candidate data page
    When I type the candidate email "mail1@amiti.in" and search
    When I click edit for candidate
    When I change the candidate phoneNumber "0000000000"
    And I change the candidate email "changed@email"
    And I change the candidate LastName "changed"
    And I click cancel button
    Then I verify the updated data of Rajni
      | fName  | Rajni                 |
      | lName  | Bond                  |
      | email  | Kanth_Rajni@amiti.com |
      | phNo   | 3214569870            |

  @DeleteCandidate
  Scenario: HR can delete the candidate
    Given I am on candidate data page
    When I click delete for candidate ""
    Then I verify alert message ""
    And I accept the alert
    Then I verify the searched candidate ""
    When I click candidate data tab
    Then I verify the candidate is deleted


