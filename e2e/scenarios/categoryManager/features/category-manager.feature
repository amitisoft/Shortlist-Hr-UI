Feature:  HR can create and edit category manager dashboard
          As a user of Candidate Shortlisting Application
          I should be able to use category Manager Dashboard
          In order to Create/Edit and Mange Category

  @CreateCategory
	Scenario: HR can create category in category manager

	  Given I am on the Dashboard page
		When  I click on category manager module
    And   verify create category button enabled
    And   click on create new category
    And   verify add category button enabled
    And   verify clear category button enabled
    And   enter text  for category name
    And   enter description for category description
    And   click on add button
    And   verify alert msg and i accept the alert


  @EditCategory
  Scenario: HR can edit view category in category manager

    Given I am the Dashboard
    When  I click on categorya manager
    And   click on edit link Button
    Then  It redirects to page with pre-filled data and verify the data
    And   Update the data in field
    And   click on update button
    And   I click accept the alert
    And   verify the pre filled data

  @VerifyClearCategory
  Scenario: Verify clear button category in category manager

	  Given I am on the Dashboard page
	  When  I click on category manager module
	  And   I click on create new category
    And   I enter text  for category name
    And   I enter description for category description
	  Then  I click on clear button
	  And   I verify fields should be empty
    And   click clear button

  @VerifyCategoryTable
  #Scenario: HR can view category in category manager

    #Given click on category manager module
	  #When  I click on view category button
	  #Then  Verify Hr can able to view the category list

  @VerifyCategoryUpdated##Tab
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
