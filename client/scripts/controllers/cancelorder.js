import angular from 'angular';
        import angularMeteor from 'angular-meteor';
        import { Meteor } from 'meteor/meteor';
        import { Mongo } from 'meteor/mongo';
        import template from '../../templates/cancelorder.html';
        // import { _ } from 'meteor/underscore';
        import Ionic from 'ionic-scripts';
        import { Accounts } from 'meteor/accounts-base';
        import { Controller } from 'angular-ecmascript/module-helpers';
        export default class CancelCtrl extends Controller {
        constructor($scope, $reactive) {
        super(...arguments);
                this.myvar = [];
                this.helpers({

                allOrder(){
                return OrderBook.find({userby:Meteor.userId(),status:"process"});
                },
                });
        }
        cancelOrder(orderid){
        var popup = this;
                Meteor.call("cancelOrder", orderid, function(error, result){
                if (error){
                    popup.$ionicPopup.alert({
                title: 'Error',
                        template: '<center>Technical Issue</center>',
                        buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                        text: 'Ok',
                                type: 'button-assertive',
                        }]

                });
                } else{
                if (result.status){
                    popup.$ionicPopup.alert({
                title: 'Success',
                        template: '<center>Order Cancelled</center>',
                        buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                        text: 'Ok',
                                type: 'button-assertive',
                        }]

                });
                }
                }
                })
        }

        };
        CancelCtrl.$inject = ['$stateParams', '$scope', '$reactive', '$meteor', '$state', '$ionicLoading', '$ionicPopup', '$log', '$rootScope'];
