$(document).ready(

    function () {
        $('#registerform').submit(function (e) {
            e.preventDefault();

            const myFormData = {
                username:$('#username').val(),
                address:$('#address').val(),
                password:$('#password').val()

            }


console.log(myFormData)

        $.ajax({
            url: 'http://localhost:3000/test',
            method:'POST',
            contentType:'application/json',
            data:JSON.stringify(myFormData),
            dataType:'json',

            success:function(result){

    console.log('i am here');
            },
            error:function(jqXHR,status){
                console.log(jqXHR.responseJSON.message);
                console.log(status)
            }
        })
        })
        console.log("sasa");
    }
)