

class Login {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

export let utenti = [
    new Login(1,"Mario","1234"),
    new Login(2,"Giacomo","5678"),
    new Login(3,"Gigi","91011")
];

export default Login;