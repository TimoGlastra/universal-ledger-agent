"use strict";
/*
 * Copyright 2020 Coöperatieve Rabobank U.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GenericStatusCode;
(function (GenericStatusCode) {
    /**
     * In case your plugin ignored
     * the incoming message.
     */
    GenericStatusCode["Ignored"] = "ignored";
    /**
     * Generic, unknown error
     * Please use a more specific
     * error code in your plugin!
     */
    GenericStatusCode["Error"] = "error";
    /**
     * Use this code once your plugin
     * successfully finished its work.
     */
    GenericStatusCode["Success"] = "success";
})(GenericStatusCode = exports.GenericStatusCode || (exports.GenericStatusCode = {}));
//# sourceMappingURL=generic-status-code.js.map