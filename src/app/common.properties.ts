export class CommonProperties {


    /*----cadidatedata Component----*/
    uploadCandidateDataUrl = 'https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/getCandidatesListFile';


    addcandidateurl = 'https://yufinedfhg.execute-api.us-east-1.amazonaws.com/dev/api/insertCandidate';//'https://user-a1ecd.firebaseio.com/userlist.json';
    getcandidateurl = 'https://yz74ispp1i.execute-api.us-east-1.amazonaws.com/dev/api/getESCandidateInformation';
    getcandidateDetails = 'https://yufinedfhg.execute-api.us-east-1.amazonaws.com/dev/api/getCandidateInfoForView/candidateId';
    getcandidatraftersearch = 'https://yz74ispp1i.execute-api.us-east-1.amazonaws.com/dev/api/findESCandidateSearchResult';

	/*----categorymanager Component----*/

    sendCategories = 'https://yufinedfhg.execute-api.us-east-1.amazonaws.com/dev/api/createCategory';
    viewCategories = 'https://yufinedfhg.execute-api.us-east-1.amazonaws.com/dev/api/getAllCategories';
    getcategoryDetails = 'https://yufinedfhg.execute-api.us-east-1.amazonaws.com/dev/api/getCategoryById';
    deletecategories = 'https://f4l096njvh.execute-api.us-east-1.amazonaws.com/dev/api/deleteCategory/categoryId';

    /*----createquestion Component----*/
    saveQuestionUrl = 'https://yz74ispp1i.execute-api.us-east-1.amazonaws.com/dev/api/createquestion';
   // saveQuestionUrl = 'https://e6zf4dv2g6.execute-api.us-east-1.amazonaws.com/dev/api/createquestion';
    //saveQuestionUrl = 'https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/createquestion';

    /*----papermanagement Component----*/
    categoryPermission = 'https://amitionlinetestcategory.firebaseio.com/categoryPermission.json';
    questionpaper = 'https://yz74ispp1i.execute-api.us-east-1.amazonaws.com/dev/api/questionpaper';
   // questionpaper = 'https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/questionpaper';


    /*----viewquestions Component----*/
    viewQuestionsUrl = 'https://yz74ispp1i.execute-api.us-east-1.amazonaws.com/dev/api/getquestionpapernames';
    getCategoryQuestionsUrl = 'https://yz74ispp1i.execute-api.us-east-1.amazonaws.com/dev/api/getquestionpapernamesbycategory';

    /*----createtest Component----*/
    sendEmailUrl = ' https://yufinedfhg.execute-api.us-east-1.amazonaws.com/dev/api/registerCandidates ';
    getEmailUrl = 'https://questiontable-630db.firebaseio.com/createEmailList.json';

    /*----managetest Component----*/
    getManageTestDatas = 'https://yz74ispp1i.execute-api.us-east-1.amazonaws.com/dev/api/getESTestNotTakenResults';
    postResultManageDatas = 'https://yz74ispp1i.execute-api.us-east-1.amazonaws.com/dev/api/findESResultSearch';
    //sendTestStartedDatas = 'https://amitionlinemanagetest.firebaseio.com/startTestData.json';
    sendTestStartedDatas = 'https://yufinedfhg.execute-api.us-east-1.amazonaws.com/dev/api/updateBookingAfterStartTest';
    sendTestStartedDatassearch = 'https://yz74ispp1i.execute-api.us-east-1.amazonaws.com/dev/api/findESBookingSearchResult';

    /** Result Manager**/

    getResultManagerFullListDataUrl = 'https://yz74ispp1i.execute-api.us-east-1.amazonaws.com/dev/api/getESResultSearch/';

    /** Result Manager**/
    // Getting Manage Test Data [Test In Progress]

    //notificationUrl = 'https://candidate-notification.firebaseio.com/notificationData.json';
    notificationUrl = 'http://localhost:3000/notificationData';
    

    getManageTestInProgress = 'https://yz74ispp1i.execute-api.us-east-1.amazonaws.com/dev/api/getESTestInProgressResults';

    //change and forgot password
    changepassword='https://api.myjson.com/bins/eg9l1';
    forgotpassword='https://api.myjson.com/bins/eg9l1';
}
