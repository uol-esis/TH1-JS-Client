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
import ConverterType from './ConverterType';

/**
 * The RemoveGroupedHeaderStructure model module.
 * @module model/RemoveGroupedHeaderStructure
 * @version 1.5.0
 */
class RemoveGroupedHeaderStructure {
    /**
     * Constructs a new <code>RemoveGroupedHeaderStructure</code>.
     * @alias module:model/RemoveGroupedHeaderStructure
     * @param converterType {module:model/ConverterType} 
     * @param rowIndex {Array.<Number>} 
     * @param columnIndex {Array.<Number>} 
     */
    constructor(converterType, rowIndex, columnIndex) { 
        
        RemoveGroupedHeaderStructure.initialize(this, converterType, rowIndex, columnIndex);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, converterType, rowIndex, columnIndex) { 
        obj['converterType'] = converterType;
        obj['rowIndex'] = rowIndex;
        obj['columnIndex'] = columnIndex;
    }

    /**
     * Constructs a <code>RemoveGroupedHeaderStructure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoveGroupedHeaderStructure} obj Optional instance to populate.
     * @return {module:model/RemoveGroupedHeaderStructure} The populated <code>RemoveGroupedHeaderStructure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoveGroupedHeaderStructure();

            if (data.hasOwnProperty('converterType')) {
                obj['converterType'] = ConverterType.constructFromObject(data['converterType']);
            }
            if (data.hasOwnProperty('rowIndex')) {
                obj['rowIndex'] = ApiClient.convertToType(data['rowIndex'], ['Number']);
            }
            if (data.hasOwnProperty('columnIndex')) {
                obj['columnIndex'] = ApiClient.convertToType(data['columnIndex'], ['Number']);
            }
            if (data.hasOwnProperty('startRow')) {
                obj['startRow'] = ApiClient.convertToType(data['startRow'], 'Number');
            }
            if (data.hasOwnProperty('startColumn')) {
                obj['startColumn'] = ApiClient.convertToType(data['startColumn'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RemoveGroupedHeaderStructure</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RemoveGroupedHeaderStructure</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RemoveGroupedHeaderStructure.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['rowIndex'])) {
            throw new Error("Expected the field `rowIndex` to be an array in the JSON data but got " + data['rowIndex']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['columnIndex'])) {
            throw new Error("Expected the field `columnIndex` to be an array in the JSON data but got " + data['columnIndex']);
        }

        return true;
    }


}

RemoveGroupedHeaderStructure.RequiredProperties = ["converterType", "rowIndex", "columnIndex"];

/**
 * @member {module:model/ConverterType} converterType
 */
RemoveGroupedHeaderStructure.prototype['converterType'] = undefined;

/**
 * @member {Array.<Number>} rowIndex
 */
RemoveGroupedHeaderStructure.prototype['rowIndex'] = undefined;

/**
 * @member {Array.<Number>} columnIndex
 */
RemoveGroupedHeaderStructure.prototype['columnIndex'] = undefined;

/**
 * @member {Number} startRow
 */
RemoveGroupedHeaderStructure.prototype['startRow'] = undefined;

/**
 * @member {Number} startColumn
 */
RemoveGroupedHeaderStructure.prototype['startColumn'] = undefined;






export default RemoveGroupedHeaderStructure;

