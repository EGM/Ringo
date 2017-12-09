/**
 * Describes a single DroidScript function.
 * @class Card
 */
class Card {
/**
 * Creates an instance of Card.
 * @param {number} [id=-1] 
 * @param {string} [name=''] 
 * @param {string} [method=''] 
 * @memberof Card
 */
constructor(id = -1, name = '', method = '') {
        /**
         * Unique card identification number.
         * @property {number} id
         */
        this.id = id;
        this.object = {
            name: name,
            type: ''
        };
        this.method = method;
        this.desc = '';
        this.params = [];
        this.examples = [];
        return this;
    }
    /**
     * Returns JSON encoded card.
     * @returns {string}
     * @memberof Card
     */
    toString() { return JSON.stringify(this); }
}
/**
 * Describes a single DroidScript function parameter.
 * @class Param
 */
Card.prototype.Param = class Param{
/**
 * Creates an instance of Param.
 * @param {string} [name=''] 
 * @param {string} [type=''] 
 * @memberof Param
 */
constructor(name = '', type = '') {
        this.name = name;
        this.type = type;
        return this;
    }
    toString() { return JSON.stringify(this); }
};
Card.prototype.Example = class {
    constructor(code = '') {
        this.code = code;
        this.html = '';
        return this; 
    }
    toString() { return this.code; }
};

// The next two lines export function if under node.
module = module || {};
module.exports = Card;
