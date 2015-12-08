/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }])

  //POSTS
  
  .controller('PostsIndexCtrl', ['Post', '$scope', '$location', '$http', function (Post, $scope, $location, $http) {
    // GET POSTS
    $scope.posts = Post.query();
    


    // CREATE A POST    
    $scope.createPost = function() {
      var post = new Post($scope.post)
      post.$save(function(data) {
        $scope.posts.unshift(data)
        $scope.post = {};
      })
    };

    $scope.createComment = function() {
      var comment = new Comment($scope.comment);
      comment.$save(function(data) {
        $scope.comments.unshift(data)
        $scope.comment = {};
      })
    };

    // DELETE A POST
    $scope.deletePost = function(post, index) {
      Post.remove({ id: post._id }, function(data) {
        $scope.posts.splice(index, 1);
      })
    };
  }])

  .controller('MusicSearch', function($http, $window, $scope) {
    $scope.createComment = function() {
      var comment = new Comment($scope.comment);
      comment.$save(function(data) {
        $scope.comments.unshift(data)
        $scope.comment = {};
        })
        
    }
  })
  ;
