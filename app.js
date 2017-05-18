"use strict";

var watsontest = require("./node_modules/conversationtest/watsontest");

var user = "e51d5555-bbce-44c7-b51c-fafb7d037293";
var pwd = "ctQFAgPKJqop";
//var workspace = "1a9b91ef-204c-4ee6-a63a-349fc2391615" //teste pessoal
var workspace = "cc288362-badf-4e1d-9e90-d6a3d09ac8fb";

watsontest.init(user,pwd,workspace);

watsontest.runTest((err,result)=>{
    if(err)
        console.error("erro",err);
    if(result)
        console.log("teste ok",result);
});

