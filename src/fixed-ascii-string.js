export const FixedAsciiString = (maxLength) => {
	return {
		get byteLength() {
			return 1;
		},

		init(buffer, offset) {
			const
				arr = new Uint8Array(buffer, offset);

			return {
				get() {
					let str = "";

					for (const chardCode of arr) {
						console.log(chardCode);
						if (chardCode === 0) {
							break;
						}

						str += String.fromCharCode(chardCode);
					}

					return str;
				},

				set(str) {
					for (let i = 0; i< maxLength; i++) {
						arr[i] = i >= str.length ? 0 : str.charCodeAt(i);
					}
				}
			}
		}
	};
};
