app.controller("demoController",function($scope){
$scope.text="hi fuck offf...";
$scope.htmlText="<h1>Fuck u</h1>";
$scope.divStyle= { };
console.log(angular.element(".div-1").height());
$scope.divStyle={ height : angular.element(".div-1").height()+ "px" };
});