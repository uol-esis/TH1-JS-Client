/**
 * TH1
 * TH1
 *
 * The version of the OpenAPI document: 1.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AddHeaderNameStructure from './AddHeaderNameStructure';
import ConverterType from './ConverterType';
import FillEmptyRowStructure from './FillEmptyRowStructure';
import RemoveColumnByIndexStructure from './RemoveColumnByIndexStructure';
import RemoveGroupedHeaderStructure from './RemoveGroupedHeaderStructure';
import RemoveRowByIndexStructure from './RemoveRowByIndexStructure';

/**
 * The Structure model module.
 * @module model/Structure
 * @version 1.5.0
 */
class Structure {
    /**
     * Constructs a new <code>Structure</code>.
     * @alias module:model/Structure
     * @param {(module:model/AddHeaderNameStructure|module:model/FillEmptyRowStructure|module:model/RemoveColumnByIndexStructure|module:model/RemoveGroupedHeaderStructure|module:model/RemoveRowByIndexStructure)} instance The actual instance to initialize Structure.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "RemoveRowByIndexStructure") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RemoveRowByIndexStructure.validateJSON(instance); // throw an exception if no match
                // create RemoveRowByIndexStructure from JS object
                this.actualInstance = RemoveRowByIndexStructure.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RemoveRowByIndexStructure
            errorMessages.push("Failed to construct RemoveRowByIndexStructure: " + err)
        }

        try {
            if (typeof instance === "RemoveColumnByIndexStructure") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RemoveColumnByIndexStructure.validateJSON(instance); // throw an exception if no match
                // create RemoveColumnByIndexStructure from JS object
                this.actualInstance = RemoveColumnByIndexStructure.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RemoveColumnByIndexStructure
            errorMessages.push("Failed to construct RemoveColumnByIndexStructure: " + err)
        }

        try {
            if (typeof instance === "RemoveGroupedHeaderStructure") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                RemoveGroupedHeaderStructure.validateJSON(instance); // throw an exception if no match
                // create RemoveGroupedHeaderStructure from JS object
                this.actualInstance = RemoveGroupedHeaderStructure.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into RemoveGroupedHeaderStructure
            errorMessages.push("Failed to construct RemoveGroupedHeaderStructure: " + err)
        }

        try {
            if (typeof instance === "FillEmptyRowStructure") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                FillEmptyRowStructure.validateJSON(instance); // throw an exception if no match
                // create FillEmptyRowStructure from JS object
                this.actualInstance = FillEmptyRowStructure.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into FillEmptyRowStructure
            errorMessages.push("Failed to construct FillEmptyRowStructure: " + err)
        }

        try {
            if (typeof instance === "AddHeaderNameStructure") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                AddHeaderNameStructure.validateJSON(instance); // throw an exception if no match
                // create AddHeaderNameStructure from JS object
                this.actualInstance = AddHeaderNameStructure.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into AddHeaderNameStructure
            errorMessages.push("Failed to construct AddHeaderNameStructure: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `Structure` with oneOf schemas AddHeaderNameStructure, FillEmptyRowStructure, RemoveColumnByIndexStructure, RemoveGroupedHeaderStructure, RemoveRowByIndexStructure. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `Structure` with oneOf schemas AddHeaderNameStructure, FillEmptyRowStructure, RemoveColumnByIndexStructure, RemoveGroupedHeaderStructure, RemoveRowByIndexStructure. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>Structure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Structure} obj Optional instance to populate.
     * @return {module:model/Structure} The populated <code>Structure</code> instance.
     */
    static constructFromObject(data, obj) {
        return new Structure(data);
    }

    /**
     * Gets the actual instance, which can be <code>AddHeaderNameStructure</code>, <code>FillEmptyRowStructure</code>, <code>RemoveColumnByIndexStructure</code>, <code>RemoveGroupedHeaderStructure</code>, <code>RemoveRowByIndexStructure</code>.
     * @return {(module:model/AddHeaderNameStructure|module:model/FillEmptyRowStructure|module:model/RemoveColumnByIndexStructure|module:model/RemoveGroupedHeaderStructure|module:model/RemoveRowByIndexStructure)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>AddHeaderNameStructure</code>, <code>FillEmptyRowStructure</code>, <code>RemoveColumnByIndexStructure</code>, <code>RemoveGroupedHeaderStructure</code>, <code>RemoveRowByIndexStructure</code>.
     * @param {(module:model/AddHeaderNameStructure|module:model/FillEmptyRowStructure|module:model/RemoveColumnByIndexStructure|module:model/RemoveGroupedHeaderStructure|module:model/RemoveRowByIndexStructure)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = Structure.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of Structure from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/Structure} An instance of Structure.
     */
    static fromJSON = function(json_string){
        return Structure.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/ConverterType} converterType
 */
Structure.prototype['converterType'] = undefined;

/**
 * @member {Array.<Number>} rowIndex
 */
Structure.prototype['rowIndex'] = undefined;

/**
 * @member {Array.<Number>} columnIndex
 */
Structure.prototype['columnIndex'] = undefined;

/**
 * @member {Number} startRow
 */
Structure.prototype['startRow'] = undefined;

/**
 * @member {Number} startColumn
 */
Structure.prototype['startColumn'] = undefined;

/**
 * @member {Array.<String>} headerNames
 */
Structure.prototype['headerNames'] = undefined;


Structure.OneOf = ["AddHeaderNameStructure", "FillEmptyRowStructure", "RemoveColumnByIndexStructure", "RemoveGroupedHeaderStructure", "RemoveRowByIndexStructure"];

export default Structure;

