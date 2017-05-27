Feature: HR can upload the Candidates data
  As a user of Candidate Shortlisting Application
  I should be able to use Candidate Dashboard
  In order to upload candidates data

  @UploadData
  Scenario: HR can upload the candidates data to the application
    Given I am on candidate data page
    When I click on upload candidate button
    And I add the candidates data file directory
    And I click Upload
    Then I verify alert message "Successfully Upload"
