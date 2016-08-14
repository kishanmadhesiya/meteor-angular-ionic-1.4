import angular from 'angular';
        import angularMeteor from 'angular-meteor';
        import { Meteor } from 'meteor/meteor';
        import { Mongo } from 'meteor/mongo';
        import template from '../../templates/chats.html';
       // import { _ } from 'meteor/underscore';
        import Ionic from 'ionic-scripts';
        import { Accounts } from 'meteor/accounts-base';
        import { Controller } from 'angular-ecmascript/module-helpers';
        export default class ChatsCtrl extends Controller {        constructor($scope) {
            super(...arguments);
            this.fid="abcd";
            this.helpers({
                
                allChats(){
                return Chats.find({});
                },
                getName(){
                    console.log(this.fid);
//                    if(Meteor.userId()==fid){
//                        var id=tid;
//                    }else{
//                       var id=fid; 
//                    }
//                    var data=Meteor.users.find({_id:id}).fetch();
//                    console.log(data);
                }
            });
                
        }
        chatOpen(userid){
                    this.$state.go('tab.messages', { chatid: userid });
        }
        };
        ChatsCtrl.$inject = ['$stateParams','$scope', '$reactive', '$meteor', '$state', '$ionicLoading', '$ionicPopup', '$log', '$rootScope'];
