export const U16 = {
	get byteLength() {
      return 2;
   },

	get alignment() {
		return 2;
	},

   init(buffer, offset) {
		const
			arr = new Uint16Array(buffer, offset, 1);

      return {
         get() {
            return arr[0];
         },

         set(val) {
            arr[0]  = val;
         }
      }
   }
}
