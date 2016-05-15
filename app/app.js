'use strict';

// require('angular');

var app = angular.module('GithubApp', []);

app.controller('userController', ['$http', function($http) {
  var URL = 'https://api.github.com/users/kamil333s';

  var me = this;
  me.stars = 0;
  me.starred = [];
  me.user = [];
  me.repos = [];

  me.getUser = function () {
    $http.get(URL)
      .then((res) => {
        console.dir(res);
        me.user = res.data;
      }, function(err) {
        console.dir(err);
      });
  };

  me.getRepos = function() {
    $http.get(URL + '/repos')
    .then((res) => {
      console.log('REPO');
      console.dir(res);
      res.data.forEach((data) => {
        me.stars = me.stars + data.stargazers_count;
      });// forEach
      me.repos = res.data;
    }, function (err) {
      console.dir(err);
    });
  };

  me.getStarred = function() {
    $http.get(URL + '/starred')
    .then((res) => {
      me.starred.push(res.data.name);
    });
  };

}]);