"use strict";

var watsontest = require("./node_modules/conversationtest/watsontest");

var user = "e51d5555-bbce-44c7-b51c-fafb7d037293";
var pwd = "ctQFAgPKJqop";
//var workspace = "1a9b91ef-204c-4ee6-a63a-349fc2391615" //teste pessoal
var workspace = "bca09dc6-2a79-4bc2-966f-8124bda53846";



watsontest.init(user,pwd,workspace);

watsontest.runTest();

