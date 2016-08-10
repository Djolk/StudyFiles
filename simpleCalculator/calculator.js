var calculator = {
		sum: 0,
		plus: function(value) {
			this.sum += value;
			return this.sum;
    },
		minus: function(value) {
			this.sum -= value;
			return this.sum;
		},
    clear: function() {
			this.sum = 0;
			return "cleared";
    },
    equals: function() {
			return this.sum
    }
}
