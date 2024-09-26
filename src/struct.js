export class Struct {
	scheme;
	byteLength;

	constructor(scheme) {
		let totalLength = 0;

		this.scheme = new Map(
			Object.entries(scheme).flatMap(([key, type]) => {
				const alignment = this.#getAlignment(totalLength, type.alignment ?? 1);

				const res = [];

				if (alignment !== 0) {
					res.push([
						Symbol("Alignment"),

						{
							byteLength: alignment,
							init: () => {
								return {
									get: () => 0,
									set: (_) => {
									}
								}
							}
						}
					]);

					totalLength += alignment;
				}

				res.push([
					key,

					{
						byteLength: type.byteLength,
						init: () => type.init.bind(this)
					}
				]);

				totalLength += type.byteLength;

				return res;
			})
		);

		this.byteLength = totalLength;
	}

	create(
		data,
		buf = new ArrayBuffer(this.byteLength),
		offset = 0
	) {
		const
			view = new StructView(buf, this.byteLength, offset);
	}

	#getAlignment(offset, size) {
		const remainder = offset % size;

		if (remainder === 0) {
			return 0;
		}

		return size - remainder;
	}
}

class StructView {
	#buf;
	#byteLength;
	#byteOffset;

	get buf() {
		return this.#buf;
	}

	get byteLength() {
		return this.#byteLength;
	}

	get byteOffset() {
		return this.#byteOffset;
	}

	constructor(buf, byteLength, offset) {
		this.#buf = buf;
      this.#byteLength = byteLength;
      this.#byteOffset = offset;
	}
}
