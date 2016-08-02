Meteor.methods({
    "createUsers": function(username,email, password,mobile) {
        var users = {
            username: email,
            email: email,
            password: password,
            name:username,
            roles: ['User']
        };
            var userid = Accounts.createUser({
                email: users.email,
                password: users.password,
                username: users.username,
                profile:{name:users.name,mobile:mobile}
            });
            Roles.addUsersToRoles(userid, users.roles);
        return returnSuccess("Sign Up Successfully");
    },
    "emailVerify": function(email) {
        var userId = Meteor.users.findOne({
            username: email
        })._id;
        Accounts.sendVerificationEmail(userId);
        console.log("verify mail send");
    }
    
    
    
})
