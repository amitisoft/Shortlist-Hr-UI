Feature: HR can Login and access the dashboards
As a HR of Candidate Shortlisting Application
I should be able to use all Dashboard
In order to access and Mange candidates data

@Login
Scenario: HR can Login to the application
  Given I am on amiti page
	When I click on login button
	And I type username
	And I enter password
	Then I click on submit button
  And I verify the Dashboards

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
