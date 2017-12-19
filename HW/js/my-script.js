$(document).ready(function () {
    $("#btn").click(function(){
        var inputBox = "<input type='text' name='first_name' placeholder='First Name' id='fn'> <input type='text' name='last_name' placeholder='Last Name' id='ln'><br/>";

        $("#newCreate").append(inputBox);
        $("#newCreate").append(inputBox1);
    });

});

