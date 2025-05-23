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
 * The SplitRowReport model module.
 * @module model/SplitRowReport
 * @version 1.15.0
 */
class SplitRowReport {
    /**
     * Constructs a new <code>SplitRowReport</code>.
     * This report indicates that the specified row can be split into multiple rows.  The reportType MUST be SPLIT_ROW. 
     * @alias module:model/SplitRowReport
     * @param reportType {module:model/ReportType} 
     * @param rowIndex {Array.<Number>} 
     */
    constructor(reportType, rowIndex) { 
        
        SplitRowReport.initialize(this, reportType, rowIndex);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reportType, rowIndex) { 
        obj['reportType'] = reportType;
        obj['rowIndex'] = rowIndex;
    }

    /**
     * Constructs a <code>SplitRowReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SplitRowReport} obj Optional instance to populate.
     * @return {module:model/SplitRowReport} The populated <code>SplitRowReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SplitRowReport();

            if (data.hasOwnProperty('reportType')) {
                obj['reportType'] = ReportType.constructFromObject(data['reportType']);
            }
            if (data.hasOwnProperty('rowIndex')) {
                obj['rowIndex'] = ApiClient.convertToType(data['rowIndex'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SplitRowReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SplitRowReport</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SplitRowReport.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['rowIndex'])) {
            throw new Error("Expected the field `rowIndex` to be an array in the JSON data but got " + data['rowIndex']);
        }

        return true;
    }


}

SplitRowReport.RequiredProperties = ["reportType", "rowIndex"];

/**
 * @member {module:model/ReportType} reportType
 */
SplitRowReport.prototype['reportType'] = undefined;

/**
 * @member {Array.<Number>} rowIndex
 */
SplitRowReport.prototype['rowIndex'] = undefined;






export default SplitRowReport;

