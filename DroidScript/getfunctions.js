const acorn = require('acorn');
const walk = require('acorn/dist/walk');
const Card = require('./card');

module.exports = getFunctions;


function getFunctions ( sourceText ) {
    let syntaxTree = acorn.parse( sourceText );

    let n = 0;
    let catalog = [];
    let type = '';
    /*
        Traverse the abstract syntax tree looking for function expressions 
        (such as 'this.GetType = function() {...}'),
        and the ancestors of that FunctionExpression node.
        - All of the nodes we want have an ancestor list with a length of six.
          (['Program','ExpressionStatement','AssignmentExpression','FunctionExpression'])
    */

    walk.ancestor(syntaxTree, {
        FunctionExpression(_, ancestors) {
            if (ancestors.length === 6) {

                let card = new Card();

                walk.simple(ancestors[1], {
                    AssignmentExpression(node) {
                        if (node.left.property && node.left.property.name === 'GetType') {
                            type = node.right.body.body[0].argument.value;
                        }
                        //console.log("This literal's ancestors are:", ancestors.map(n => n.type))
                    }
                })

                card.id = n++;
                card.object.name = ancestors[1].id.name;
                card.object.type = type;
                card.method = ancestors[3].expression.left.property.name;
                card.params = ancestors[5].params.map(node => node.name);
                catalog.push(card)
                console.log(card.object.name,type,card.object.type)
            }
        }
    })
    console.log(catalog)//.map(fn => 
    //    ('000'+fn.id).slice(-4) +':'+ fn.object.name +':('+ fn.object.type +'):'+ fn.method +':['+ fn.params +']'));

    return catalog;
}