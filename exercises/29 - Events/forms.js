const wes = document.querySelector('.wes');

wes.addEventListener('click', function (e) {
    e.preventDefault();
})


const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(e.currentTarget.name.value);
    // console.log(e.currentTarget.email.value);
    // console.log(e.currentTarget.agree.checked);
})


