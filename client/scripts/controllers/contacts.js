import angular from 'angular';
        import angularMeteor from 'angular-meteor';
        import { Meteor } from 'meteor/meteor';
        import { Mongo } from 'meteor/mongo';
        import template from '../../templates/contacts.html';
        // import { _ } from 'meteor/underscore';
        import Ionic from 'ionic-scripts';
        import { Accounts } from 'meteor/accounts-base';
        import { Controller } from 'angular-ecmascript/module-helpers';
        export default class ContactsCtrl extends Controller {
        constructor($scope) {
        super(...arguments);
                this.helpers({
                allUsers(){
                return Meteor.users.find();
                },
                        getCurrentUser(){
                return Meteor.userId();
                }
                })

        }
        };
        ContactsCtrl.$inject = ['$scope', '$reactive', '$meteor', '$state', '$ionicLoading', '$ionicPopup', '$log', '$rootScope'];
