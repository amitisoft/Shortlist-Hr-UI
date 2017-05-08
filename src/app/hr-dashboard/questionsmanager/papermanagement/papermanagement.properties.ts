import { Component, OnInit } from '@angular/core';

export class PapermanagementProperties {

    constructor() { }

    amitionlinetestcategory = 'https://amitionlinetestcategory.firebaseio.com/category.json';
    categoryPermission = 'https://amitionlinetestcategory.firebaseio.com/categoryPermission.json';
    /*questionpaper = 'https://question-paper-fd450.firebaseio.com/question-paper.json';*/
    questionpaper = 'https://e92rcpg85i.execute-api.us-east-1.amazonaws.com/dev/api/questionpaper';
    getPaperList = '';
    
    viewCategories2 = 'https://category-list-4e53a.firebaseio.com/categorylist.json';

    javaquestions = 'https://java-questions-c1c4a.firebaseio.com/questions.json';
    qaquestions = 'https://qa-questions.firebaseio.com/questions.json';
    javascript = 'https://javascript-questions.firebaseio.com/questions.json';
    

    /*categoriesQuestions = 'https://e92rcpg85i.execute-api.us-east-1.amazonaws.com/dev/api/getquestionbycategory/Category/UI@/LastqsnId/null';*/
}
