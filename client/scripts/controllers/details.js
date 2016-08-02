import angular from 'angular';
        import angularMeteor from 'angular-meteor';
        import { Meteor } from 'meteor/meteor';
        import { Mongo } from 'meteor/mongo';
        import template from '../../templates/details.html';
       // import { _ } from 'meteor/underscore';
        import Ionic from 'ionic-scripts';
        import { Accounts } from 'meteor/accounts-base';
        import { Controller } from 'angular-ecmascript/module-helpers';
        import { Chats } from '../../../lib/js/collection';
        export default class DetailsCtrl extends Controller {
        constructor($scope) {
            super(...arguments);
            this.contactsid = this.$stateParams.contactsid;
           // console.log(this.contactsid);
            this.helpers({
                datailsEmp(){
                    return Meteor.users.find({'_id':this.contactsid});
                }
            })
                
        }
        chatOpen(userid){
            var popup=this;
            Meteor.call("newChat", userid, function(error, result){
                if(result.status){
                    popup.$state.go('tab.messages', { chatid: result.message });
                }
            });

        }
        };
        DetailsCtrl.$inject = ['$stateParams','$scope', '$reactive', '$meteor', '$state', '$ionicLoading', '$ionicPopup', '$log', '$rootScope'];
