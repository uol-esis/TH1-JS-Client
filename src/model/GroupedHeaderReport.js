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
 * The GroupedHeaderReport model module.
 * @module model/GroupedHeaderReport
 * @version 1.15.0
 */
class GroupedHeaderReport {
    /**
     * Constructs a new <code>GroupedHeaderReport</code>.
     * This report indicates that the table contains a grouped header. The parameters describe the guessed location of the grouped header.  The reportType MUST be GROUPED_HEADER. 
     * @alias module:model/GroupedHeaderReport
     * @param reportType {module:model/ReportType} 
     * @param rowIndex {Array.<Number>} 
     * @param columnIndex {Array.<Number>} 
     * @param startRow {Number} 
     * @param startColumn {Number} 
     * @param rowsToFill {Array.<Number>} 
     * @param columnsToFill {Array.<Number>} 
     * @param headerNames {Array.<String>} 
     */
    constructor(reportType, rowIndex, columnIndex, startRow, startColumn, rowsToFill, columnsToFill, headerNames) { 
        
        GroupedHeaderReport.initialize(this, reportType, rowIndex, columnIndex, startRow, startColumn, rowsToFill, columnsToFill, headerNames);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reportType, rowIndex, columnIndex, startRow, startColumn, rowsToFill, columnsToFill, headerNames) { 
        obj['reportType'] = reportType;
        obj['rowIndex'] = rowIndex;
        obj['columnIndex'] = columnIndex;
        obj['startRow'] = startRow;
        obj['startColumn'] = startColumn;
        obj['rowsToFill'] = rowsToFill;
        obj['columnsToFill'] = columnsToFill;
        obj['headerNames'] = headerNames;
    }

    /**
     * Constructs a <code>GroupedHeaderReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupedHeaderReport} obj Optional instance to populate.
     * @return {module:model/GroupedHeaderReport} The populated <code>GroupedHeaderReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupedHeaderReport();

            if (data.hasOwnProperty('reportType')) {
                obj['reportType'] = ReportType.constructFromObject(data['reportType']);
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
            if (data.hasOwnProperty('rowsToFill')) {
                obj['rowsToFill'] = ApiClient.convertToType(data['rowsToFill'], ['Number']);
            }
            if (data.hasOwnProperty('columnsToFill')) {
                obj['columnsToFill'] = ApiClient.convertToType(data['columnsToFill'], ['Number']);
            }
            if (data.hasOwnProperty('headerNames')) {
                obj['headerNames'] = ApiClient.convertToType(data['headerNames'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GroupedHeaderReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GroupedHeaderReport</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GroupedHeaderReport.RequiredProperties) {
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
        // ensure the json data is an array
        if (!Array.isArray(data['rowsToFill'])) {
            throw new Error("Expected the field `rowsToFill` to be an array in the JSON data but got " + data['rowsToFill']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['columnsToFill'])) {
            throw new Error("Expected the field `columnsToFill` to be an array in the JSON data but got " + data['columnsToFill']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['headerNames'])) {
            throw new Error("Expected the field `headerNames` to be an array in the JSON data but got " + data['headerNames']);
        }

        return true;
    }


}

GroupedHeaderReport.RequiredProperties = ["reportType", "rowIndex", "columnIndex", "startRow", "startColumn", "rowsToFill", "columnsToFill", "headerNames"];

/**
 * @member {module:model/ReportType} reportType
 */
GroupedHeaderReport.prototype['reportType'] = undefined;

/**
 * @member {Array.<Number>} rowIndex
 */
GroupedHeaderReport.prototype['rowIndex'] = undefined;

/**
 * @member {Array.<Number>} columnIndex
 */
GroupedHeaderReport.prototype['columnIndex'] = undefined;

/**
 * @member {Number} startRow
 */
GroupedHeaderReport.prototype['startRow'] = undefined;

/**
 * @member {Number} startColumn
 */
GroupedHeaderReport.prototype['startColumn'] = undefined;

/**
 * @member {Array.<Number>} rowsToFill
 */
GroupedHeaderReport.prototype['rowsToFill'] = undefined;

/**
 * @member {Array.<Number>} columnsToFill
 */
GroupedHeaderReport.prototype['columnsToFill'] = undefined;

/**
 * @member {Array.<String>} headerNames
 */
GroupedHeaderReport.prototype['headerNames'] = undefined;






export default GroupedHeaderReport;

