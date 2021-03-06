angular
  .module("PeterApp", ['ui.router', 'ngSanitize', 'youtube-embed', 'ui.bootstrap'])
  .config(Router);

  Router.$inject = ["$stateProvider", "$urlRouterProvider"]
  function Router($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "templates/home.html"
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "templates/contact.html"
      })   
      .state("blog", {
        url: "/blog",
        templateUrl: "templates/blog.html"
      })   
      .state("work", {
        url: "/work",
        templateUrl: "templates/work.html"
      });   
         
    $urlRouterProvider.otherwise("/")
  }