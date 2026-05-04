function login() {
        var user = document.getElementById("username").value;
            var pass = document.getElementById("password").value;

                if (user === "admin" && pass === "1234") {
                        window.location.href = "balance.html";
                            } else {
                                    document.getElementById("message").innerText = "Invalid Credentials";
                                        }
                                        }
}