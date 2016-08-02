import { _ } from 'meteor/underscore';
        import Ionic from 'ionic-scripts';
        import { Accounts } from 'meteor/accounts-base';
        import { Controller } from 'angular-ecmascript/module-helpers';
        export default class SignupCtrl extends Controller {
        btnsignup(){
        var username = this.data.username;
                var email = this.data.email;
                var password = this.data.password;
                var mobile = this.data.mobile;
                var confpassword = this.data.confpassword;
                var popup=this;
                Meteor.call("createUsers", username, email, password, mobile, function(error, result){
                   
                if (result.status){
                popup.$ionicPopup.alert({
                title: 'Success',
                        template: '<center>Account Created</center>',
                        buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                        text: 'Ok',
                                type: 'button-positive',
                        }]

                });
                popup.$state.go('login');
            }else{
                 popup.$ionicPopup.alert({
                title: 'Error',
                        template: '<center>Email Id Already Exist</center>',
                        buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                        text: 'Cancel',
                                type: 'button-assertive',
                        }]

                });
                }

                });
        }

        };
        SignupCtrl.$inject = ['$scope', '$state', '$ionicLoading', '$ionicPopup', '$log', '$rootScope'];
