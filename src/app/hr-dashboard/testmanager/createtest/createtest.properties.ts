import { Component, OnInit } from '@angular/core';

export class CreatetestProperties {

    constructor() { }

    //sendEmailUrl = ' https://amitionlinesendlink.firebaseio.com/saveSelectedEmailList.json';

    sendEmailUrl = ' https://l5goipvu1g.execute-api.us-east-1.amazonaws.com/dev/api/testlink';


    //There is no UI to submit(emails will come from student registration) emails,created json file with bunch of emails and fetching them for auto complete
    getEmailUrl = 'https://questiontable-630db.firebaseio.com/createEmailList.json';

}
