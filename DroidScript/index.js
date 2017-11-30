
/*
    Parse source code and generate list of functions.
*/

const fs = require('fs');
const acorn = require('acorn');
const walk = require('acorn/dist/walk');

//const getFunctions = require('./getfunctions');

const fileName = './app.js';
let sourceText = '';
let n=0;
let functionList = [];

function fnEntry() {
    this.obj = '';
    this.parent = '';
    this.number = '';
    this.name = '';
    this.params = [];
}

fs.readFile(fileName, 'utf8', function (err, sourceText) {
    if (err) { 
      return console.log(err); 
    }
    else {
        
        /*
            Traverse the abstract syntax tree looking for function expressions 
            (such as 'this.GetType = function() {...}'),
            and the ancestors of that FunctionExpression node.
            - All of the nodes we want have an ancestor list with a length of six.
        */
        walk.ancestor(acorn.parse(sourceText), {
            FunctionExpression(_, ancestors) {
                if (ancestors.length === 6) {

                    let entry = new fnEntry();

                    walk.simple(ancestors[1], {
                        AssignmentExpression(node) {
                            if (node.left.property && node.left.property.name === 'GetType') {
                                entry.parent = node.right.body.body[0].argument.value;
                            }
                        }
                    })

                    //console.log(
                    //n++;
                    entry.number = n++;
                    entry.obj = ancestors[1].id.name;
                    entry.name = ancestors[3].expression.left.property.name;
                    entry.params = ancestors[5].params.map(node => node.name);
                    //functionList.push(fn)
                    functionList.push(entry)
                }
            }
        })
        console.log(functionList.map(fn => ('000'+fn.number).slice(-4) +':'+ fn.obj +':('+ fn.parent +'):'+ fn.name +':['+ fn.params +']'));
    }
});





