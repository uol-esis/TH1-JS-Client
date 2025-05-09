/**
 * TH1
 * TH1
 *
 * The version of the OpenAPI document: 1.10.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AddHeaderNameStructure from './model/AddHeaderNameStructure';
import ConverterType from './model/ConverterType';
import FillEmptyRowStructure from './model/FillEmptyRowStructure';
import RemoveColumnByIndexStructure from './model/RemoveColumnByIndexStructure';
import RemoveFooterStructure from './model/RemoveFooterStructure';
import RemoveGroupedHeaderStructure from './model/RemoveGroupedHeaderStructure';
import RemoveHeaderStructure from './model/RemoveHeaderStructure';
import RemoveInvalidRowsStructure from './model/RemoveInvalidRowsStructure';
import RemoveRowByIndexStructure from './model/RemoveRowByIndexStructure';
import RemoveTrailingColumnStructure from './model/RemoveTrailingColumnStructure';
import ReplaceEntriesStructure from './model/ReplaceEntriesStructure';
import SplitRowStructure from './model/SplitRowStructure';
import Structure from './model/Structure';
import StructureSummary from './model/StructureSummary';
import TableStructure from './model/TableStructure';
import TableStructureSummary from './model/TableStructureSummary';
import DefaultApi from './api/DefaultApi';


/**
* TH1.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Th1 = require('index'); // See note below*.
* var xxxSvc = new Th1.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Th1.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Th1.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Th1.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.10.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AddHeaderNameStructure model constructor.
     * @property {module:model/AddHeaderNameStructure}
     */
    AddHeaderNameStructure,

    /**
     * The ConverterType model constructor.
     * @property {module:model/ConverterType}
     */
    ConverterType,

    /**
     * The FillEmptyRowStructure model constructor.
     * @property {module:model/FillEmptyRowStructure}
     */
    FillEmptyRowStructure,

    /**
     * The RemoveColumnByIndexStructure model constructor.
     * @property {module:model/RemoveColumnByIndexStructure}
     */
    RemoveColumnByIndexStructure,

    /**
     * The RemoveFooterStructure model constructor.
     * @property {module:model/RemoveFooterStructure}
     */
    RemoveFooterStructure,

    /**
     * The RemoveGroupedHeaderStructure model constructor.
     * @property {module:model/RemoveGroupedHeaderStructure}
     */
    RemoveGroupedHeaderStructure,

    /**
     * The RemoveHeaderStructure model constructor.
     * @property {module:model/RemoveHeaderStructure}
     */
    RemoveHeaderStructure,

    /**
     * The RemoveInvalidRowsStructure model constructor.
     * @property {module:model/RemoveInvalidRowsStructure}
     */
    RemoveInvalidRowsStructure,

    /**
     * The RemoveRowByIndexStructure model constructor.
     * @property {module:model/RemoveRowByIndexStructure}
     */
    RemoveRowByIndexStructure,

    /**
     * The RemoveTrailingColumnStructure model constructor.
     * @property {module:model/RemoveTrailingColumnStructure}
     */
    RemoveTrailingColumnStructure,

    /**
     * The ReplaceEntriesStructure model constructor.
     * @property {module:model/ReplaceEntriesStructure}
     */
    ReplaceEntriesStructure,

    /**
     * The SplitRowStructure model constructor.
     * @property {module:model/SplitRowStructure}
     */
    SplitRowStructure,

    /**
     * The Structure model constructor.
     * @property {module:model/Structure}
     */
    Structure,

    /**
     * The StructureSummary model constructor.
     * @property {module:model/StructureSummary}
     */
    StructureSummary,

    /**
     * The TableStructure model constructor.
     * @property {module:model/TableStructure}
     */
    TableStructure,

    /**
     * The TableStructureSummary model constructor.
     * @property {module:model/TableStructureSummary}
     */
    TableStructureSummary,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
