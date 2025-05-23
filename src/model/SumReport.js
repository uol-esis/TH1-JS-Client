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
 * The SumReport model module.
 * @module model/SumReport
 * @version 1.15.0
 */
class SumReport {
    /**
     * Constructs a new <code>SumReport</code>.
     * This report indicates that the specified rows have sum entries and the specified columns have a sum entry at the top.  The reportType MUST be SUM. 
     * @alias module:model/SumReport
     * @param reportType {module:model/ReportType} 
     * @param rowIndex {Array.<Number>} 
     * @param columnIndex {Array.<Number>} 
     */
    constructor(reportType, rowIndex, columnIndex) { 
        
        SumReport.initialize(this, reportType, rowIndex, columnIndex);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reportType, rowIndex, columnIndex) { 
        obj['reportType'] = reportType;
        obj['rowIndex'] = rowIndex;
        obj['columnIndex'] = columnIndex;
    }

    /**
     * Constructs a <code>SumReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SumReport} obj Optional instance to populate.
     * @return {module:model/SumReport} The populated <code>SumReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SumReport();

            if (data.hasOwnProperty('reportType')) {
                obj['reportType'] = ReportType.constructFromObject(data['reportType']);
            }
            if (data.hasOwnProperty('rowIndex')) {
                obj['rowIndex'] = ApiClient.convertToType(data['rowIndex'], ['Number']);
            }
            if (data.hasOwnProperty('columnIndex')) {
                obj['columnIndex'] = ApiClient.convertToType(data['columnIndex'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SumReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SumReport</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SumReport.RequiredProperties) {
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

SumReport.RequiredProperties = ["reportType", "rowIndex", "columnIndex"];

/**
 * @member {module:model/ReportType} reportType
 */
SumReport.prototype['reportType'] = undefined;

/**
 * @member {Array.<Number>} rowIndex
 */
SumReport.prototype['rowIndex'] = undefined;

/**
 * @member {Array.<Number>} columnIndex
 */
SumReport.prototype['columnIndex'] = undefined;






export default SumReport;

