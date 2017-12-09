require('mocha');
require('should');
const Card = require('./card');

describe ("Card", function() {
	var card = new Card();
	it ("should define constructor", function(){
		Card.should.exist;
	});
	it ("should define default id (-1)", function(){
		card.id.should.equal(-1);
	});
	it ("should define default object name ('')", function(){
		card.object.name.should.equal('');
	});
	it ("should define default method name ('')", function(){
		card.method.should.equal('');
	});
	describe ("#Param", function() {
		it ("should define instance constructor", function(){
			card.Param.should.exist;
		});
	});
	describe ("#Example", function() {
		it ("should define instance constructor", function(){
			card.Example.should.exist;
		});
	});
});
