// If using with node
if (typeof module !== 'undefined') {
	const acorn = require('acorn');
	const walk = require('acorn/dist/walk');
	const Card = require('./card');
	module.exports = getFunctions;
}

/*
STILL TODO: 
  - Create a function that picks out hybrid objects.
  - Create a function to determine inheritance.
  - Create a function to write out inherited (common) methods.
*/
function getFunctions ( sourceText ) {
    let syntaxTree = acorn.parse( sourceText );

    let n = 0;
    let catalog = [];
    let type = '';
    let z = 0;
    let alt1 = [];
    let alt2 = [];
    /*
        Traverse the abstract syntax tree looking for function expressions 
        (such as 'this.GetType = function() {...}'),
        and the ancestors of that FunctionExpression node.
        - All of the nodes we want have an ancestor list with a length of six.
          (['Program','ExpressionStatement','AssignmentExpression','FunctionExpression'])
    */

    acorn.walk.ancestor(syntaxTree, {
        FunctionExpression(_, ancestors) {
            if (ancestors.length === 6) {

                let card = new Card();

                acorn.walk.simple(ancestors[1], {
                    AssignmentExpression(node) {
                        if (node.left.property && node.left.property.name === 'GetType') {
                            if (++z === 1) {
                              type = node.right.body.body[0].argument.value;
                            }
                        }
                     }
                })
               // else  { alt.push(ancestors) }
                z = 0;

                card.id = n++;
                card.object.name = ancestors[1].id.name;
                card.object.type = type;
                card.method = ancestors[3].expression.left.property.name;
                card.params = ancestors[5].params.map(node => node.name);
                catalog.push(card)
                console.log(card.object.name,type,card.object.type)
            }
            else { if(ancestors.length!==10){alt1.push(ancestors.length); alt2.push(_); }}
        }
    })
    app.Alert(alt1)
    for (let i=0;i<alt1.length;i++) {
        if (alt1[i] !== 10) app.Alert( JSON.stringify(alt2[i].body.body) )
    }
    //alt.forEach(obj =>
    //app.Alert( JSON.stringify(obj.body.body) ));
    return catalog;
}