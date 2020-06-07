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

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {IResponse|null} [response] Message response
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message response.
     * @member {IResponse|null|undefined} response
     * @memberof Message
     * @instance
     */
    Message.prototype.response = null;

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
            $root.Response.encode(message.response, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.response = $root.Response.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.response != null && message.hasOwnProperty("response")) {
            var error = $root.Response.verify(message.response);
            if (error)
                return "response." + error;
        }
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        var message = new $root.Message();
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".Message.response: object expected");
            message.response = $root.Response.fromObject(object.response);
        }
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.response = null;
        if (message.response != null && message.hasOwnProperty("response"))
            object.response = $root.Response.toObject(message.response, options);
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Message;
})();

$root.Response = (function() {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {number} seq Response seq
     * @property {IEmpty|null} [success] Response success
     * @property {IError|null} [error] Response error
     * @property {IInfo|null} [info] Response info
     */

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @implements IResponse
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response seq.
     * @member {number} seq
     * @memberof Response
     * @instance
     */
    Response.prototype.seq = 0;

    /**
     * Response success.
     * @member {IEmpty|null|undefined} success
     * @memberof Response
     * @instance
     */
    Response.prototype.success = null;

    /**
     * Response error.
     * @member {IError|null|undefined} error
     * @memberof Response
     * @instance
     */
    Response.prototype.error = null;

    /**
     * Response info.
     * @member {IInfo|null|undefined} info
     * @memberof Response
     * @instance
     */
    Response.prototype.info = null;

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.seq);
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            $root.Empty.encode(message.success, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            $root.Error.encode(message.error, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.info != null && Object.hasOwnProperty.call(message, "info"))
            $root.Info.encode(message.info, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.seq = reader.uint32();
                break;
            case 4:
                message.success = $root.Empty.decode(reader, reader.uint32());
                break;
            case 5:
                message.error = $root.Error.decode(reader, reader.uint32());
                break;
            case 6:
                message.info = $root.Info.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("seq"))
            throw $util.ProtocolError("missing required 'seq'", { instance: message });
        return message;
    };

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.seq))
            return "seq: integer expected";
        if (message.success != null && message.hasOwnProperty("success")) {
            var error = $root.Empty.verify(message.success);
            if (error)
                return "success." + error;
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            var error = $root.Error.verify(message.error);
            if (error)
                return "error." + error;
        }
        if (message.info != null && message.hasOwnProperty("info")) {
            var error = $root.Info.verify(message.info);
            if (error)
                return "info." + error;
        }
        return null;
    };

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        var message = new $root.Response();
        if (object.seq != null)
            message.seq = object.seq >>> 0;
        if (object.success != null) {
            if (typeof object.success !== "object")
                throw TypeError(".Response.success: object expected");
            message.success = $root.Empty.fromObject(object.success);
        }
        if (object.error != null) {
            if (typeof object.error !== "object")
                throw TypeError(".Response.error: object expected");
            message.error = $root.Error.fromObject(object.error);
        }
        if (object.info != null) {
            if (typeof object.info !== "object")
                throw TypeError(".Response.info: object expected");
            message.info = $root.Info.fromObject(object.info);
        }
        return message;
    };

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.seq = 0;
            object.success = null;
            object.error = null;
            object.info = null;
        }
        if (message.seq != null && message.hasOwnProperty("seq"))
            object.seq = message.seq;
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = $root.Empty.toObject(message.success, options);
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = $root.Error.toObject(message.error, options);
        if (message.info != null && message.hasOwnProperty("info"))
            object.info = $root.Info.toObject(message.info, options);
        return object;
    };

    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Response;
})();

$root.Error = (function() {

    /**
     * Properties of an Error.
     * @exports IError
     * @interface IError
     * @property {string} error Error error
     */

    /**
     * Constructs a new Error.
     * @exports Error
     * @classdesc Represents an Error.
     * @implements IError
     * @constructor
     * @param {IError=} [properties] Properties to set
     */
    function Error(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Error error.
     * @member {string} error
     * @memberof Error
     * @instance
     */
    Error.prototype.error = "";

    /**
     * Creates a new Error instance using the specified properties.
     * @function create
     * @memberof Error
     * @static
     * @param {IError=} [properties] Properties to set
     * @returns {Error} Error instance
     */
    Error.create = function create(properties) {
        return new Error(properties);
    };

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @function encode
     * @memberof Error
     * @static
     * @param {IError} message Error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Error.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.error);
        return writer;
    };

    /**
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Error
     * @static
     * @param {IError} message Error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Error.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @function decode
     * @memberof Error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Error} Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Error.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Error();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("error"))
            throw $util.ProtocolError("missing required 'error'", { instance: message });
        return message;
    };

    /**
     * Decodes an Error message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Error} Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Error.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Error message.
     * @function verify
     * @memberof Error
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Error.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.error))
            return "error: string expected";
        return null;
    };

    /**
     * Creates an Error message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Error
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Error} Error
     */
    Error.fromObject = function fromObject(object) {
        if (object instanceof $root.Error)
            return object;
        var message = new $root.Error();
        if (object.error != null)
            message.error = String(object.error);
        return message;
    };

    /**
     * Creates a plain object from an Error message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Error
     * @static
     * @param {Error} message Error
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Error.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.error = "";
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this Error to JSON.
     * @function toJSON
     * @memberof Error
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Error.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Error;
})();

$root.Info = (function() {

    /**
     * Properties of an Info.
     * @exports IInfo
     * @interface IInfo
     * @property {string} name Info name
     * @property {string} headerImage Info headerImage
     * @property {string} url Info url
     * @property {string} map Info map
     * @property {number} mapSize Info mapSize
     * @property {number} wipeTime Info wipeTime
     * @property {number} players Info players
     * @property {number} maxPlayers Info maxPlayers
     * @property {number} queuedPlayers Info queuedPlayers
     * @property {number|null} [seed] Info seed
     * @property {number|null} [salt] Info salt
     */

    /**
     * Constructs a new Info.
     * @exports Info
     * @classdesc Represents an Info.
     * @implements IInfo
     * @constructor
     * @param {IInfo=} [properties] Properties to set
     */
    function Info(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Info name.
     * @member {string} name
     * @memberof Info
     * @instance
     */
    Info.prototype.name = "";

    /**
     * Info headerImage.
     * @member {string} headerImage
     * @memberof Info
     * @instance
     */
    Info.prototype.headerImage = "";

    /**
     * Info url.
     * @member {string} url
     * @memberof Info
     * @instance
     */
    Info.prototype.url = "";

    /**
     * Info map.
     * @member {string} map
     * @memberof Info
     * @instance
     */
    Info.prototype.map = "";

    /**
     * Info mapSize.
     * @member {number} mapSize
     * @memberof Info
     * @instance
     */
    Info.prototype.mapSize = 0;

    /**
     * Info wipeTime.
     * @member {number} wipeTime
     * @memberof Info
     * @instance
     */
    Info.prototype.wipeTime = 0;

    /**
     * Info players.
     * @member {number} players
     * @memberof Info
     * @instance
     */
    Info.prototype.players = 0;

    /**
     * Info maxPlayers.
     * @member {number} maxPlayers
     * @memberof Info
     * @instance
     */
    Info.prototype.maxPlayers = 0;

    /**
     * Info queuedPlayers.
     * @member {number} queuedPlayers
     * @memberof Info
     * @instance
     */
    Info.prototype.queuedPlayers = 0;

    /**
     * Info seed.
     * @member {number} seed
     * @memberof Info
     * @instance
     */
    Info.prototype.seed = 0;

    /**
     * Info salt.
     * @member {number} salt
     * @memberof Info
     * @instance
     */
    Info.prototype.salt = 0;

    /**
     * Creates a new Info instance using the specified properties.
     * @function create
     * @memberof Info
     * @static
     * @param {IInfo=} [properties] Properties to set
     * @returns {Info} Info instance
     */
    Info.create = function create(properties) {
        return new Info(properties);
    };

    /**
     * Encodes the specified Info message. Does not implicitly {@link Info.verify|verify} messages.
     * @function encode
     * @memberof Info
     * @static
     * @param {IInfo} message Info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Info.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.headerImage);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.map);
        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.mapSize);
        writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.wipeTime);
        writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.players);
        writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.maxPlayers);
        writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.queuedPlayers);
        if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.seed);
        if (message.salt != null && Object.hasOwnProperty.call(message, "salt"))
            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.salt);
        return writer;
    };

    /**
     * Encodes the specified Info message, length delimited. Does not implicitly {@link Info.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Info
     * @static
     * @param {IInfo} message Info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Info.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Info message from the specified reader or buffer.
     * @function decode
     * @memberof Info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Info} Info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Info.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Info();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.headerImage = reader.string();
                break;
            case 3:
                message.url = reader.string();
                break;
            case 4:
                message.map = reader.string();
                break;
            case 5:
                message.mapSize = reader.uint32();
                break;
            case 6:
                message.wipeTime = reader.uint32();
                break;
            case 7:
                message.players = reader.uint32();
                break;
            case 8:
                message.maxPlayers = reader.uint32();
                break;
            case 9:
                message.queuedPlayers = reader.uint32();
                break;
            case 10:
                message.seed = reader.uint32();
                break;
            case 11:
                message.salt = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
        if (!message.hasOwnProperty("headerImage"))
            throw $util.ProtocolError("missing required 'headerImage'", { instance: message });
        if (!message.hasOwnProperty("url"))
            throw $util.ProtocolError("missing required 'url'", { instance: message });
        if (!message.hasOwnProperty("map"))
            throw $util.ProtocolError("missing required 'map'", { instance: message });
        if (!message.hasOwnProperty("mapSize"))
            throw $util.ProtocolError("missing required 'mapSize'", { instance: message });
        if (!message.hasOwnProperty("wipeTime"))
            throw $util.ProtocolError("missing required 'wipeTime'", { instance: message });
        if (!message.hasOwnProperty("players"))
            throw $util.ProtocolError("missing required 'players'", { instance: message });
        if (!message.hasOwnProperty("maxPlayers"))
            throw $util.ProtocolError("missing required 'maxPlayers'", { instance: message });
        if (!message.hasOwnProperty("queuedPlayers"))
            throw $util.ProtocolError("missing required 'queuedPlayers'", { instance: message });
        return message;
    };

    /**
     * Decodes an Info message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Info} Info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Info.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Info message.
     * @function verify
     * @memberof Info
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Info.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.name))
            return "name: string expected";
        if (!$util.isString(message.headerImage))
            return "headerImage: string expected";
        if (!$util.isString(message.url))
            return "url: string expected";
        if (!$util.isString(message.map))
            return "map: string expected";
        if (!$util.isInteger(message.mapSize))
            return "mapSize: integer expected";
        if (!$util.isInteger(message.wipeTime))
            return "wipeTime: integer expected";
        if (!$util.isInteger(message.players))
            return "players: integer expected";
        if (!$util.isInteger(message.maxPlayers))
            return "maxPlayers: integer expected";
        if (!$util.isInteger(message.queuedPlayers))
            return "queuedPlayers: integer expected";
        if (message.seed != null && message.hasOwnProperty("seed"))
            if (!$util.isInteger(message.seed))
                return "seed: integer expected";
        if (message.salt != null && message.hasOwnProperty("salt"))
            if (!$util.isInteger(message.salt))
                return "salt: integer expected";
        return null;
    };

    /**
     * Creates an Info message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Info
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Info} Info
     */
    Info.fromObject = function fromObject(object) {
        if (object instanceof $root.Info)
            return object;
        var message = new $root.Info();
        if (object.name != null)
            message.name = String(object.name);
        if (object.headerImage != null)
            message.headerImage = String(object.headerImage);
        if (object.url != null)
            message.url = String(object.url);
        if (object.map != null)
            message.map = String(object.map);
        if (object.mapSize != null)
            message.mapSize = object.mapSize >>> 0;
        if (object.wipeTime != null)
            message.wipeTime = object.wipeTime >>> 0;
        if (object.players != null)
            message.players = object.players >>> 0;
        if (object.maxPlayers != null)
            message.maxPlayers = object.maxPlayers >>> 0;
        if (object.queuedPlayers != null)
            message.queuedPlayers = object.queuedPlayers >>> 0;
        if (object.seed != null)
            message.seed = object.seed >>> 0;
        if (object.salt != null)
            message.salt = object.salt >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an Info message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Info
     * @static
     * @param {Info} message Info
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Info.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.headerImage = "";
            object.url = "";
            object.map = "";
            object.mapSize = 0;
            object.wipeTime = 0;
            object.players = 0;
            object.maxPlayers = 0;
            object.queuedPlayers = 0;
            object.seed = 0;
            object.salt = 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.headerImage != null && message.hasOwnProperty("headerImage"))
            object.headerImage = message.headerImage;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        if (message.map != null && message.hasOwnProperty("map"))
            object.map = message.map;
        if (message.mapSize != null && message.hasOwnProperty("mapSize"))
            object.mapSize = message.mapSize;
        if (message.wipeTime != null && message.hasOwnProperty("wipeTime"))
            object.wipeTime = message.wipeTime;
        if (message.players != null && message.hasOwnProperty("players"))
            object.players = message.players;
        if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
            object.maxPlayers = message.maxPlayers;
        if (message.queuedPlayers != null && message.hasOwnProperty("queuedPlayers"))
            object.queuedPlayers = message.queuedPlayers;
        if (message.seed != null && message.hasOwnProperty("seed"))
            object.seed = message.seed;
        if (message.salt != null && message.hasOwnProperty("salt"))
            object.salt = message.salt;
        return object;
    };

    /**
     * Converts this Info to JSON.
     * @function toJSON
     * @memberof Info
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Info.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Info;
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
