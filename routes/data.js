$(document).ready(function () {
    $("#submit").click(function () {
        $.get('http://localhost:7000/User-info',
                {

                    email: req.query.email,

                },
                function (data, status) {
                    console.log(data);
                }
        )
    })
})