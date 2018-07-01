(function(){

    angular.module("tutorial").controller("AppController", AppController);

    function AppController($scope){
         $scope.Text= "I fuck u";
   

        
         $scope.create= function() {
             console.log("I am create") 
            }
            $scope.blur= function() {
                console.log("I am blur")
           }
           $scope.focus= function() {
            console.log("I am focus")
            }
            $scope.keyup= function() {
                console.log("I am keyup")
           }
           $scope.keydown= function() {
            console.log("I am keydown")
            }
            $scope.keypress= function() {
                console.log("I am Keypress")
           }
           $scope.change= function() {
            console.log("I am change")
       }
       
}
})();