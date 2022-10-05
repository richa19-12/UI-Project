var jobRoles = ["Developer", "UI", "Software Testing", "Data", "Data Scientist", "HR"];
$(function () {
    console.log('page loaded');

    var jobrole = "";

    jobRoles.forEach(element => {
        jobrole += "<option value="+element+">"+element+"</option>";
    });
    $('#jobrole').html(jobrole);
    //on sign up button click
    $('.signup_button').on('click', function () {
        console.log('Submit button clicked');

        var name = $('[name="fname"]').val();
        var email = $('[name="email"]').val();
        var password = $('[name="pwd"]').val();
        var age = $('[name="age"]:checked').val();
        var bio = $('#biography').val();
        var role = $('[name="jobrole"]').val();
        //var interest = $('[name="interest"]:checked').val();



        var user_details = [];

        //push all user values into user_details array
        user_details.push(
            {
                name: name,
                email: email,
                password: password,
                age: age,
                biography: bio,
                jobrole: role
                
            }
        )

        console.log(user_details);
    });
})