

// Libs

import 'angular-animate';

import 'angular-meteor';

import 'angular-sanitize';

import 'angular-ui-router';
import 'ionic-scripts';
import 'angular-moment';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';
import RoutesConfig from '../routes';
import SignupCtrl from '../controllers/signup';
import LoginCtrl from '../controllers/login';
import ContactsCtrl from '../controllers/contacts';
import DetailsCtrl from '../controllers/details';
import MessagesCtrl from '../controllers/messages';
import ChatsCtrl from '../controllers/chats';
import InputDirective from '../directives/input';
import CalendarFilter from '../filters/calander';

// Modules
const App = 'CybuzzSC';


// App

Angular.module(App, [

  'angular-meteor',
  'angularMoment',
  'ionic'

]);

new Loader(App)

  .load(RoutesConfig)
  .load(LoginCtrl)
  .load(ContactsCtrl)
  .load(ChatsCtrl)
  .load(DetailsCtrl)
  .load(MessagesCtrl)
  .load(SignupCtrl)
  .load(CalendarFilter)
  .load(InputDirective);

// Startup

if (Meteor.isCordova) {

  Angular.element(document).on('deviceready', onReady);

}

else {

  Angular.element(document).ready(onReady);

}

 

function onReady() {

  Angular.bootstrap(document, [App]);

}

