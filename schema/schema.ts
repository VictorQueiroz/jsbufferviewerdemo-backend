import { ISerializer } from "./__types__";
import { IDeserializer } from "./__types__";
import { IRequest } from "./__types__";
import JSBI from "jsbi";
export function isGeneratedFile(value: unknown): value is generatedFile {
    if(!(typeof value === 'object' && value !== null && '_name' in value && typeof value['_name'] === 'string' && value['_name'] === "schema.generatedFile")) return false;
    if(!(
        "path" in value && ((__v0) => (typeof __v0 === 'string'))(value['path'])
    )) return false;
    if(!(
        "contents" in value && ((__v1) => (typeof __v1 === 'string'))(value['contents'])
    )) return false;
    return true;
}
export const generatedFileMetadata = {
    name: "generatedFile",
    id: 100039737,
    kind: "type",
    params: [
        {
            name: "path",
            type: {
                type: "generic",
                value: "string"
            }
        },
        {
            name: "contents",
            type: {
                type: "generic",
                value: "string"
            }
        },
    ]
};
export const generatedFileMetadataV2 = (
    {
        kind: "type",
        id: 100039737,
        globalName: "schema.generatedFile",
        name: "generatedFile",
        params: [
            {
                name: "path",
                type: {
                    type: "generic",
                    value: "string"
                }
            },
            {
                name: "contents",
                type: {
                    type: "generic",
                    value: "string"
                }
            }
        ]
    }
);
export interface generatedFileInputParams {
    path: string;
    contents: string;
}
export function generatedFile(params: generatedFileInputParams): generatedFile {
    return {
        _name: 'schema.generatedFile',
        path: params['path'],
        contents: params['contents']
    };
}
export function encodeGeneratedFile(__s: ISerializer, value: generatedFile) {
    __s.writeInt32(100039737);
    /**
     * encoding param: path
     */
    const __pv0 = value['path'];
    __s.writeString(__pv0);
    /**
     * encoding param: contents
     */
    const __pv1 = value['contents'];
    __s.writeString(__pv1);
}
export function decodeGeneratedFile(__d: IDeserializer): generatedFile | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 100039737) return null;
    let path: string;
    let contents: string;
    /**
     * decoding param: path
     */
    path = __d.readString();
    /**
     * decoding param: contents
     */
    contents = __d.readString();
    return {
        _name: 'schema.generatedFile',
        path,
        contents
    };
}
export interface generatedFile  {
    _name: 'schema.generatedFile';
    path: string;
    contents: string;
}
export function defaultGeneratedFile(params: Partial<generatedFileInputParams> = {}): generatedFile {
    return generatedFile({
        path: "",
        contents: "",
        ...params
    });
}
export function compareGeneratedFile(__a: generatedFile, __b: generatedFile): boolean {
    return (
        /**
         * compare parameter path
         */
        __a['path'] === __b['path'] &&
        /**
         * compare parameter contents
         */
        __a['contents'] === __b['contents']
    );
}
export function updateGeneratedFile(value: generatedFile, changes: Partial<generatedFileInputParams>) {
    if(typeof changes['path'] !== 'undefined') {
        if(!(changes['path'] === value['path'])) {
            value = generatedFile({
                ...value,
                path: changes['path'],
            });
        }
    }
    if(typeof changes['contents'] !== 'undefined') {
        if(!(changes['contents'] === value['contents'])) {
            value = generatedFile({
                ...value,
                contents: changes['contents'],
            });
        }
    }
    return value;
}
export function isGeneratedFiles(value: unknown): value is generatedFiles {
    if(!(typeof value === 'object' && value !== null && '_name' in value && typeof value['_name'] === 'string' && value['_name'] === "schema.generatedFiles")) return false;
    if(!(
        "files" in value && ((__v0) => ((Array.isArray(__v0) || __v0 instanceof Set) && Array.from(__v0).every(p => (isGeneratedFile(p)))))(value['files'])
    )) return false;
    return true;
}
export const generatedFilesMetadata = {
    name: "generatedFiles",
    id: -1649377800,
    kind: "type",
    params: [
        {
            name: "files",
            type: {
                type: "template",
                name: "vector",
                value: {
                    id: 100039737,
                    type: "internalType",
                    kind: "type",
                    name: "generatedFile"
                }
            }
        },
    ]
};
export const generatedFilesMetadataV2 = (
    {
        kind: "type",
        id: -1649377800,
        globalName: "schema.generatedFiles",
        name: "generatedFiles",
        params: [
            {
                name: "files",
                type: {
                    type: "template",
                    template: "vector",
                    value: {
                        type: "internalType",
                        interfaceName: "generatedFile"
                    }
                }
            }
        ]
    }
);
export interface generatedFilesInputParams {
    files: ReadonlyArray<Readonly<generatedFile>>;
}
export function generatedFiles(params: generatedFilesInputParams): generatedFiles {
    return {
        _name: 'schema.generatedFiles',
        files: params['files']
    };
}
export function encodeGeneratedFiles(__s: ISerializer, value: generatedFiles) {
    __s.writeInt32(-1649377800);
    /**
     * encoding param: files
     */
    const __pv0 = value['files'];
    const __l1 = __pv0.length;
    __s.writeUint32(__l1);
    for(const __item1 of __pv0) {
        encodeGeneratedFile(__s,__item1);
    }
}
export function decodeGeneratedFiles(__d: IDeserializer): generatedFiles | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1649377800) return null;
    let files: Array<generatedFile>;
    /**
     * decoding param: files
     */
    const __l1 = __d.readUint32();
    const __o1 = new Array<generatedFile>(__l1);
    files = __o1;
    for(let __i1 = 0; __i1 < __l1; __i1++) {
        const __tmp2 = decodeGeneratedFile(__d);
        if(__tmp2 === null) return null;
        __o1[__i1] = __tmp2;
    }
    return {
        _name: 'schema.generatedFiles',
        files
    };
}
export interface generatedFiles  {
    _name: 'schema.generatedFiles';
    files: ReadonlyArray<Readonly<generatedFile>>;
}
export function defaultGeneratedFiles(params: Partial<generatedFilesInputParams> = {}): generatedFiles {
    return generatedFiles({
        files: [],
        ...params
    });
}
export function compareGeneratedFiles(__a: generatedFiles, __b: generatedFiles): boolean {
    return (
        /**
         * compare parameter files
         */
        __a['files'].length === __b['files'].length && Array.from(__a['files']).every((__originalItem0,__index0) => (typeof __originalItem0 === 'undefined' ? false : (__item0 => typeof __item0 === 'undefined' ? false : (compareGeneratedFile(__originalItem0,__item0)))(Array.from(__b['files'])[__index0])))
    );
}
export function updateGeneratedFiles(value: generatedFiles, changes: Partial<generatedFilesInputParams>) {
    if(typeof changes['files'] !== 'undefined') {
        if(!(changes['files'].length === value['files'].length && Array.from(changes['files']).every((__originalItem1,__index1) => (typeof __originalItem1 === 'undefined' ? false : (__item1 => typeof __item1 === 'undefined' ? false : (compareGeneratedFile(__originalItem1,__item1)))(Array.from(value['files'])[__index1]))))) {
            value = generatedFiles({
                ...value,
                files: changes['files'],
            });
        }
    }
    return value;
}
export type Request = Readonly<GenerateFiles>;
export function isRequestTrait(value: unknown): value is Request {
    if(isGenerateFiles(value)) return true;
    return false;
}
export const RequestMetadata = {
    name: "Request",
    id: -582976795,
    kind: "trait",
};
export const RequestMetadataV2 = (
    {
        kind: "trait",
        name: "Request",
        nodes: [
            {
                type: "externalType",
                name: "GenerateFiles",
                relativePath: "./schema"
            }
        ]
    }
);
export function encodeRequestTrait(__s: ISerializer,value: Request) {
    switch(value._name) {
        case 'schema.GenerateFiles':
            encodeGenerateFiles(__s,value);
            break;
    }
}
export function decodeRequestTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: GenerateFiles;
    switch(__id) {
        case 853218959: {
            const tmp = decodeGenerateFiles(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function defaultRequestTrait() {
    return defaultGenerateFiles();
}
export function compareRequestTrait(__a: Request, __b: Request) {
    return compareGenerateFiles(__a, __b);
}
export type Result = Readonly<generatedFiles> | Readonly<errorInternalServerError> | Readonly<errorDetailedParsingError> | Readonly<errorParsingError>;
export function isResultTrait(value: unknown): value is Result {
    if(isGeneratedFiles(value)) return true;
    if(isErrorInternalServerError(value)) return true;
    if(isErrorDetailedParsingError(value)) return true;
    if(isErrorParsingError(value)) return true;
    return false;
}
export const ResultMetadata = {
    name: "Result",
    id: -1480344996,
    kind: "trait",
};
export const ResultMetadataV2 = (
    {
        kind: "trait",
        name: "Result",
        nodes: [
            {
                type: "externalType",
                name: "generatedFiles",
                relativePath: "./schema"
            },
            {
                type: "externalType",
                name: "errorInternalServerError",
                relativePath: "./schema"
            },
            {
                type: "externalType",
                name: "errorDetailedParsingError",
                relativePath: "./schema"
            },
            {
                type: "externalType",
                name: "errorParsingError",
                relativePath: "./schema"
            }
        ]
    }
);
export function encodeResultTrait(__s: ISerializer,value: Result) {
    switch(value._name) {
        case 'schema.generatedFiles':
            encodeGeneratedFiles(__s,value);
            break;
        case 'schema.errorInternalServerError':
            encodeErrorInternalServerError(__s,value);
            break;
        case 'schema.errorDetailedParsingError':
            encodeErrorDetailedParsingError(__s,value);
            break;
        case 'schema.errorParsingError':
            encodeErrorParsingError(__s,value);
            break;
    }
}
export function decodeResultTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: generatedFiles | errorInternalServerError | errorDetailedParsingError | errorParsingError;
    switch(__id) {
        case -1649377800: {
            const tmp = decodeGeneratedFiles(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 269584004: {
            const tmp = decodeErrorInternalServerError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 667089994: {
            const tmp = decodeErrorDetailedParsingError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 383890351: {
            const tmp = decodeErrorParsingError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function defaultResultTrait() {
    return defaultGeneratedFiles();
}
export function compareResultTrait(__a: Result, __b: Result) {
    switch(__a._name) {
        case 'schema.generatedFiles':
            if(__b._name !== "schema.generatedFiles") return false;
            return compareGeneratedFiles(__a,__b);
        case 'schema.errorInternalServerError':
            if(__b._name !== "schema.errorInternalServerError") return false;
            return compareErrorInternalServerError(__a,__b);
        case 'schema.errorDetailedParsingError':
            if(__b._name !== "schema.errorDetailedParsingError") return false;
            return compareErrorDetailedParsingError(__a,__b);
        case 'schema.errorParsingError':
            if(__b._name !== "schema.errorParsingError") return false;
            return compareErrorParsingError(__a,__b);
    }
}
export function isGenerateFiles(value: unknown): value is GenerateFiles {
    if(!(typeof value === 'object' && value !== null && '_name' in value && typeof value['_name'] === 'string' && value['_name'] === "schema.GenerateFiles")) return false;
    if(!(
        "contents" in value && ((__v0) => (typeof __v0 === 'string'))(value['contents'])
    )) return false;
    return true;
}
export const GenerateFilesMetadata = {
    name: "GenerateFiles",
    id: 853218959,
    kind: "call",
    params: [
        {
            name: "contents",
            type: {
                type: "generic",
                value: "string"
            }
        },
    ]
};
export const GenerateFilesMetadataV2 = (
    {
        kind: "call",
        id: 853218959,
        globalName: "schema.GenerateFiles",
        name: "GenerateFiles",
        params: [
            {
                name: "contents",
                type: {
                    type: "generic",
                    value: "string"
                }
            }
        ]
    }
);
export interface GenerateFilesInputParams {
    contents: string;
}
export function GenerateFiles(params: GenerateFilesInputParams): GenerateFiles {
    return {
        _name: 'schema.GenerateFiles',
        contents: params['contents']
    };
}
export function encodeGenerateFiles(__s: ISerializer, value: GenerateFiles) {
    __s.writeInt32(853218959);
    /**
     * encoding param: contents
     */
    const __pv0 = value['contents'];
    __s.writeString(__pv0);
}
export function decodeGenerateFiles(__d: IDeserializer): GenerateFiles | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 853218959) return null;
    let contents: string;
    /**
     * decoding param: contents
     */
    contents = __d.readString();
    return {
        _name: 'schema.GenerateFiles',
        contents
    };
}
export interface GenerateFiles extends IRequest<Readonly<generatedFiles>> {
    _name: 'schema.GenerateFiles';
    contents: string;
}
export function defaultGenerateFiles(params: Partial<GenerateFilesInputParams> = {}): GenerateFiles {
    return GenerateFiles({
        contents: "",
        ...params
    });
}
export function compareGenerateFiles(__a: GenerateFiles, __b: GenerateFiles): boolean {
    return (
        /**
         * compare parameter contents
         */
        __a['contents'] === __b['contents']
    );
}
export function updateGenerateFiles(value: GenerateFiles, changes: Partial<GenerateFilesInputParams>) {
    if(typeof changes['contents'] !== 'undefined') {
        if(!(changes['contents'] === value['contents'])) {
            value = GenerateFiles({
                ...value,
                contents: changes['contents'],
            });
        }
    }
    return value;
}
export type Error = Readonly<errorInternalServerError> | Readonly<errorDetailedParsingError> | Readonly<errorParsingError>;
export function isErrorTrait(value: unknown): value is Error {
    if(isErrorInternalServerError(value)) return true;
    if(isErrorDetailedParsingError(value)) return true;
    if(isErrorParsingError(value)) return true;
    return false;
}
export const ErrorMetadata = {
    name: "Error",
    id: -15154035,
    kind: "trait",
};
export const ErrorMetadataV2 = (
    {
        kind: "trait",
        name: "Error",
        nodes: [
            {
                type: "externalType",
                name: "errorInternalServerError",
                relativePath: "./schema"
            },
            {
                type: "externalType",
                name: "errorDetailedParsingError",
                relativePath: "./schema"
            },
            {
                type: "externalType",
                name: "errorParsingError",
                relativePath: "./schema"
            }
        ]
    }
);
export function encodeErrorTrait(__s: ISerializer,value: Error) {
    switch(value._name) {
        case 'schema.errorInternalServerError':
            encodeErrorInternalServerError(__s,value);
            break;
        case 'schema.errorDetailedParsingError':
            encodeErrorDetailedParsingError(__s,value);
            break;
        case 'schema.errorParsingError':
            encodeErrorParsingError(__s,value);
            break;
    }
}
export function decodeErrorTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: errorInternalServerError | errorDetailedParsingError | errorParsingError;
    switch(__id) {
        case 269584004: {
            const tmp = decodeErrorInternalServerError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 667089994: {
            const tmp = decodeErrorDetailedParsingError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 383890351: {
            const tmp = decodeErrorParsingError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function defaultErrorTrait() {
    return defaultErrorInternalServerError();
}
export function compareErrorTrait(__a: Error, __b: Error) {
    switch(__a._name) {
        case 'schema.errorInternalServerError':
            if(__b._name !== "schema.errorInternalServerError") return false;
            return compareErrorInternalServerError(__a,__b);
        case 'schema.errorDetailedParsingError':
            if(__b._name !== "schema.errorDetailedParsingError") return false;
            return compareErrorDetailedParsingError(__a,__b);
        case 'schema.errorParsingError':
            if(__b._name !== "schema.errorParsingError") return false;
            return compareErrorParsingError(__a,__b);
    }
}
export function isErrorInternalServerError(value: unknown): value is errorInternalServerError {
    if(!(typeof value === 'object' && value !== null && '_name' in value && typeof value['_name'] === 'string' && value['_name'] === "schema.errorInternalServerError")) return false;
    return true;
}
export const errorInternalServerErrorMetadata = {
    name: "errorInternalServerError",
    id: 269584004,
    kind: "type",
    params: [
    ]
};
export const errorInternalServerErrorMetadataV2 = (
    {
        kind: "type",
        id: 269584004,
        globalName: "schema.errorInternalServerError",
        name: "errorInternalServerError",
        params: [
        ]
    }
);
export interface errorInternalServerErrorInputParams {
}
export function errorInternalServerError(_: errorInternalServerErrorInputParams = {}): errorInternalServerError {
    return {
        _name: 'schema.errorInternalServerError'
    };
}
export function encodeErrorInternalServerError(__s: ISerializer, _: errorInternalServerError) {
    __s.writeInt32(269584004);
}
export function decodeErrorInternalServerError(__d: IDeserializer): errorInternalServerError | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 269584004) return null;
    return {
        _name: 'schema.errorInternalServerError',
    };
}
export interface errorInternalServerError  {
    _name: 'schema.errorInternalServerError';
}
export function defaultErrorInternalServerError(params: Partial<errorInternalServerErrorInputParams> = {}): errorInternalServerError {
    return errorInternalServerError({
        ...params
    });
}
export function compareErrorInternalServerError(__a: errorInternalServerError, __b: errorInternalServerError): boolean {
    return true;
}
export function updateErrorInternalServerError(value: errorInternalServerError, _: Partial<errorInternalServerErrorInputParams>) {
    return value;
}
export function isErrorDetailedParsingError(value: unknown): value is errorDetailedParsingError {
    if(!(typeof value === 'object' && value !== null && '_name' in value && typeof value['_name'] === 'string' && value['_name'] === "schema.errorDetailedParsingError")) return false;
    if(!(
        "lineNumber" in value && ((__v0) => (typeof __v0 === 'number' && JSBI.equal(JSBI.BigInt(__v0),JSBI.BigInt(__v0)) && JSBI.greaterThanOrEqual(JSBI.BigInt(__v0),JSBI.BigInt("-2147483648")) && JSBI.lessThanOrEqual(JSBI.BigInt(__v0),JSBI.BigInt("2147483647"))))(value['lineNumber'])
    )) return false;
    return true;
}
export const errorDetailedParsingErrorMetadata = {
    name: "errorDetailedParsingError",
    id: 667089994,
    kind: "type",
    params: [
        {
            name: "lineNumber",
            type: {
                type: "generic",
                value: "int"
            }
        },
    ]
};
export const errorDetailedParsingErrorMetadataV2 = (
    {
        kind: "type",
        id: 667089994,
        globalName: "schema.errorDetailedParsingError",
        name: "errorDetailedParsingError",
        params: [
            {
                name: "lineNumber",
                type: {
                    type: "generic",
                    value: "int"
                }
            }
        ]
    }
);
export interface errorDetailedParsingErrorInputParams {
    lineNumber: number;
}
export function errorDetailedParsingError(params: errorDetailedParsingErrorInputParams): errorDetailedParsingError {
    return {
        _name: 'schema.errorDetailedParsingError',
        lineNumber: params['lineNumber']
    };
}
export function encodeErrorDetailedParsingError(__s: ISerializer, value: errorDetailedParsingError) {
    __s.writeInt32(667089994);
    /**
     * encoding param: lineNumber
     */
    const __pv0 = value['lineNumber'];
    __s.writeInt32(__pv0);
}
export function decodeErrorDetailedParsingError(__d: IDeserializer): errorDetailedParsingError | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 667089994) return null;
    let lineNumber: number;
    /**
     * decoding param: lineNumber
     */
    lineNumber = __d.readInt32();
    return {
        _name: 'schema.errorDetailedParsingError',
        lineNumber
    };
}
export interface errorDetailedParsingError  {
    _name: 'schema.errorDetailedParsingError';
    lineNumber: number;
}
export function defaultErrorDetailedParsingError(params: Partial<errorDetailedParsingErrorInputParams> = {}): errorDetailedParsingError {
    return errorDetailedParsingError({
        lineNumber: 0,
        ...params
    });
}
export function compareErrorDetailedParsingError(__a: errorDetailedParsingError, __b: errorDetailedParsingError): boolean {
    return (
        /**
         * compare parameter lineNumber
         */
        __a['lineNumber'] === __b['lineNumber']
    );
}
export function updateErrorDetailedParsingError(value: errorDetailedParsingError, changes: Partial<errorDetailedParsingErrorInputParams>) {
    if(typeof changes['lineNumber'] !== 'undefined') {
        if(!(changes['lineNumber'] === value['lineNumber'])) {
            value = errorDetailedParsingError({
                ...value,
                lineNumber: changes['lineNumber'],
            });
        }
    }
    return value;
}
export function isErrorParsingError(value: unknown): value is errorParsingError {
    if(!(typeof value === 'object' && value !== null && '_name' in value && typeof value['_name'] === 'string' && value['_name'] === "schema.errorParsingError")) return false;
    return true;
}
export const errorParsingErrorMetadata = {
    name: "errorParsingError",
    id: 383890351,
    kind: "type",
    params: [
    ]
};
export const errorParsingErrorMetadataV2 = (
    {
        kind: "type",
        id: 383890351,
        globalName: "schema.errorParsingError",
        name: "errorParsingError",
        params: [
        ]
    }
);
export interface errorParsingErrorInputParams {
}
export function errorParsingError(_: errorParsingErrorInputParams = {}): errorParsingError {
    return {
        _name: 'schema.errorParsingError'
    };
}
export function encodeErrorParsingError(__s: ISerializer, _: errorParsingError) {
    __s.writeInt32(383890351);
}
export function decodeErrorParsingError(__d: IDeserializer): errorParsingError | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 383890351) return null;
    return {
        _name: 'schema.errorParsingError',
    };
}
export interface errorParsingError  {
    _name: 'schema.errorParsingError';
}
export function defaultErrorParsingError(params: Partial<errorParsingErrorInputParams> = {}): errorParsingError {
    return errorParsingError({
        ...params
    });
}
export function compareErrorParsingError(__a: errorParsingError, __b: errorParsingError): boolean {
    return true;
}
export function updateErrorParsingError(value: errorParsingError, _: Partial<errorParsingErrorInputParams>) {
    return value;
}
export function isMessageRequest(value: unknown): value is messageRequest {
    if(!(typeof value === 'object' && value !== null && '_name' in value && typeof value['_name'] === 'string' && value['_name'] === "schema.messageRequest")) return false;
    if(!(
        "requestId" in value && ((__v0) => (typeof __v0 === 'number' && JSBI.equal(JSBI.BigInt(__v0),JSBI.BigInt(__v0)) && JSBI.greaterThanOrEqual(JSBI.BigInt(__v0),JSBI.BigInt("-2147483648")) && JSBI.lessThanOrEqual(JSBI.BigInt(__v0),JSBI.BigInt("2147483647"))))(value['requestId'])
    )) return false;
    if(!(
        "request" in value && ((__v1) => (isRequestTrait(__v1)))(value['request'])
    )) return false;
    return true;
}
export const messageRequestMetadata = {
    name: "messageRequest",
    id: -857915691,
    kind: "type",
    params: [
        {
            name: "requestId",
            type: {
                type: "generic",
                value: "int"
            }
        },
        {
            name: "request",
            type: {
                id: -582976795,
                type: "internalType",
                kind: "trait",
                name: "Request"
            }
        },
    ]
};
export const messageRequestMetadataV2 = (
    {
        kind: "type",
        id: -857915691,
        globalName: "schema.messageRequest",
        name: "messageRequest",
        params: [
            {
                name: "requestId",
                type: {
                    type: "generic",
                    value: "int"
                }
            },
            {
                name: "request",
                type: {
                    type: "internalType",
                    interfaceName: "Request"
                }
            }
        ]
    }
);
export interface messageRequestInputParams {
    requestId: number;
    request: Readonly<Request>;
}
export function messageRequest(params: messageRequestInputParams): messageRequest {
    return {
        _name: 'schema.messageRequest',
        requestId: params['requestId'],
        request: params['request']
    };
}
export function encodeMessageRequest(__s: ISerializer, value: messageRequest) {
    __s.writeInt32(-857915691);
    /**
     * encoding param: requestId
     */
    const __pv0 = value['requestId'];
    __s.writeInt32(__pv0);
    /**
     * encoding param: request
     */
    const __pv1 = value['request'];
    encodeRequestTrait(__s,__pv1);
}
export function decodeMessageRequest(__d: IDeserializer): messageRequest | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -857915691) return null;
    let requestId: number;
    let request: Request;
    /**
     * decoding param: requestId
     */
    requestId = __d.readInt32();
    /**
     * decoding param: request
     */
    const __tmp2 = decodeRequestTrait(__d);
    if(__tmp2 === null) return null;
    request = __tmp2;
    return {
        _name: 'schema.messageRequest',
        requestId,
        request
    };
}
export interface messageRequest  {
    _name: 'schema.messageRequest';
    requestId: number;
    request: Readonly<Request>;
}
export function defaultMessageRequest(params: Partial<messageRequestInputParams> = {}): messageRequest {
    return messageRequest({
        requestId: 0,
        request: defaultRequestTrait(),
        ...params
    });
}
export function compareMessageRequest(__a: messageRequest, __b: messageRequest): boolean {
    return (
        /**
         * compare parameter requestId
         */
        __a['requestId'] === __b['requestId'] &&
        /**
         * compare parameter request
         */
        compareRequestTrait(__a['request'],__b['request'])
    );
}
export function updateMessageRequest(value: messageRequest, changes: Partial<messageRequestInputParams>) {
    if(typeof changes['requestId'] !== 'undefined') {
        if(!(changes['requestId'] === value['requestId'])) {
            value = messageRequest({
                ...value,
                requestId: changes['requestId'],
            });
        }
    }
    if(typeof changes['request'] !== 'undefined') {
        if(!(compareRequestTrait(changes['request'],value['request']))) {
            value = messageRequest({
                ...value,
                request: changes['request'],
            });
        }
    }
    return value;
}
export function isMessageResponse(value: unknown): value is messageResponse {
    if(!(typeof value === 'object' && value !== null && '_name' in value && typeof value['_name'] === 'string' && value['_name'] === "schema.messageResponse")) return false;
    if(!(
        "requestId" in value && ((__v0) => (typeof __v0 === 'number' && JSBI.equal(JSBI.BigInt(__v0),JSBI.BigInt(__v0)) && JSBI.greaterThanOrEqual(JSBI.BigInt(__v0),JSBI.BigInt("-2147483648")) && JSBI.lessThanOrEqual(JSBI.BigInt(__v0),JSBI.BigInt("2147483647"))))(value['requestId'])
    )) return false;
    if(!(
        "result" in value && ((__v1) => (isResultTrait(__v1)))(value['result'])
    )) return false;
    return true;
}
export const messageResponseMetadata = {
    name: "messageResponse",
    id: 1322802356,
    kind: "type",
    params: [
        {
            name: "requestId",
            type: {
                type: "generic",
                value: "int"
            }
        },
        {
            name: "result",
            type: {
                id: -1480344996,
                type: "internalType",
                kind: "trait",
                name: "Result"
            }
        },
    ]
};
export const messageResponseMetadataV2 = (
    {
        kind: "type",
        id: 1322802356,
        globalName: "schema.messageResponse",
        name: "messageResponse",
        params: [
            {
                name: "requestId",
                type: {
                    type: "generic",
                    value: "int"
                }
            },
            {
                name: "result",
                type: {
                    type: "internalType",
                    interfaceName: "Result"
                }
            }
        ]
    }
);
export interface messageResponseInputParams {
    requestId: number;
    result: Readonly<Result>;
}
export function messageResponse(params: messageResponseInputParams): messageResponse {
    return {
        _name: 'schema.messageResponse',
        requestId: params['requestId'],
        result: params['result']
    };
}
export function encodeMessageResponse(__s: ISerializer, value: messageResponse) {
    __s.writeInt32(1322802356);
    /**
     * encoding param: requestId
     */
    const __pv0 = value['requestId'];
    __s.writeInt32(__pv0);
    /**
     * encoding param: result
     */
    const __pv1 = value['result'];
    encodeResultTrait(__s,__pv1);
}
export function decodeMessageResponse(__d: IDeserializer): messageResponse | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 1322802356) return null;
    let requestId: number;
    let result: Result;
    /**
     * decoding param: requestId
     */
    requestId = __d.readInt32();
    /**
     * decoding param: result
     */
    const __tmp2 = decodeResultTrait(__d);
    if(__tmp2 === null) return null;
    result = __tmp2;
    return {
        _name: 'schema.messageResponse',
        requestId,
        result
    };
}
export interface messageResponse  {
    _name: 'schema.messageResponse';
    requestId: number;
    result: Readonly<Result>;
}
export function defaultMessageResponse(params: Partial<messageResponseInputParams> = {}): messageResponse {
    return messageResponse({
        requestId: 0,
        result: defaultResultTrait(),
        ...params
    });
}
export function compareMessageResponse(__a: messageResponse, __b: messageResponse): boolean {
    return (
        /**
         * compare parameter requestId
         */
        __a['requestId'] === __b['requestId'] &&
        /**
         * compare parameter result
         */
        compareResultTrait(__a['result'],__b['result'])
    );
}
export function updateMessageResponse(value: messageResponse, changes: Partial<messageResponseInputParams>) {
    if(typeof changes['requestId'] !== 'undefined') {
        if(!(changes['requestId'] === value['requestId'])) {
            value = messageResponse({
                ...value,
                requestId: changes['requestId'],
            });
        }
    }
    if(typeof changes['result'] !== 'undefined') {
        if(!(compareResultTrait(changes['result'],value['result']))) {
            value = messageResponse({
                ...value,
                result: changes['result'],
            });
        }
    }
    return value;
}
export const __metadataObjects__ = [generatedFileMetadataV2, generatedFilesMetadataV2, RequestMetadataV2, ResultMetadataV2, GenerateFilesMetadataV2, ErrorMetadataV2, errorInternalServerErrorMetadataV2, errorDetailedParsingErrorMetadataV2, errorParsingErrorMetadataV2, messageRequestMetadataV2, messageResponseMetadataV2];
