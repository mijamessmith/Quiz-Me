const readyPlay = document.querySelector("#readyPlay");
const messagePlay = document.querySelector(".messagePlay")


const checkValidEmailAddress = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

readyPlay.addEventListener("click", function (event) {
    event.preventDefault()
    console.log("Home Button has been clicked")
    var searchedEmail = document.querySelector("#emailToSearch").value

    var validEmail = checkValidEmailAddress(searchedEmail);
    if (validEmail) {

        let ajaxReq;
        ajaxReq = $.ajax({
            url: '/getPerson?email=' + searchedEmail,
            type: 'GET',
            datatype: "json",
            data: ""
        });

        ajaxReq.done(function (data) {
            //change car color in front end with the data
            if (data == "/playGame") {
                window.location.replace(`http://localhost:3000${data}`); //sending a new addresss to load
            }
        });
    } else messagePlay.textContent = "Not a valid email address"
});