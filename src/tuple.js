import {Struct} from "./struct";

export function Tuple(...types) {
	const scheme = types.reduce((acc, type, i) => {
		acc[i] = type;
		return acc;

	}, {});

	return new Struct(scheme);
}
