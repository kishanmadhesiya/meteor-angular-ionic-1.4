
import Ionic from 'ionic-scripts';
import angular from 'angular';
import Moment from 'moment';
        import angularMeteor from 'angular-meteor';
        import { Meteor } from 'meteor/meteor';
        import { Mongo } from 'meteor/mongo';
        import { MeteorCameraUI } from 'meteor/okland:camera-ui';
        import template from '../../templates/messages.html';
        
       // import { _ } from 'meteor/underscore';
        import { Accounts } from 'meteor/accounts-base';
        import { Controller } from 'angular-ecmascript/module-helpers';
        export default class MessagesCtrl extends Controller {
        constructor($scope) {
            super(...arguments);
            this.messagesid = this.$stateParams.chatid;
                this.isIOS = Ionic.Platform.isWebView() && Ionic.Platform.isIOS();
                this.isCordova = Meteor.isCordova;
            this.helpers({
                messages(){
                return Messages.find({"chatId":this.messagesid});
                }
//                getUsername(){
//                    Chats.findOne({_id:this.messagesid})
//                    console.log(this.afr.userId_from);
////                    if(Meteor.userId()==Chats.find({_id:this.messagesid})){
////                        var id=Chats.find({_id:this.messagesid}).userId_to;
////                    return Meteor.users.find(id).profile.name;
////                }else{
////                    var id=Chats.find({_id:this.messagesid}).userId_from;
////                    return Meteor.users.findOne(id).profile.name;
////                }
//                }
            })
              this.autoScroll();  
        }
        sendPicture() {
    MeteorCameraUI.getPicture({}, (err, data) => {
      if (err) return this.handleError(err);

      this.callMethod('newMessage', {
        picture: data,
        type: 'picture',
      userId:Meteor.userId(),
      chatId:this.messagesid,
      timestamp: new Date()
      });
    });
  }

  sendMessage() {
    if (_.isEmpty(this.message)) return;

    this.callMethod('newMessage', {
      text: this.message,
      type: 'text',
      userId:Meteor.userId(),
      chatId:this.messagesid,
      timestamp: new Date()
    });

    delete this.message;
  }

  inputUp () {
    if (this.isIOS) {
      this.keyboardHeight = 216;
    }

    this.scrollBottom(true);
  }

  inputDown () {
    if (this.isIOS) {
      this.keyboardHeight = 0;
    }

    this.$ionicScrollDelegate.$getByHandle('chatScroll').resize();
  }

  closeKeyboard () {
    if (this.isCordova) {
      cordova.plugins.Keyboard.close();
    }
  }

  autoScroll() {
    let recentMessagesNum = this.messages.length;

    this.autorun(() => {
      const currMessagesNum = this.getCollectionReactively('messages').length;
      const animate = recentMessagesNum != currMessagesNum;
      recentMessagesNum = currMessagesNum;
      this.scrollBottom(animate);
    });
  }

  scrollBottom(animate) {
    this.$timeout(() => {
      this.$ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(animate);
    }, 300);
  }

  handleError(err) {
    if (err.error == 'cancel') return;
    this.$log.error('Profile save error ', err);

    this.$ionicPopup.alert({
      title: err.reason || 'Save failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
}

        };
        MessagesCtrl.$inject = ['$timeout', '$ionicScrollDelegate','$stateParams','$scope', '$reactive', '$meteor', '$state', '$ionicLoading', '$ionicPopup', '$log', '$rootScope'];
