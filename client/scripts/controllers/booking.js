import angular from 'angular';
        import angularMeteor from 'angular-meteor';
        import { Meteor } from 'meteor/meteor';
        import { Mongo } from 'meteor/mongo';
        import template from '../../templates/booking.html';
       // import { _ } from 'meteor/underscore';
        import Ionic from 'ionic-scripts';
        import { Accounts } from 'meteor/accounts-base';
        import { Controller } from 'angular-ecmascript/module-helpers';
        export default class BookingCtrl extends Controller {       
                constructor($scope,$reactive) {
            super(...arguments);
            this.myvar=[];
            this.helpers({
                
                
            });
                
        }
        bookOrder(){
            var name=this.data.name;
            var mobile=this.data.mobile;
            var item=this.data.item;
            var quantity=this.data.quantity;
            var remarks=this.data.remarks;
            var popup=this;
            Meteor.call("bookOrder",name,mobile,quantity,item,remarks,function(error,result){
                if(error){
                    popup.$ionicPopup.alert({
                title: 'Error',
                        template: '<center>Technical Issue</center>',
                        buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                        text: 'Ok',
                                type: 'button-assertive',
                        }]

                });
                }else{
                    if(result.status){
                        popup.$ionicPopup.alert({
                title: 'Success',
                        template: '<center>Booked Successfully</center>',
                        buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                        text: 'Ok',
                                type: 'button-positive',
                        }]

                });
                   popup.$state.go('tab.order');
                    }
                }
                
            });
//                    this.myvar.push(1);
//                    console.log(this.getReactively('myvar'));
        }
        };
        BookingCtrl.$inject = ['$stateParams','$scope', '$reactive', '$meteor', '$state', '$ionicLoading', '$ionicPopup', '$log', '$rootScope'];
