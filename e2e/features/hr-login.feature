Feature: Hr login in amiti page

	@Login
	Scenario: Hr login
		Given I am on amiti page
		When I click on login button
		When I type username
		When I enter password
		Then I click on submit button
    Then I verify status


#Feature: HR Login

#Scenario: HR Login as a Registered user using valid credentials

#	Given I am on the signin page
#	When  I have entered my desired username "UserName" and password "password"
 #     	And   I click the Signin button
  #  	Then  I shall get confirmation that I am Logged in succesfully


#Scenario: HR Login as a Registered user using Invalid credentials

#	Given I am on the signin page
#	When  I have entered my desired username "invalid UserName" and password "invalid password"
 #     	And   I click the Signin button
  #  	Then  I shall get confirmation that I entered wrong password please try again

#Scenario: HR Login as a user without signing up

#	Given I am on the signin page
#	When  I have entered my desired username "UserName" and password "password"
 #     	And   I click the Signin button
  #  	Then  I shall get confirmation as invalid credentials  please signup for registration
