document.getElementById("form-element").addEventListener("submit", sendEmail);

function sendEmail(event){
    event.preventDefault();

    Email.send({
        Host: "smtp.elasticemail.com",
        Port: 2525,
        Username: "libinth93@gmail.com",
        Password: "E00FAF4170936484C71235F593CD124171E7",
        To: "libinth93@gmail.com",
        From : "libinth93@gmail.com",
        Subject : "Personal website enquiry from: "+ document.getElementById('email').value,
        Body : "<html><p>Hey Libin,</p><br></br><br></br><p>"+document.getElementById("message").value+"</p><br></br><br></br><strong>Thanks,</strong><br></br><strong>"+document.getElementById("name").value+"</strong></html>",
    }).then(
        document.querySelector("#form-element").style.display = "none",
        document.querySelector("#thank-msg").style.display = "block"
        // message => alert("mail sent successfully")
        );
}

