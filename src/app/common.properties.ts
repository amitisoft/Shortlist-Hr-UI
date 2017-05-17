export class CommonProperties {


    /*----cadidatedata Component----*/
    uploadCandidateDataUrl = 'https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/getCandidatesListFile';

   
    addcandidateurl='https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/insertCandidate' ;//'https://user-a1ecd.firebaseio.com/userlist.json';
    getcandidateurl='https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/allcandidates';
    getcandidateDetails='https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/getCandidateInfoForView/candidateId';

	/*----categorymanager Component----*/

    sendCategories = 'https://category-creation.firebaseio.com/createcategory.json';
    viewCategories = 'https://category-creation.firebaseio.com/createcategory.json';

    /*----createquestion Component----*/
    saveQuestionUrl = 'https://f8ahuuoen7.execute-api.us-east-1.amazonaws.com/dev/api/createquestion';

    /*----papermanagement Component----*/
    categoryPermission = 'https://amitionlinetestcategory.firebaseio.com/categoryPermission.json';
    questionpaper = 'https://f8ahuuoen7.execute-api.us-east-1.amazonaws.com/dev/api/questionpaper';


    /*----viewquestions Component----*/
    viewQuestionsUrl = ' https://xe79yp7gz2.execute-api.us-east-1.amazonaws.com/dev/api/getquestionpapernames';

    /*----createtest Component----*/
    sendEmailUrl = 'https://f8ahuuoen7.execute-api.us-east-1.amazonaws.com/dev/api/testlink';
    getEmailUrl = 'https://questiontable-630db.firebaseio.com/createEmailList.json';

    /*----managetest Component----*/
    getManageTestDatas = 'https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/starttestdashboard/candidateId/%7BcandidateId%7D/bookingId/%7BbookingId%7D/testStatus/%7BtestStatus%7D';
    //sendTestStartedDatas = 'https://amitionlinemanagetest.firebaseio.com/startTestData.json';
    sendTestStartedDatas = 'https://f8ahuuoen7.execute-api.us-east-1.amazonaws.com/dev/api/updateBookingAfterStartTest';
    // Getting Manage Test Data [Test In Progress]
    getManageTestInProgress = 'https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/startTestInProgressDashboard';



}