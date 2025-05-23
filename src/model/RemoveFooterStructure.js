/**
 * TH1
 * TH1
 *
 * The version of the OpenAPI document: 1.15.0
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
 * The RemoveFooterStructure model module.
 * @module model/RemoveFooterStructure
 * @version 1.15.0
 */
class RemoveFooterStructure {
    /**
     * Constructs a new <code>RemoveFooterStructure</code>.
     * @alias module:model/RemoveFooterStructure
     * @param converterType {module:model/ConverterType} 
     */
    constructor(converterType) { 
        
        RemoveFooterStructure.initialize(this, converterType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, converterType) { 
        obj['converterType'] = converterType;
    }

    /**
     * Constructs a <code>RemoveFooterStructure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoveFooterStructure} obj Optional instance to populate.
     * @return {module:model/RemoveFooterStructure} The populated <code>RemoveFooterStructure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoveFooterStructure();

            if (data.hasOwnProperty('converterType')) {
                obj['converterType'] = ConverterType.constructFromObject(data['converterType']);
            }
            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
            }
            if (data.hasOwnProperty('blackList')) {
                obj['blackList'] = ApiClient.convertToType(data['blackList'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RemoveFooterStructure</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RemoveFooterStructure</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RemoveFooterStructure.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['blackList'])) {
            throw new Error("Expected the field `blackList` to be an array in the JSON data but got " + data['blackList']);
        }

        return true;
    }


}

RemoveFooterStructure.RequiredProperties = ["converterType"];

/**
 * @member {module:model/ConverterType} converterType
 */
RemoveFooterStructure.prototype['converterType'] = undefined;

/**
 * @member {Number} threshold
 */
RemoveFooterStructure.prototype['threshold'] = undefined;

/**
 * @member {Array.<String>} blackList
 */
RemoveFooterStructure.prototype['blackList'] = undefined;






export default RemoveFooterStructure;

