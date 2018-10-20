it('sign', () =>
    import('../lib/wasm_lib_example.js')
        .then(wasm =>
            wasm.hmac_with_secret('some_message')
        )
        .then(array =>
            expect(array)
                .toEqual(new Uint8Array([
                    157, 92, 228, 175, 135, 190, 204, 185,
                    189, 175, 179, 183, 247, 34, 162, 147,
                    44, 196, 233, 30, 168, 152, 53, 149,
                    36, 74, 121, 240, 126, 107, 255, 201,
                ]))
        )
)
