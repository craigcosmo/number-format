(function($) {
	$.fn.numberFormat = function(options) {
		var defaults = {},
			o = $.extend({}, defaults, options);

		function addCommas(nStr) {
			nStr += '';
			x = nStr.split('.');
			x1 = x[0];
			x2 = x.length > 1 ? '.' + x[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + ',' + '$2');
			}
			return x1 + x2;
		}
	
		function validateNumber(e) {
		    var key = window.e ? e.keyCode : e.which;
		    // console.log(key);
		    if ( e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || key == 8 || key ==13 || key == 9 || key ==87){
		    	// cmd, ctrl, shift, alt, delete, enter, tab
		    	return true;
		    }else if ( !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) && (key < 48 || key > 57) ) {
		        return false;
		    }
		    else return true;
		}

		this.each(function() {
			$this = $(this);
			$this.on('keydown', function(e) {
				if( !validateNumber(e) ) e.preventDefault();
			});

			$this.on('keyup focus focusout', function(e) {

				var value = this.value.replace(/\D/g, '');
				value = parseInt(value);
				if (value > 0) {
					this.value = addCommas(value);
				} else {
					this.value = '';
				}
			});
		});
		return this;
	};
})(jQuery);