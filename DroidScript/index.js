
/*
    Parse source code and generate list of functions.
*/
const Card = require('./card');

const fs = require('fs');
const acorn = require('acorn');
const walk = require('acorn/dist/walk');

const getFunctions = require('./getfunctions');

const fileName = './app.js';
let sourceText = '';

fs.readFile(fileName, 'utf8', function (err, sourceText) {
    if (err) { 
      return console.log(err); 
    }
    else {
        var test = getFunctions(sourceText);
        console.log(`Total of: ${test.length} Cards`);
        //console.log(test[0]); 
        //console.log(test.map(e => e.method+"-"+e.id+"-"+e.object.type).sort())
        console.log('---------------------------------------------------------------------------');

        if (false) {
        var n = new Map();
        var n2 = new Map();
        var s = new Set();
        var type = "";
        walk.simple(acorn.parse(sourceText), {
            FunctionDeclaration(fnode) { 
                walk.simple(fnode, {
                    AssignmentExpression(anode) {
                        if (anode.left.property && anode.left.property.name === 'GetType') {
                        //if (++z === 1) {
                            type = anode.right.body.body[0].argument.value;
                        //}
                        
                        n.set(type,fnode);
                        n2.set(type,anode)
                        s.add(type);
                        }
                    }
                })
             }
        });

        var k = [...n.keys()];
        var k2 = [...n2.keys()];
        var m = [...s.values()];
        //for (let i=2;i<m.length;i++) /*if (m[i]!==k[i-2])*/ console.log(i,m[i],k[i-2]);
        
        
        var n01 = n.get("App");
        var n02 = n.get("Database");
        var n03 = n.get("GLView");
        var nl = [n01.start,n02.start,n03.start];
        //console.log(nl)
        }

        var aes = [];

        walk.simple(acorn.parse(sourceText), {
            AssignmentExpression(node){
                if (node.left.property && node.left.property.name) {
                    aes.push(node.left.property.name)
                }
            }
        })
        console.log(aes.filter(el=>/E/.test(el)))

        //console.log(acorn.parse(sourceText));
    }
});
