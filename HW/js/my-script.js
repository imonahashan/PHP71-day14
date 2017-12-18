$(document).ready(function () {
    $("#btn").click(function(){
        var inputBox = "<input type='text' name='first_name' placeholder='First Name' id='fn'> <input type='text' name='last_name' placeholder='Last Name' id='ln'><br/>";

        $("#newCreate").append(inputBox);
        $("#newCreate").append(inputBox1);
    });

});

$('#btn3').click(function () {
    var firstNameValue = $('#fn').val();
    var lastNameValue = $('#ln').val();
    var fullNameValue = firstNameValue+" "+lastNameValue;

    $('#fullName').val(fullNameValue);
});


$(document).ready(function () {
    $('#btn4').click(function () {
       var nameValue = $('#name').value();
       var emailValue = $('#email').value();

       $(
    });
});
