

import { Config } from 'angular-ecmascript/module-helpers';

import templateTabs from '/client/templates/tabs.html';
import templateDashboard from '/client/templates/dashboard.html';
import templateLogin from '/client/templates/login.html';
import templateSignup from '/client/templates/signup.html';
import templateOrder from '/client/templates/order.html';
import templateContacts from '/client/templates/contacts.html';
import templateChats from '/client/templates/chats.html';
import templateSettings from '/client/templates/settings.html';
import templateDetails from '/client/templates/details.html';
import templateMessages from '/client/templates/messages.html';

export default class RoutesConfig extends Config {

  configure() {

    this.$stateProvider

      .state('tab', {

        url: '/tab',

        abstract: true,

        templateUrl: templateTabs

      })
      .state('tab.dashboard', {

        url: '/dashboard',

        views: {

          'tab-dashboard': {

            templateUrl: templateDashboard

          }

        }
    })
    .state('tab.details', {
        url: '/contacts/:contactsid',
        views: {
          'tab-contacts': {
            templateUrl: 'client/templates/details.html',
            controller: 'DetailsCtrl as details'
          }
        }
})
.state('tab.messages', {
        url: '/chats/:chatid',
        views: {
          'tab-chats': {
            templateUrl: templateMessages,
            controller: 'MessagesCtrl as messages'
          }
        }
})
    .state('tab.order', {

        url: '/order',

        views: {

          'tab-order': {

            templateUrl: templateOrder

          }

        }
    })
    .state('tab.contacts', {

        url: '/contacts',

        views: {

          'tab-contacts': {

            templateUrl: templateContacts,
            controller: 'ContactsCtrl as contacts'


          }

        }
    })
    .state('tab.chats', {

        url: '/chats',

        views: {

          'tab-chats': {

            templateUrl: templateChats,
            controller: 'ChatsCtrl as chats'

          }

        }
    })
    .state('tab.settings', {

        url: '/settings',

        views: {

          'tab-settings': {

            templateUrl: templateSettings


          }

        }
    })
        .state('login', {

        url: '/login',

        templateUrl: templateLogin,
        controller: 'LoginCtrl as login'

      })
      
      .state('signup', {
        url: '/signup',
        templateUrl: templateSignup,
        controller: 'SignupCtrl as signup'
      });
      
            
    this.$urlRouterProvider.otherwise('login');

  }

}

 

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

