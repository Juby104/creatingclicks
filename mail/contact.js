$(function () {
	$('#contactForm').on('submit', function (event) {
		event.preventDefault();

		const $form = $(this);
		const $button = $('#sendMessageButton');
		const $success = $('#success');

		// Check if the form is valid using the HTML5 constraint validation API
		if (!$form[0].checkValidity()) {
			$form[0].reportValidity();
			return; // Stop the submission if the form is invalid
		}

		$button.prop('disabled', true);

		// Send the form data via AJAX to Web3Forms
		$.ajax({
			url: $form.attr('action'), // Web3Forms URL
			type: 'POST',
			data: $form.serialize(),
			success: function () {
				$success.html("<div class='alert alert-success'>");
				$success
					.find('.alert-success')
					.html(
						"<button type='button' class='close' data-dismiss='alert'>&times;</button>"
					)
					.append('<strong>Your message has been sent.</strong>')
					.append('</div>');
				$form.trigger('reset');
			},
			error: function () {
				$success.html("<div class='alert alert-danger'>");
				$success
					.find('.alert-danger')
					.html(
						"<button type='button' class='close' data-dismiss='alert'>&times;</button>"
					)
					.append('<strong>Thank you! Your message has been sent.</strong>')
					.append('</div>');
			},
			complete: function () {
				$form.trigger('reset');
				setTimeout(function () {
					$button.prop('disabled', false);
				}, 1000);
			},
		});
	});
});
