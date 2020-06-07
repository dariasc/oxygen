/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Request = (function() {

    /**
     * Properties of a Request.
     * @exports IRequest
     * @interface IRequest
     * @property {number} seq Request seq
     * @property {number|Long} playerId Request playerId
     * @property {number} playerToken Request playerToken
     * @property {number|null} [entityId] Request entityId
     * @property {IEmpty|null} [getInfo] Request getInfo
     * @property {IEmpty|null} [getTime] Request getTime
     * @property {IEmpty|null} [getMap] Request getMap
     * @property {IEmpty|null} [getTeamInfo] Request getTeamInfo
     * @property {IEmpty|null} [getTeamChat] Request getTeamChat
     * @property {IEmpty|null} [getEntityInfo] Request getEntityInfo
     * @property {IEmpty|null} [checkSubscription] Request checkSubscription
     * @property {IEmpty|null} [getMapMarkers] Request getMapMarkers
     */

    /**
     * Constructs a new Request.
     * @exports Request
     * @classdesc Represents a Request.
     * @implements IRequest
     * @constructor
     * @param {IRequest=} [properties] Properties to set
     */
    function Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Request seq.
     * @member {number} seq
     * @memberof Request
     * @instance
     */
    Request.prototype.seq = 0;

    /**
     * Request playerId.
     * @member {number|Long} playerId
     * @memberof Request
     * @instance
     */
    Request.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Request playerToken.
     * @member {number} playerToken
     * @memberof Request
     * @instance
     */
    Request.prototype.playerToken = 0;

    /**
     * Request entityId.
     * @member {number} entityId
     * @memberof Request
     * @instance
     */
    Request.prototype.entityId = 0;

    /**
     * Request getInfo.
     * @member {IEmpty|null|undefined} getInfo
     * @memberof Request
     * @instance
     */
    Request.prototype.getInfo = null;

    /**
     * Request getTime.
     * @member {IEmpty|null|undefined} getTime
     * @memberof Request
     * @instance
     */
    Request.prototype.getTime = null;

    /**
     * Request getMap.
     * @member {IEmpty|null|undefined} getMap
     * @memberof Request
     * @instance
     */
    Request.prototype.getMap = null;

    /**
     * Request getTeamInfo.
     * @member {IEmpty|null|undefined} getTeamInfo
     * @memberof Request
     * @instance
     */
    Request.prototype.getTeamInfo = null;

    /**
     * Request getTeamChat.
     * @member {IEmpty|null|undefined} getTeamChat
     * @memberof Request
     * @instance
     */
    Request.prototype.getTeamChat = null;

    /**
     * Request getEntityInfo.
     * @member {IEmpty|null|undefined} getEntityInfo
     * @memberof Request
     * @instance
     */
    Request.prototype.getEntityInfo = null;

    /**
     * Request checkSubscription.
     * @member {IEmpty|null|undefined} checkSubscription
     * @memberof Request
     * @instance
     */
    Request.prototype.checkSubscription = null;

    /**
     * Request getMapMarkers.
     * @member {IEmpty|null|undefined} getMapMarkers
     * @memberof Request
     * @instance
     */
    Request.prototype.getMapMarkers = null;

    /**
     * Creates a new Request instance using the specified properties.
     * @function create
     * @memberof Request
     * @static
     * @param {IRequest=} [properties] Properties to set
     * @returns {Request} Request instance
     */
    Request.create = function create(properties) {
        return new Request(properties);
    };

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @function encode
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.seq);
        writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.playerId);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playerToken);
        if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.entityId);
        if (message.getInfo != null && Object.hasOwnProperty.call(message, "getInfo"))
            $root.Empty.encode(message.getInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.getTime != null && Object.hasOwnProperty.call(message, "getTime"))
            $root.Empty.encode(message.getTime, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.getMap != null && Object.hasOwnProperty.call(message, "getMap"))
            $root.Empty.encode(message.getMap, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.getTeamInfo != null && Object.hasOwnProperty.call(message, "getTeamInfo"))
            $root.Empty.encode(message.getTeamInfo, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.getTeamChat != null && Object.hasOwnProperty.call(message, "getTeamChat"))
            $root.Empty.encode(message.getTeamChat, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.getEntityInfo != null && Object.hasOwnProperty.call(message, "getEntityInfo"))
            $root.Empty.encode(message.getEntityInfo, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.checkSubscription != null && Object.hasOwnProperty.call(message, "checkSubscription"))
            $root.Empty.encode(message.checkSubscription, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.getMapMarkers != null && Object.hasOwnProperty.call(message, "getMapMarkers"))
            $root.Empty.encode(message.getMapMarkers, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @function decode
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.seq = reader.uint32();
                break;
            case 2:
                message.playerId = reader.uint64();
                break;
            case 3:
                message.playerToken = reader.int32();
                break;
            case 4:
                message.entityId = reader.uint32();
                break;
            case 8:
                message.getInfo = $root.Empty.decode(reader, reader.uint32());
                break;
            case 9:
                message.getTime = $root.Empty.decode(reader, reader.uint32());
                break;
            case 10:
                message.getMap = $root.Empty.decode(reader, reader.uint32());
                break;
            case 11:
                message.getTeamInfo = $root.Empty.decode(reader, reader.uint32());
                break;
            case 12:
                message.getTeamChat = $root.Empty.decode(reader, reader.uint32());
                break;
            case 14:
                message.getEntityInfo = $root.Empty.decode(reader, reader.uint32());
                break;
            case 16:
                message.checkSubscription = $root.Empty.decode(reader, reader.uint32());
                break;
            case 18:
                message.getMapMarkers = $root.Empty.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("seq"))
            throw $util.ProtocolError("missing required 'seq'", { instance: message });
        if (!message.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: message });
        if (!message.hasOwnProperty("playerToken"))
            throw $util.ProtocolError("missing required 'playerToken'", { instance: message });
        return message;
    };

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Request message.
     * @function verify
     * @memberof Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.seq))
            return "seq: integer expected";
        if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
            return "playerId: integer|Long expected";
        if (!$util.isInteger(message.playerToken))
            return "playerToken: integer expected";
        if (message.entityId != null && message.hasOwnProperty("entityId"))
            if (!$util.isInteger(message.entityId))
                return "entityId: integer expected";
        if (message.getInfo != null && message.hasOwnProperty("getInfo")) {
            var error = $root.Empty.verify(message.getInfo);
            if (error)
                return "getInfo." + error;
        }
        if (message.getTime != null && message.hasOwnProperty("getTime")) {
            var error = $root.Empty.verify(message.getTime);
            if (error)
                return "getTime." + error;
        }
        if (message.getMap != null && message.hasOwnProperty("getMap")) {
            var error = $root.Empty.verify(message.getMap);
            if (error)
                return "getMap." + error;
        }
        if (message.getTeamInfo != null && message.hasOwnProperty("getTeamInfo")) {
            var error = $root.Empty.verify(message.getTeamInfo);
            if (error)
                return "getTeamInfo." + error;
        }
        if (message.getTeamChat != null && message.hasOwnProperty("getTeamChat")) {
            var error = $root.Empty.verify(message.getTeamChat);
            if (error)
                return "getTeamChat." + error;
        }
        if (message.getEntityInfo != null && message.hasOwnProperty("getEntityInfo")) {
            var error = $root.Empty.verify(message.getEntityInfo);
            if (error)
                return "getEntityInfo." + error;
        }
        if (message.checkSubscription != null && message.hasOwnProperty("checkSubscription")) {
            var error = $root.Empty.verify(message.checkSubscription);
            if (error)
                return "checkSubscription." + error;
        }
        if (message.getMapMarkers != null && message.hasOwnProperty("getMapMarkers")) {
            var error = $root.Empty.verify(message.getMapMarkers);
            if (error)
                return "getMapMarkers." + error;
        }
        return null;
    };

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Request} Request
     */
    Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Request)
            return object;
        var message = new $root.Request();
        if (object.seq != null)
            message.seq = object.seq >>> 0;
        if (object.playerId != null)
            if ($util.Long)
                (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = true;
            else if (typeof object.playerId === "string")
                message.playerId = parseInt(object.playerId, 10);
            else if (typeof object.playerId === "number")
                message.playerId = object.playerId;
            else if (typeof object.playerId === "object")
                message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber(true);
        if (object.playerToken != null)
            message.playerToken = object.playerToken | 0;
        if (object.entityId != null)
            message.entityId = object.entityId >>> 0;
        if (object.getInfo != null) {
            if (typeof object.getInfo !== "object")
                throw TypeError(".Request.getInfo: object expected");
            message.getInfo = $root.Empty.fromObject(object.getInfo);
        }
        if (object.getTime != null) {
            if (typeof object.getTime !== "object")
                throw TypeError(".Request.getTime: object expected");
            message.getTime = $root.Empty.fromObject(object.getTime);
        }
        if (object.getMap != null) {
            if (typeof object.getMap !== "object")
                throw TypeError(".Request.getMap: object expected");
            message.getMap = $root.Empty.fromObject(object.getMap);
        }
        if (object.getTeamInfo != null) {
            if (typeof object.getTeamInfo !== "object")
                throw TypeError(".Request.getTeamInfo: object expected");
            message.getTeamInfo = $root.Empty.fromObject(object.getTeamInfo);
        }
        if (object.getTeamChat != null) {
            if (typeof object.getTeamChat !== "object")
                throw TypeError(".Request.getTeamChat: object expected");
            message.getTeamChat = $root.Empty.fromObject(object.getTeamChat);
        }
        if (object.getEntityInfo != null) {
            if (typeof object.getEntityInfo !== "object")
                throw TypeError(".Request.getEntityInfo: object expected");
            message.getEntityInfo = $root.Empty.fromObject(object.getEntityInfo);
        }
        if (object.checkSubscription != null) {
            if (typeof object.checkSubscription !== "object")
                throw TypeError(".Request.checkSubscription: object expected");
            message.checkSubscription = $root.Empty.fromObject(object.checkSubscription);
        }
        if (object.getMapMarkers != null) {
            if (typeof object.getMapMarkers !== "object")
                throw TypeError(".Request.getMapMarkers: object expected");
            message.getMapMarkers = $root.Empty.fromObject(object.getMapMarkers);
        }
        return message;
    };

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Request
     * @static
     * @param {Request} message Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.seq = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.playerId = options.longs === String ? "0" : 0;
            object.playerToken = 0;
            object.entityId = 0;
            object.getInfo = null;
            object.getTime = null;
            object.getMap = null;
            object.getTeamInfo = null;
            object.getTeamChat = null;
            object.getEntityInfo = null;
            object.checkSubscription = null;
            object.getMapMarkers = null;
        }
        if (message.seq != null && message.hasOwnProperty("seq"))
            object.seq = message.seq;
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (typeof message.playerId === "number")
                object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
            else
                object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber(true) : message.playerId;
        if (message.playerToken != null && message.hasOwnProperty("playerToken"))
            object.playerToken = message.playerToken;
        if (message.entityId != null && message.hasOwnProperty("entityId"))
            object.entityId = message.entityId;
        if (message.getInfo != null && message.hasOwnProperty("getInfo"))
            object.getInfo = $root.Empty.toObject(message.getInfo, options);
        if (message.getTime != null && message.hasOwnProperty("getTime"))
            object.getTime = $root.Empty.toObject(message.getTime, options);
        if (message.getMap != null && message.hasOwnProperty("getMap"))
            object.getMap = $root.Empty.toObject(message.getMap, options);
        if (message.getTeamInfo != null && message.hasOwnProperty("getTeamInfo"))
            object.getTeamInfo = $root.Empty.toObject(message.getTeamInfo, options);
        if (message.getTeamChat != null && message.hasOwnProperty("getTeamChat"))
            object.getTeamChat = $root.Empty.toObject(message.getTeamChat, options);
        if (message.getEntityInfo != null && message.hasOwnProperty("getEntityInfo"))
            object.getEntityInfo = $root.Empty.toObject(message.getEntityInfo, options);
        if (message.checkSubscription != null && message.hasOwnProperty("checkSubscription"))
            object.checkSubscription = $root.Empty.toObject(message.checkSubscription, options);
        if (message.getMapMarkers != null && message.hasOwnProperty("getMapMarkers"))
            object.getMapMarkers = $root.Empty.toObject(message.getMapMarkers, options);
        return object;
    };

    /**
     * Converts this Request to JSON.
     * @function toJSON
     * @memberof Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Request;
})();

$root.Empty = (function() {

    /**
     * Properties of an Empty.
     * @exports IEmpty
     * @interface IEmpty
     */

    /**
     * Constructs a new Empty.
     * @exports Empty
     * @classdesc Represents an Empty.
     * @implements IEmpty
     * @constructor
     * @param {IEmpty=} [properties] Properties to set
     */
    function Empty(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Empty instance using the specified properties.
     * @function create
     * @memberof Empty
     * @static
     * @param {IEmpty=} [properties] Properties to set
     * @returns {Empty} Empty instance
     */
    Empty.create = function create(properties) {
        return new Empty(properties);
    };

    /**
     * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
     * @function encode
     * @memberof Empty
     * @static
     * @param {IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Empty.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Empty
     * @static
     * @param {IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Empty.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @function decode
     * @memberof Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Empty.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Empty();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Empty.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Empty message.
     * @function verify
     * @memberof Empty
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Empty.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Empty
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Empty} Empty
     */
    Empty.fromObject = function fromObject(object) {
        if (object instanceof $root.Empty)
            return object;
        return new $root.Empty();
    };

    /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Empty
     * @static
     * @param {Empty} message Empty
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Empty.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Empty to JSON.
     * @function toJSON
     * @memberof Empty
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Empty.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Empty;
})();

module.exports = $root;
