Feature: HR can view and edit question manager dashboard
	As a user of Candidate Shortlisting Application
	I should be able to use Question Manager Dashboard
	In order to Create/Edit and Mange Questions

@CreateQuestion
Scenario: HR can create question by entering text
	Given I am on the Dashboard page
	When I click on question manager
	And I click on create Questions
	And I enter the question "Which of these keywords is used to refer to member of base class from a sub class?"
	And I enter multiple choice Answer
		| answers               |
		| upper                 |
		| super                 |
		| this                  |
		| None of the mentioned |
	And I select the check box for right choices
	And I select category "QA" from dropdown
	And I click on Add Button
  Then I Verify the success alert
  And I Verify the question count is updated to 4


#@CannotCreateQuestion
Scenario: HR cannot create question without selecting or entering required fields
	Given I am on the question manager module
	When I click on create question
	Then I verify Add button isdisabled
	When I add Quetion text
 	Then I verify Add button isdisabled
    When I add first answer choice
    Then I verify Add button isdisabled
    When I add all options
	Then I verify Add button isdisabled
	When I select category "QA" from dropdown
	Then I verify Add button isenabled
	When I slect one correct option
	Then I verify Add button isenabled
	When I click on clear Button
	Then I verify Question field is empty
	Then I verify Option fields are empty
	Then I verify check box are empty
	Then I verify category combo is empty
	Then I verify Add button isdisabled


#@EditQuestion
Scenario: HR can edit the question in Show Question module
	Given I click on Show Questions module
	Then  I verify available options in category dropdown
	When  I click on edit option for particular question
	Then  I Verify the pre-filled data
	When  Edit the question by entering text
	When  Edit the answer choices
	When  Edit checkbox of the Right answer
	When  I click on save
	Then  I verify question has been saved successfully



Scenario: HR can edit the question category in Show Question module
#	Given I click on Show Questions module
#	When  I click on edit option for particular question
#	Then  I Verify the pre-filled data
#	When  Edit category in the dropdown
#	When  I click on save
#	Then  I verify question has been saved successfully
#	Then  I verify question count has been updated accordingly


Scenario: HR can delete the question in Show Question module
#	Given I click on Show Questions module
#	When I click on delete option for particular question
#	Then I Verify the delete confirmation pop-up
#	When I select Cancel in delete confirmation
#	Then I Verify the question is not deleted
#	When  I click on delete option for particular question
#	When I select Ok in delete confirmation
#	Then  I verify Total question count has been updated accordingly
# 	Then  I verify count has been updated accordingly under particular category
#	Then  I verify Total question has been deleted


Scenario: HR can filter the question upon category in Show Question module
#	Given I am on question manager module
#	When I click on Show Questions module
#	When I Select category from dropdown
#   Then I Verify the questions are filtered upon selected category


@CreatePaper
Scenario: HR can create paper of single categories in question manager
	Given I am on the question manager module
	When I click on paper management module
	And I enter paper name as "JS_Paper1"
	And I select "JavaScript" category
#	Then I select set of questions for paper and verify
#		| optionNo |
#		| 1        |
#		| 2        |
#		| 3        |
#		| 4        |
#		| 5        |
#		| 7        |
#		| 9        |
#		| 11       |
#		| 12       |
#		| 13       |
#		| 15       |
#	When I click on save button
 #   Then I verify the alert message "Paper saved successfully."
    Then I accept the alert


#@CreateMultipleCatPaper
Scenario: HR can create paper of multiple category in question manager
  Given I am on the question manager module
  When I click on paper management module
  When I enter paper name as "Mixed_Paper1"
  Then I select set of questions for paper from different category and verify
    | optionNo | Category   |
    | 2        | Java       |
    | 4        | QA         |
    | 4        | JavaScript |
    | 6        | JavaScript |
    | 6        | QA         |
    | 1        | Java       |
    | 9        | Java       |
    | 11       | QA         |
    | 12       | Java       |
    | 11       | Java       |
    | 15       | JavaScript |
  When I click on save button
  Then I verify the alert message "Paper saved successfully."
  Then I accept the alert




#Scenario: HR cannot create paper version by missing mandatory fields in question manager

#	Given I am on the Dashboard page
#	When  I click on question manager module
#	When   I click on paper management module
#	When   I click save button without entering text paper version
#	When   select checkbox to create paper version
#	When   I click on send button without selecting category
#	Then  aproprite message has to display to please enter the mandatory fields
