Feature: HR can upload the Candidate data
  As a user of Candidate Shortlisting Application
  I should be able to use Candidate Dashboard
  In order to upload candidates data

  @UploadData
  Scenario: HR can upload the candidates data to the application
    Given I am on candidate data page
    When I click on upload candidate button
    And I add the data file directory
    And I click Upload
    Then I verify successful upload message