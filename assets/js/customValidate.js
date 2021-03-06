$(document).ready(function(){
  
  // Validate
  // http://bassistance.de/jquery-plugins/jquery-plugin-validation/
  // http://docs.jquery.com/Plugins/Validation/
  // http://docs.jquery.com/Plugins/Validation/validate#toptions

	$('#sign-up-form').validate({
  	rules: {
  	  name: {
  	    required: true
  	  },
  	  lastname: {
  	    required: true
  	  },
  	  email: {
  	    required: true,
  	    email: true
  	  },
  	  password: {
  	    minlength: 6,
  	    required: true
  	  },
  	  confirmation: {
  	    minlength: 6,
  	    equalTo: "#password" 
  	  }
  	},
    messages: {
  	  name: {
         required: "Please enter your name"
      },
  	  lastname: "Please enter your lastname",
  	  email: "Please enter your email with a valid structure",
  	  password: {
  	    required: "Please provide a password",
  	    minlength: "Your password must be at least 6 characters long"
  	  },
  	  confirmation: {
  	    required: "Please provide a password",
  	    minlength: "Your password must be at least 6 characters long",
  	    equalTo: "Please enter the same password as above"
  	  }
  	},
  	success: function(element) {
  	  element.text('Success').addClass('valid')
  	}
  });
});