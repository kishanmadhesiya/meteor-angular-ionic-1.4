import { Meteor } from 'meteor/meteor';
        import { _ } from 'meteor/underscore';
        import Ionic from 'ionic-scripts';
        import { Accounts } from 'meteor/accounts-base';
        import { Controller } from 'angular-ecmascript/module-helpers';
        export default class LoginCtrl extends Controller {
        btnlogin(){
        var email = this.data.email;
                var password = this.data.password;
                var popup = this;
                this.$meteor.loginWithPassword(email, password, function (err) {
                if (err) {
                popup.$ionicPopup.alert({
                title: 'Error',
                        template: '<center>Incorrect Email or Password</center>',
                        buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                        text: 'Cancel',
                                type: 'button-assertive',
                        }]

                });
                } else {
                popup.$state.go('tab.dashboard');
                }
                });
        }

        };
        LoginCtrl.$inject = ['$scope', '$meteor', '$state', '$ionicLoading', '$ionicPopup', '$log', '$rootScope'];
