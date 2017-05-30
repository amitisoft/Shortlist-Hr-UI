Feature: HR can view category manager module
  @CreateCategory
	Scenario: HR can create category in category manager

	Given I am on the Dashboard page
		When I click on category manager module
    When verify create category button enabled
    When  click on create new category
    When verify add category button enabled
    When verify clear category button enabled
		When  enter text  for category name
    When  enter description for category description
		When  click on add button
		#Then  click on clear button
    When I click ok for alert
    Then  click on clear button
    #Then  I should get message as sucessfully created category









#Feature: HR can view category manager module

# Scenario: HR can create category in category manager




#Scenario: HR cannot create category in category manager by missing fields

#	Given I am on the Dashboard page
#	When  I click on category manager module
	#And   click on create new category
	#And   click on save button
#	Then  I should get message as please enter mandatory fields

#Scenario: HR can view category in category manager

	#Given click on category manager module
	#When  I click on view category button
	#Then  Verify Hr can able to view the category list

@EditCategory
Scenario: HR can edit view category in category manager

	Given I am on the Dashboard
	When  I click on categorya manager module
#	And   click on view category button
	When   click on edit link Button
	Then  It redirects to page with pre-filled data and verify the data
  Then Update the data in field
  #And   verify the pre filled data
	And   click on update button
  And I click accept the alert
  And   verify the pre filled data




#Scenario: After creating a category it has to updated in question manager

	#Given I am on the Dashboard page
	#When  I click on category manager module
	#And   click on create new category
	#And   enter text  for category name
	#And   enter description for category description
	#And   click on save button
	#When  I click on question mangager module
	#And   I click on show question
	#Then  The created category has to be updated succesfully in dropdown
	#And   Select category from the dropdown
