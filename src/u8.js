export const U8 = {
	get byteLength() {
		return 1;
	},

	init(buffer, offset) {
		return {
			get() {
				return new Uint8Array(buffer, offset, 1)[0];
			},

			set(val) {
				new Uint8Array(buffer, offset, 1)[0] = val;
			}
		}
	}
};
