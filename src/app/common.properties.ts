export class CommonProperties {


    /*----cadidatedata Component----*/
    uploadCandidateDataUrl = 'https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/getCandidatesListFile';

   
    addcandidateurl='https://6x2a0jjalb.execute-api.us-east-1.amazonaws.com/dev/api/insertCandidate';//'https://user-a1ecd.firebaseio.com/userlist.json';
    getcandidateurl='https://6x2a0jjalb.execute-api.us-east-1.amazonaws.com/dev/api/allcandidates';
    getcandidateDetails='https://6x2a0jjalb.execute-api.us-east-1.amazonaws.com/dev/api/getCandidateInfoForView/candidateId';

	/*----categorymanager Component----*/

    sendCategories = 'https://category-creation.firebaseio.com/createcategory.json';
    viewCategories = 'https://category-creation.firebaseio.com/createcategory.json';
    getcategoryDetails='https://api.myjson.com/bins/eg9l1';

    /*----createquestion Component----*/
    saveQuestionUrl = 'https://6x2a0jjalb.execute-api.us-east-1.amazonaws.com/dev/api/createquestion';

    /*----papermanagement Component----*/
    categoryPermission = 'https://amitionlinetestcategory.firebaseio.com/categoryPermission.json';
    questionpaper = 'https://6x2a0jjalb.execute-api.us-east-1.amazonaws.com/dev/api/questionpaper';


    /*----viewquestions Component----*/
    viewQuestionsUrl = 'https://6x2a0jjalb.execute-api.us-east-1.amazonaws.com/dev/api/getquestionpapernames';

    /*----createtest Component----*/
    sendEmailUrl = 'https://6x2a0jjalb.execute-api.us-east-1.amazonaws.com/dev/api/testlink';
    getEmailUrl = 'https://questiontable-630db.firebaseio.com/createEmailList.json';

    /*----managetest Component----*/
    getManageTestDatas = 'https://6x2a0jjalb.execute-api.us-east-1.amazonaws.com/dev/api/starttestdashboard/candidateId/{candidateId}/bookingId/{bookingId}/testStatus/{testStatus}';
    
    //sendTestStartedDatas = 'https://amitionlinemanagetest.firebaseio.com/startTestData.json';
    sendTestStartedDatas = 'https://6x2a0jjalb.execute-api.us-east-1.amazonaws.com/dev/api/updateBookingAfterStartTest';
    // Getting Manage Test Data [Test In Progress]
    getManageTestInProgress = 'https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/startTestInProgressDashboard';



}