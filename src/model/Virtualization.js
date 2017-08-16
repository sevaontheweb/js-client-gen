/**
 * 
 * Virtualization server to emulate API/service
 *
 * OpenAPI spec version: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.Virtualization = factory(root.SwaggerJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Virtualization model module.
   * @module model/Virtualization
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>Virtualization</code>.
   * Virtualization Summary
   * @alias module:model/Virtualization
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Virtualization</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Virtualization} obj Optional instance to populate.
   * @return {module:model/Virtualization} The populated <code>Virtualization</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('virtualizationID')) {
        obj['virtualizationID'] = ApiClient.convertToType(data['virtualizationID'], 'String');
      }
      if (data.hasOwnProperty('apiType')) {
        obj['apiType'] = ApiClient.convertToType(data['apiType'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Number');
      }
      if (data.hasOwnProperty('running')) {
        obj['running'] = ApiClient.convertToType(data['running'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} virtualizationID
   */
  exports.prototype['virtualizationID'] = undefined;
  /**
   * @member {String} apiType
   */
  exports.prototype['apiType'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} protocol
   */
  exports.prototype['protocol'] = undefined;
  /**
   * @member {Number} port
   */
  exports.prototype['port'] = undefined;
  /**
   * @member {Boolean} running
   * @default false
   */
  exports.prototype['running'] = false;



  return exports;
}));


