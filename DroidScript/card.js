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


module.exports = Card;