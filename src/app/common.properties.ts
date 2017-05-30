﻿export class CommonProperties {


    /*----cadidatedata Component----*/
    uploadCandidateDataUrl = 'https://lgtqza61fa.execute-api.us-east-1.amazonaws.com/dev/api/getCandidatesListFile';

   
    addcandidateurl='https://b0ovi53g4m.execute-api.us-east-1.amazonaws.com/dev/api/insertCandidate';//'https://user-a1ecd.firebaseio.com/userlist.json';
    getcandidateurl='https://u4m8g9nxgi.execute-api.us-east-1.amazonaws.com/dev/api/getESCandidateInformation';
    getcandidateDetails='https://b0ovi53g4m.execute-api.us-east-1.amazonaws.com/dev/api/getCandidateInfoForView/candidateId';
    getcandidatraftersearch='https://u4m8g9nxgi.execute-api.us-east-1.amazonaws.com/dev/api/findESCandidateSearchResult';

	/*----categorymanager Component----*/

    sendCategories = 'https://vxouh67191.execute-api.us-east-1.amazonaws.com/dev/api/createCategory';
    viewCategories = 'https://vxouh67191.execute-api.us-east-1.amazonaws.com/dev/api/getAllCategories';
    getcategoryDetails='https://vxouh67191.execute-api.us-east-1.amazonaws.com/dev/api/getCategoryById';
    deletecategories='https://f4l096njvh.execute-api.us-east-1.amazonaws.com/dev/api/deleteCategory/categoryId';

    /*----createquestion Component----*/
    saveQuestionUrl = 'https://e6zf4dv2g6.execute-api.us-east-1.amazonaws.com/dev/api/createquestion';
    //saveQuestionUrl = 'https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/createquestion';

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
    getManageTestDatas = 'https://szlqcpr19k.execute-api.us-east-1.amazonaws.com/dev/api/getESTestNotTakenResults';
    
    //sendTestStartedDatas = 'https://amitionlinemanagetest.firebaseio.com/startTestData.json';
    sendTestStartedDatas = 'https://8i9879447i.execute-api.us-east-1.amazonaws.com/dev/api/updateBookingAfterStartTest';
    sendTestStartedDatassearch='https://szlqcpr19k.execute-api.us-east-1.amazonaws.com/dev/api/findESBookingSearchResult';
    // Getting Manage Test Data [Test In Progress]

    //notificationUrl = 'https://candidate-notification.firebaseio.com/notificationData.json';
    notificationUrl = 'http://localhost:3000/notificationData';
    

    getManageTestInProgress = 'https://szlqcpr19k.execute-api.us-east-1.amazonaws.com/dev/api/getESTestInProgressResults';

    //change and forgot password
    changepassword='https://api.myjson.com/bins/eg9l1';
    forgotpassword='https://api.myjson.com/bins/eg9l1';
}
