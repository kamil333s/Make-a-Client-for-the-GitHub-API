/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);