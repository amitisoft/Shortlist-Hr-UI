export class CommonProperties {


    /*----cadidatedata Component----*/
    uploadCandidateDataUrl = 'https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/getCandidatesListFile';

   
    addcandidateurl='https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/insertCandidate';//'https://user-a1ecd.firebaseio.com/userlist.json';
    getcandidateurl='https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/allcandidates';
    getcandidateDetails='https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/getCandidateInfoForView/candidateId';

	/*----categorymanager Component----*/

    sendCategories = 'https://f4l096njvh.execute-api.us-east-1.amazonaws.com/dev/api/createCategory';
    viewCategories = 'https://f4l096njvh.execute-api.us-east-1.amazonaws.com/dev/api/getAllCategories';
    getcategoryDetails='https://f4l096njvh.execute-api.us-east-1.amazonaws.com/dev/api/getCategoryById/categoryId';
    deletecategories='https://f4l096njvh.execute-api.us-east-1.amazonaws.com/dev/api/deleteCategory/categoryId';

    /*----createquestion Component----*/
    saveQuestionUrl = 'https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/createquestion';

    /*----papermanagement Component----*/
    categoryPermission = 'https://amitionlinetestcategory.firebaseio.com/categoryPermission.json';
    questionpaper = 'https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/questionpaper';


    /*----viewquestions Component----*/
    viewQuestionsUrl = 'https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/getquestionpapernames';
    getCategoryQuestionsUrl = 'https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/getquestionpapernamesbycategory';

    /*----createtest Component----*/
    sendEmailUrl = 'https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/testlink';
    getEmailUrl = 'https://questiontable-630db.firebaseio.com/createEmailList.json';

    /*----managetest Component----*/
    getManageTestDatas = 'https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/starttestdashboard/candidateId/{candidateId}/bookingId/{bookingId}/testStatus/{testStatus}';
    
    //sendTestStartedDatas = 'https://amitionlinemanagetest.firebaseio.com/startTestData.json';
    sendTestStartedDatas = 'https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/updateBookingAfterStartTest';
    // Getting Manage Test Data [Test In Progress]

    //notificationUrl = 'https://candidate-notification.firebaseio.com/notificationData.json';
    notificationUrl = 'http://localhost:3000/notificationData';
    

    getManageTestInProgress = 'https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/startTestInProgressDashboard';

    //change and forgot password
    changepassword='https://api.myjson.com/bins/eg9l1';
    forgotpassword='https://api.myjson.com/bins/eg9l1';
}
