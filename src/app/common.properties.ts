export class CommonProperties {


    /*----cadidatedata Component----*/
    uploadCandidateDataUrl = 'https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/getCandidatesListFile';

   
    addcandidateurl='https://38klsv9mz0.execute-api.us-east-1.amazonaws.com/dev/api/insertCandidate' ;//'https://user-a1ecd.firebaseio.com/userlist.json';
    getcandidateurl='https://38klsv9mz0.execute-api.us-east-1.amazonaws.com/dev/api/allcandidates';
    getcandidateDetails='https://38klsv9mz0.execute-api.us-east-1.amazonaws.com/dev/api/getCandidateInfoForView/candidateId';

	/*----categorymanager Component----*/

    sendCategories = 'https://category-creation.firebaseio.com/createcategory.json';
    viewCategories = 'https://category-creation.firebaseio.com/createcategory.json';

    /*----createquestion Component----*/
    saveQuestionUrl = 'https://38klsv9mz0.execute-api.us-east-1.amazonaws.com/dev/api/createquestion';

    /*----papermanagement Component----*/
    categoryPermission = 'https://amitionlinetestcategory.firebaseio.com/categoryPermission.json';
    questionpaper = 'https://38klsv9mz0.execute-api.us-east-1.amazonaws.com/dev/api/questionpaper';


    /*----viewquestions Component----*/
    viewQuestionsUrl = 'https://38klsv9mz0.execute-api.us-east-1.amazonaws.com/dev/api/getquestionpapernames';

    /*----createtest Component----*/
    sendEmailUrl = 'https://38klsv9mz0.execute-api.us-east-1.amazonaws.com/dev/api/testlink';
    getEmailUrl = 'https://questiontable-630db.firebaseio.com/createEmailList.json';

    /*----managetest Component----*/
    getManageTestDatas = 'https://38klsv9mz0.execute-api.us-east-1.amazonaws.com/dev/api/starttestdashboard/candidateId/{candidateId}/bookingId/{bookingId}/testStatus/{testStatus}';
    
    //sendTestStartedDatas = 'https://amitionlinemanagetest.firebaseio.com/startTestData.json';
    sendTestStartedDatas = 'https://38klsv9mz0.execute-api.us-east-1.amazonaws.com/dev/api/updateBookingAfterStartTest';
    // Getting Manage Test Data [Test In Progress]
    getManageTestInProgress = 'https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/startTestInProgressDashboard';



}