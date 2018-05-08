// $(document).ready(function() {
// 	$('#submit').click(function(e) {
// 		var firstname = $('#text').val();
// 		var lastname =$('#text2').val();
// 		var name_regex = /^[a-zA-Z]+$/;
// 		if (firstname.length == 0) {
// 		$('#head').text("* All fields are mandatory *"); // This Segment Displays The Validation Rule For All Fields
// 		$("#text").focus();
// 		return false;
// }
// // Validating Name Field.
// else if (!firstname.match(name_regex) || firstname.length == 0) {
// $('#p1').text("* For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
// $("#text").focus();
// return false;
// }
// 	});
// });