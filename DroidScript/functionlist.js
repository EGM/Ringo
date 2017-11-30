//source = require('./app.js')
acorn = require('acorn');
walk = require('acorn/dist/walk');

walk.simple(acorn.parse('let x = 10'), {
  Literal(node) {
    console.log(`Found a literal: ${node.value}`);
  }
});