/*jshint esversion:6*/

const fs = require('fs');
const acorn = require('acorn');
const walk = require('acorn/dist/walk');

let sourceCode = "";
let functionList = [];
let expressionList = [];
let list = [];

function propertyExists (node) { return typeof node.left.property !== 'undefined'; }
function isGetType (node) { return node.left.property.name === 'GetType'; }
function toType (node) { return node.right.body.body[0].argument.value; }
function toName (node) { return node.left.property.name; }
//function toList (node) { return ({(node.right.body.body[0].argument.value): (node.left.property.name)})}

fs.readFile('./app.js', 'utf8', function (err, data) {
  if (err) { 
    return console.log(err); 
  }
  else {
    sourceCode = acorn.parse(data);
    walk.simple(sourceCode, {
      FunctionDeclaration(node) {

        functionList.push(node);

        walk.simple(node, {
          AssignmentExpression(node) {
            expressionList.push(node);
            list.push()
          }
        });
            
      }
    });
/*
    walk.simple(functionList[2], {
      AssignmentExpression(node) {
        expressionList.push(node);
      }
    });
*/

    console.log(
      expressionList
      .filter(propertyExists)
      .filter(isGetType)
      .map(toType)
      
    )
    console.log(
      expressionList
      .filter(propertyExists)[0]
      .left.property.name
      //.map(toName)
      
    )
    //expressionList.filter(node => node.expression.left.property.name==="GetType")
    //expressionList = functionList[2].body.body.filter
    //console.log(objects.map(node => node.id.name));
    //console.log(functionList[2].body.body.filter(node => node.type==="ExpressionStatement"))//[0].expression);
  }
});