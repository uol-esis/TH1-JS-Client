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
import ReportType from './ReportType';

/**
 * The EmptyColumnReport model module.
 * @module model/EmptyColumnReport
 * @version 1.15.0
 */
class EmptyColumnReport {
    /**
     * Constructs a new <code>EmptyColumnReport</code>.
     * This report indicates that the specified column is empty.  The reportType MUST be EMPTY_COLUMN. 
     * @alias module:model/EmptyColumnReport
     * @param reportType {module:model/ReportType} 
     * @param columnIndex {Array.<Number>} 
     */
    constructor(reportType, columnIndex) { 
        
        EmptyColumnReport.initialize(this, reportType, columnIndex);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reportType, columnIndex) { 
        obj['reportType'] = reportType;
        obj['columnIndex'] = columnIndex;
    }

    /**
     * Constructs a <code>EmptyColumnReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmptyColumnReport} obj Optional instance to populate.
     * @return {module:model/EmptyColumnReport} The populated <code>EmptyColumnReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmptyColumnReport();

            if (data.hasOwnProperty('reportType')) {
                obj['reportType'] = ReportType.constructFromObject(data['reportType']);
            }
            if (data.hasOwnProperty('columnIndex')) {
                obj['columnIndex'] = ApiClient.convertToType(data['columnIndex'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmptyColumnReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmptyColumnReport</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EmptyColumnReport.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['columnIndex'])) {
            throw new Error("Expected the field `columnIndex` to be an array in the JSON data but got " + data['columnIndex']);
        }

        return true;
    }


}

EmptyColumnReport.RequiredProperties = ["reportType", "columnIndex"];

/**
 * @member {module:model/ReportType} reportType
 */
EmptyColumnReport.prototype['reportType'] = undefined;

/**
 * @member {Array.<Number>} columnIndex
 */
EmptyColumnReport.prototype['columnIndex'] = undefined;






export default EmptyColumnReport;

