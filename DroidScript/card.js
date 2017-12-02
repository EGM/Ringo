/**
 * Card
 * 
 * Describes a DroidScript object method.
 * @param {number} id 
 * @param {string} name 
 * @param {string} method
 * @returns {Card} 
 */
function Card(id, name, method) {
    this.id = id;
    this.object = {
        name: name,
        type: ''
    }
    this.method = method;
    this.desc = '';
    this.params = [];
    this.examples = [];
    return this;
}
Card.prototype.toString = function() { return JSON.stringify(this); };
Card.prototype.Param = function (name, type) {
	this.name = name;
	this.type = type;
}
Card.prototype.Param.prototype.toString = function() { return JSON.stringify(this); };

// If using with node
if (typeof module !== 'undefined') {
	module.exports = Card;
}

var temp = new Card(-1, 'Doohickey', 'SuperMethod');
var p1 = new temp.Param('txt','string');
var p2 = new temp.Param('n','number');
var ps = [];

ps.push( p1 );
ps.push( p2 );

alert( JSON.stringify( ps ));
alert(temp);
alert(p1);
alert(ps);