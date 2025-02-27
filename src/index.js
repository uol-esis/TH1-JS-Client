/**
 * TH1
 * TH1
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ConverterType from './model/ConverterType';
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
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ConverterType model constructor.
     * @property {module:model/ConverterType}
     */
    ConverterType,

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
