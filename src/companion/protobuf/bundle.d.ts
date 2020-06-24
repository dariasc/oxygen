import * as $protobuf from "protobufjs";
/** Properties of a Request. */
export interface IRequest {

    /** Request seq */
    seq?: (number|null);

    /** Request playerId */
    playerId?: (number|Long|null);

    /** Request playerToken */
    playerToken?: (number|null);

    /** Request entityId */
    entityId?: (number|null);

    /** Request getInfo */
    getInfo?: (IEmpty|null);

    /** Request getTime */
    getTime?: (IEmpty|null);

    /** Request getMap */
    getMap?: (IEmpty|null);

    /** Request getTeamInfo */
    getTeamInfo?: (IEmpty|null);

    /** Request getTeamChat */
    getTeamChat?: (IEmpty|null);

    /** Request getEntityInfo */
    getEntityInfo?: (IEmpty|null);

    /** Request checkSubscription */
    checkSubscription?: (IEmpty|null);

    /** Request getMapMarkers */
    getMapMarkers?: (IEmpty|null);
}

/** Represents a Request. */
export class Request implements IRequest {

    /**
     * Constructs a new Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequest);

    /** Request seq. */
    public seq: number;

    /** Request playerId. */
    public playerId: (number|Long);

    /** Request playerToken. */
    public playerToken: number;

    /** Request entityId. */
    public entityId: number;

    /** Request getInfo. */
    public getInfo?: (IEmpty|null);

    /** Request getTime. */
    public getTime?: (IEmpty|null);

    /** Request getMap. */
    public getMap?: (IEmpty|null);

    /** Request getTeamInfo. */
    public getTeamInfo?: (IEmpty|null);

    /** Request getTeamChat. */
    public getTeamChat?: (IEmpty|null);

    /** Request getEntityInfo. */
    public getEntityInfo?: (IEmpty|null);

    /** Request checkSubscription. */
    public checkSubscription?: (IEmpty|null);

    /** Request getMapMarkers. */
    public getMapMarkers?: (IEmpty|null);

    /**
     * Creates a new Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Request instance
     */
    public static create(properties?: IRequest): Request;

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Request;

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Request;

    /**
     * Verifies a Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Request
     */
    public static fromObject(object: { [k: string]: any }): Request;

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @param message Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Message. */
export interface IMessage {

    /** Message response */
    response?: (IResponse|null);
}

/** Represents a Message. */
export class Message implements IMessage {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message response. */
    public response?: (IResponse|null);

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Message
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Response. */
export interface IResponse {

    /** Response seq */
    seq?: (number|null);

    /** Response success */
    success?: (IEmpty|null);

    /** Response error */
    error?: (IError|null);

    /** Response info */
    info?: (IInfo|null);

    /** Response map */
    map?: (IMap|null);
}

/** Represents a Response. */
export class Response implements IResponse {

    /**
     * Constructs a new Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponse);

    /** Response seq. */
    public seq: number;

    /** Response success. */
    public success?: (IEmpty|null);

    /** Response error. */
    public error?: (IError|null);

    /** Response info. */
    public info?: (IInfo|null);

    /** Response map. */
    public map?: (IMap|null);

    /**
     * Creates a new Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Response instance
     */
    public static create(properties?: IResponse): Response;

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Response;

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Response;

    /**
     * Verifies a Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Response
     */
    public static fromObject(object: { [k: string]: any }): Response;

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @param message Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Error. */
export interface IError {

    /** Error error */
    error?: (string|null);
}

/** Represents an Error. */
export class Error implements IError {

    /**
     * Constructs a new Error.
     * @param [properties] Properties to set
     */
    constructor(properties?: IError);

    /** Error error. */
    public error: string;

    /**
     * Creates a new Error instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Error instance
     */
    public static create(properties?: IError): Error;

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Error;

    /**
     * Decodes an Error message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Error;

    /**
     * Verifies an Error message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Error message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Error
     */
    public static fromObject(object: { [k: string]: any }): Error;

    /**
     * Creates a plain object from an Error message. Also converts values to other types if specified.
     * @param message Error
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Error to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Info. */
export interface IInfo {

    /** Info name */
    name?: (string|null);

    /** Info headerImage */
    headerImage?: (string|null);

    /** Info url */
    url?: (string|null);

    /** Info map */
    map?: (string|null);

    /** Info mapSize */
    mapSize?: (number|null);

    /** Info wipeTime */
    wipeTime?: (number|null);

    /** Info players */
    players?: (number|null);

    /** Info maxPlayers */
    maxPlayers?: (number|null);

    /** Info queuedPlayers */
    queuedPlayers?: (number|null);

    /** Info seed */
    seed?: (number|null);

    /** Info salt */
    salt?: (number|null);
}

/** Represents an Info. */
export class Info implements IInfo {

    /**
     * Constructs a new Info.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInfo);

    /** Info name. */
    public name: string;

    /** Info headerImage. */
    public headerImage: string;

    /** Info url. */
    public url: string;

    /** Info map. */
    public map: string;

    /** Info mapSize. */
    public mapSize: number;

    /** Info wipeTime. */
    public wipeTime: number;

    /** Info players. */
    public players: number;

    /** Info maxPlayers. */
    public maxPlayers: number;

    /** Info queuedPlayers. */
    public queuedPlayers: number;

    /** Info seed. */
    public seed: number;

    /** Info salt. */
    public salt: number;

    /**
     * Creates a new Info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Info instance
     */
    public static create(properties?: IInfo): Info;

    /**
     * Encodes the specified Info message. Does not implicitly {@link Info.verify|verify} messages.
     * @param message Info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Info message, length delimited. Does not implicitly {@link Info.verify|verify} messages.
     * @param message Info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Info;

    /**
     * Decodes an Info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Info;

    /**
     * Verifies an Info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Info
     */
    public static fromObject(object: { [k: string]: any }): Info;

    /**
     * Creates a plain object from an Info message. Also converts values to other types if specified.
     * @param message Info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Map. */
export interface IMap {

    /** Map width */
    width?: (number|null);

    /** Map height */
    height?: (number|null);

    /** Map jpgImage */
    jpgImage?: (Uint8Array|null);

    /** Map oceanMargin */
    oceanMargin?: (number|null);

    /** Map background */
    background?: (string|null);

    /** Map monuments */
    monuments?: (Map.IMonument[]|null);
}

/** Represents a Map. */
export class Map implements IMap {

    /**
     * Constructs a new Map.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMap);

    /** Map width. */
    public width: number;

    /** Map height. */
    public height: number;

    /** Map jpgImage. */
    public jpgImage: Uint8Array;

    /** Map oceanMargin. */
    public oceanMargin: number;

    /** Map background. */
    public background: string;

    /** Map monuments. */
    public monuments: Map.IMonument[];

    /**
     * Creates a new Map instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Map instance
     */
    public static create(properties?: IMap): Map;

    /**
     * Encodes the specified Map message. Does not implicitly {@link Map.verify|verify} messages.
     * @param message Map message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMap, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Map message, length delimited. Does not implicitly {@link Map.verify|verify} messages.
     * @param message Map message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMap, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Map message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Map
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Map;

    /**
     * Decodes a Map message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Map
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Map;

    /**
     * Verifies a Map message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Map message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Map
     */
    public static fromObject(object: { [k: string]: any }): Map;

    /**
     * Creates a plain object from a Map message. Also converts values to other types if specified.
     * @param message Map
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Map, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Map to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Map {

    /** Properties of a Monument. */
    interface IMonument {

        /** Monument token */
        token?: (string|null);

        /** Monument x */
        x?: (number|null);

        /** Monument y */
        y?: (number|null);
    }

    /** Represents a Monument. */
    class Monument implements IMonument {

        /**
         * Constructs a new Monument.
         * @param [properties] Properties to set
         */
        constructor(properties?: Map.IMonument);

        /** Monument token. */
        public token: string;

        /** Monument x. */
        public x: number;

        /** Monument y. */
        public y: number;

        /**
         * Creates a new Monument instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Monument instance
         */
        public static create(properties?: Map.IMonument): Map.Monument;

        /**
         * Encodes the specified Monument message. Does not implicitly {@link Map.Monument.verify|verify} messages.
         * @param message Monument message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Map.IMonument, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Monument message, length delimited. Does not implicitly {@link Map.Monument.verify|verify} messages.
         * @param message Monument message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Map.IMonument, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Monument message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Monument
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Map.Monument;

        /**
         * Decodes a Monument message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Monument
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Map.Monument;

        /**
         * Verifies a Monument message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Monument message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Monument
         */
        public static fromObject(object: { [k: string]: any }): Map.Monument;

        /**
         * Creates a plain object from a Monument message. Also converts values to other types if specified.
         * @param message Monument
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Map.Monument, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Monument to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of an Empty. */
export interface IEmpty {
}

/** Represents an Empty. */
export class Empty implements IEmpty {

    /**
     * Constructs a new Empty.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmpty);

    /**
     * Creates a new Empty instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Empty instance
     */
    public static create(properties?: IEmpty): Empty;

    /**
     * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Empty;

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Empty;

    /**
     * Verifies an Empty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Empty
     */
    public static fromObject(object: { [k: string]: any }): Empty;

    /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @param message Empty
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Empty to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
