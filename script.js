$(document).ready(function() {
	waitForKeySequence([119, 97, 114, 114, 101, 110], function() {
		$('body').append('<div class="background warren-background">');
		$('.warren-background').fadeIn(10000, 'swing');
	});

	function waitForKey(keycode, func) {
		$(document).keypress(function(e) {
			if (e.which == keycode) {
				func();
			}
		});
	}

	function waitForKeySequence(sequence, func) {
		function helper() {
			waitForKeySequence(sequence.slice(1), func);
		}
		if (sequence.length == 1) {
			waitForKey(sequence, func);
		} else {
			waitForKey(sequence[0], helper);
		}
	}
});