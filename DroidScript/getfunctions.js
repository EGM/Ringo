const acorn = require('acorn');
const walk = require('acorn/dist/walk');





function getFunctions ( sourceCode ) {
    let syntaxTree = acorn.parse( sourceCode );

    // Walk syntax tree looking for function declarations with a GetType method signature.
    walk.simple( syntaxTree, {
        FunctionDeclaration( node ) {
        }
    });
}