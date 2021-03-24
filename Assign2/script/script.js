/* function if deliver is checked then the field for information will be showed */
function order(field, id) {
    var radioDeliver = document.getElementsByName(field);

    if ((radioDeliver[1].checked)) {
        $(id).show();
    }
    else {
        $(id).hide();
    }
}

/* function if paypickup is checked then the field for information will be showed */
$(document).ready(function() {
     $('input[type="checkbox"]').click(function() {
       if ($(this).attr('id') == 'paypickup') {
         $('#hidden2').hide();
       }
       if ($(this).attr('id') == 'online') {
         $('#hidden2').show();
       }
     });
});

/*function to limit the card length number for type of cards*/
function showMe(type) {
     $("#creditCardNumber").val('');
     if (type == "americaninfo") {
       $("#creditCardNumber").attr({
         maxlength: 15,
         disabled: false
       });
     } else {
       $("#creditCardNumber").attr({
         maxlength: 16,
         disabled: false
       })
     }
}

/* function validate()will validate form data */
function validate_register() {
    var email     = $("#email").val();
    var password  = $("#password").val();
	var full_name = $("#full_name").val();
	var username  = $("#username").val();

	var errMsg = "";								/* create variable to store the error message */
	var result = true;								/* assumes no errors */
	var pattern = /^[a-za-z ]+$/;					/* regular expression for letters and spaces only */

    if (username == "") {				//check whether User ID is empty
        errMsg += "Username cannot be empty.\n";
    }

    if (email == "") {					//check whether email is empty
        errMsg += "Email cannot be empty.\n";
    }

    if (password.length < 9) {			//check whether Password length is less than 9
        errMsg += "Password must be at least 8 characters long\n";
    }

	/* Display error message any error(s) is/are detected */
    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }

    return result;
}

/* function validate()will validate form data */
function validate_order() {
	var delivery_type_pickup   = $("#delivery_type_pickup").prop("checked");
	var delivery_type_delivery = $("#delivery_type_delivery").prop("checked");

    var delivery_address  = $("#delivery_address").val();
    var delivery_suburb   = $("#delivery_suburb").val();
    var delivery_postcode = $("#delivery_postcode").val();

    var billing_address  = $("#billing_address").val();
    var billing_suburb   = $("#billing_suburb").val();
    var billing_postcode = $("#billing_postcode").val();

    var pizza_order = $("#pizza_order").val();
    var phone       = $("#phone").val();
    var email       = $("#email").val();

	var payment_type_pickup = $("#payment_type_pickup").prop("checked");
	var payment_type_online = $("#payment_type_online").prop("checked");

	var full_name = $("#full_name").val();
	var cardno    = $("#cardno").val();
	var ccmon     = $("#ccmon").val();
	var ccyear    = $("#ccyear").val();
	var cvv       = $("#cvv").val();

	var errMsg = "";								/* create variable to store the error message */
	var result = true;								/* assumes no errors */
	var pattern = /^[a-za-z ]+$/;					/* regular expression for letters and spaces only */

	/* check if all required date are entered */
    if ((delivery_type_delivery)) {
        if (delivery_address == "") {
            errMsg += "Delivery Address cannot be empty.\n";	//check whether delivery address is empty
        }

        if (delivery_suburb == "") {
            errMsg += "Delivery Suburb cannot be empty.\n";		//check whether delivery suburb is empty
        }

        if (delivery_postcode == "") {	
            errMsg += "Delivery PostCode cannot be empty.\n";	//check whether delivery postcode is empty
        }

        if (delivery_postcode.length != 4) {
            errMsg += "Delivery Post code must be 4 digits long.\n";	//check whether postcode is 4 digits long
        }
    }

	if (billing_address == "") {
		errMsg += "Billing Address cannot be empty.\n";	//check whether billing address is empty
	}

	if (billing_suburb == "") {
		errMsg += "Billing Suburb cannot be empty.\n";	//check whether billing suburb is empty
	}

	if (billing_postcode == "") {
		errMsg += "Billing PostCode cannot be empty.\n";	//check whether billing postcode is empty
	}

    if (billing_postcode.length != 4) {
        errMsg += "Billing Post code must be 4 digits long.\n"; //check whether billing postcode is empty
    }

	if (pizza_order == "") {
		errMsg += "Pizza Order cannot be empty.\n"; //check whether pizza order is empty
	}

	if ((!delivery_type_pickup) && (!delivery_type_delivery)) {
		errMsg += "A Delivery type must be selected.\n"; //check whether delivery type is selected
	}

	if ((!payment_type_pickup) && (!payment_type_online)) {
		errMsg += "A Payment type must be selected.\n"; //check whether payment type is selected
	}
	
	/* Display error message any error(s) is/are detected */
    if (errMsg != "") {
        alert(errMsg);
        var result = false;
    }

    return result;
}

/* link HTML elements to corresponding event function */
function init() {
    $("#regform").submit(validate_order);
    $("#regform2").submit(validate_register);
}

/* execute function init() once the window is loaded*/
$(document).ready(init);