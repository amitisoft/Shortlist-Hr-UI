import { Component, OnInit } from '@angular/core';

export class CreatetestProperties {

    constructor() { }

    sendEmailUrl = 'https://questiontable-630db.firebaseio.com/saveSelectedEmailList.json';

    //There is no UI to submit(emails will come from student registration) emails,created json file with bunch of emails and fetching them for auto complete
    getEmailUrl = 'https://questiontable-630db.firebaseio.com/createEmailList.json';

}
