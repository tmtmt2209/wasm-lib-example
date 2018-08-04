/* tslint:disable */
import * as wasm from './wasm_lib_example_bg';

const TextEncoder = typeof self === 'object' && self.TextEncoder
    ? self.TextEncoder
    : require('util').TextEncoder;

let cachedEncoder = new TextEncoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function passStringToWasm(arg) {
    
    const buf = cachedEncoder.encode(arg);
    const ptr = wasm.__wbindgen_malloc(buf.length);
    getUint8Memory().set(buf, ptr);
    return [ptr, buf.length];
}

function getArrayU8FromWasm(ptr, len) {
    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}
/**
* @param {string} arg0
* @returns {Uint8Array}
*/
export function hash_with_secret(arg0) {
    const [ptr0, len0] = passStringToWasm(arg0);
    const retptr = globalArgumentPtr();
    try {
        wasm.hash_with_secret(retptr, ptr0, len0);
        const mem = getUint32Memory();
        const ptr = mem[retptr / 4];
        const len = mem[retptr / 4 + 1];
        
        const realRet = getArrayU8FromWasm(ptr, len).slice();
        wasm.__wbindgen_free(ptr, len * 1);
        return realRet;
        
        
    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        
    }
    
}

const TextDecoder = typeof self === 'object' && self.TextDecoder
    ? self.TextDecoder
    : require('util').TextDecoder;

let cachedDecoder = new TextDecoder('utf-8');

function getStringFromWasm(ptr, len) {
    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

