Feature: TestManager Dashboard

  @CreateTest
	Scenario: Creating the test with proper Data
  #  Given I am on the Dashboarda page
		When  I select the CREATE TEST button
	  And   I Enter email field
   # And   I verify
		When  I Enter Subject field
		And   I Enter Post Applied
		And   I Click on Bold Button
		When  I Enter Mail Body field
		#When  I verify bold
		When  I Select Exam category
		Then I verify
	#	Then I reset
	#	Then I verify Option field are empty
  #Then mail should be sent

#@managetest

	#Scenario: click on manage test
	#  Given I select the Manage TEST button
  #When I Select checkboxes
  #Then I click start
  #Then I verify


	#@resultmanager

	#Scenario: click on result manager
	  #Given I select the  result manager button
  #When I Select category
  #when I enter name and score
  #Then I click search
  #Then I verify










#Feature: TestManager Dashboard
   # As a user of Candidate Shortlisting Application
   # I should be able to use TestManager Dashboard
   # In order to Create and Manage Tests

    #Scenario: TestManager Dashboard view
       # Given I go to TestManager Dashboard
      #  Then I verify CREATE TEST link isPresent
      #  AND I verify MANAGE TEST link isPresent
		#AND I verify RESULT MANAGER link isPresent
		#AND I verify CREATE TEST form Template is Loaded by default
		#AND I verify Post Applied combo box items
	#	AND I verify Exam category combo box items

   # Scenario: Creating the test with proper Data
    #    Given I select the CREATE TEST button
   #     AND I Enter candidate Emails
	#	||||
	#	AND I  Enter Subject
	#	AND I  Enter Post Applied
	#	AND I  Enter Mail Body
	#	AND I  Select Exam category
	#	||||
	#	Then i verify selected categories
	#	When I click send Link
	#	Then mail should be sent

	#Scenario: Creating the test with missing Data and reset the data
     #   Given I select the CREATE TEST button
     #   AND I Enter candidate Emails
	#	||||
	#	AND I  Enter Subject
	#	AND I  Enter Post Applied
	#	AND I  Enter Mail Body
	#	When I click send Link
	#	Then Proper mesasage should be displayed
	#	When I click Reset Button
	#	Then Create Test form  fields should be empty

   # Scenario: Managing the test view
	#	Given Candidate details table
	#	And I verify start test option is disabled
	#	AND I verify Resend link is disabled
	#	AND I verify items in Category combobox
	#	AND I verify items in Category Select paper
     #   When I multi select Candidates
	#	AND I select category of the candidates
	#	AND I select paper for the candidate
    #    Then I verify start test option is enabled

   # Scenario: Verification of start test not enabled
	#	Given Candidate details table
   #     When I select Candidate
    #    Then I verify start test option is disabled
	#	When I select Category
    #    Then I verify start test option is disabled
    #    When I select Paper
    #    Then I verify start test option is enabled

    #Scenario: Starting the tests for the candidates
	#	Given candidate details table
    #    When I multi select the Candidates
	#	AND  I select Category
	#	AND I Select Paper
     #   Then I verify Start TEST button is enabled
	#	When I Select start test
	#	AND I verify test status changes for selected candidates
	#	AND I verify Resend link is enabled for selected candidates

    #Scenario: Resending the test link for the candidates
	#	Given candidate details table
    #    When I select Resend link
    #    Then I verify Link is resent to cadidate

    #Scenario: Resending the test link for the candidates
	#	Given candidate details table
    #   When I select Resend link
    #    Then I verify Link is re-sent to cadidate

   # Scenario: Result manager view verification
	#	Given Test Manager view
   #     When I Click Result Manager option
     #   Then I verify Candidate Result table isPresent

  #  Scenario: Sort Results by Category
	#	Given Result Manager view
    #    Then I Verify the category combo items
    #    When I Select an value for category
	#	Then I see 	the result of selected category

#	Scenario: Search Results by name OR score
#		Given Result Manager view
#        When I Enter the name in search box
#		Then I see 	the result of matching names
#		When I Enter the score in search box
#		Then I see the list of candidates macthing score
#		When I Enter the invalid text in search box
#		Then I see the no results found message

