﻿/// <reference path="../angular.min.js" />
/// <reference path="../jquery-1.10.2.intellisense.js" />
var todos;

var AUDashboardApp = angular.module("AUDashboardApp", ["ngRoute"]);

AUDashboardApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
              when('/Dashboard', {
                  templateUrl: 'partials/partialDashboard.html',
                  controller: 'DashboardController'
              }).
              when('/ActionItems', {
                  templateUrl: 'partials/ActionItems.html',
                  controller: 'ActionItemsController'
              }).
            when('/ActiveProjects', {
                templateUrl: 'partials/ActiveProjects.html',
                controller: 'ActiveProjectsController'
            }).
           when('/ActiveResources', {
               templateUrl: 'partials/ActiveResources.html',
               controller: 'ActiveResourcesController'
           }).
              otherwise({
                  redirectTo: '/Dashboard'
              });
  }]);

AUDashboardApp.controller('DashboardController', ['$scope', '$http', function ($scope, $http) {

    $http({ method: 'GET', url: 'api/Dashboard/getactiveprojects' }).
        success(function (data, status, headers, config) {
            $scope.ActiveProjects = data;
        }).
        error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.ActiveProjects = -1;
        });


    $scope.PendingInvoices = 9;
    $scope.ActiveResources = 32;
    $scope.OpenActionItems = 5;
    var ProjectEntity;

    var FakeNotifications = [
        { message: '7 tasks added', eventdate: '47 mins ago', type: 'fa fa-tasks fa-fw' },
        { message: 'AMP India visit', eventdate: '18-Aug', type: 'fa fa-tasks fa-fw' },
        { message: 'Submit Project Report', eventdate: '20-Aug', type: 'fa fa-twitter fa-fw' },
        { message: 'Telstra India Visit', eventdate: '1-Sep', type: 'fa fa-comment fa-fw' },
        { message: 'EDC-AU meet', eventdate: '12-Sep', type: 'fa fa-calendar fa-fw' },
        { message: 'EDC Upcoming Holiday', eventdate: '2-Oct', type: 'fa fa-tasks fa-fw' }
    ];

    $scope.notifications = FakeNotifications;

    var ProjectDetails = [
            { Client: 'AMP', ProjectName: 'AMP-Online', IsActive: 'Active', Probability: 'Medium', Technology: 'CQ', Startdate: '4-Jul-2014', Stage: 'Development' },
            { Client: 'Telstra', ProjectName: 'Telstra.com', IsActive: 'Active', Probability: 'Medium', Technology: 'CQ', Startdate: '4-Jul-2014', Stage: 'Development' },
            { Client: 'Caltex', ProjectName: 'Caltex', IsActive: 'Active', Probability: 'Medium', Technology: 'Sitecore', Startdate: '4-Jul-2014', Stage: 'UAT' },
            { Client: 'VicRoads', ProjectName: 'VicRoads', IsActive: 'Active', Probability: 'Medium', Technology: 'Sitecore', Startdate: '4-Jul-2014', Stage: 'Design' },
            { Client: 'CPA ITB', ProjectName: 'CPA ITB', IsActive: 'Inactive', Probability: 'Medium', Technology: 'Sitecore', Startdate: '4-Jul-2014', Stage: 'Design' },
            { Client: 'Sydney Trains', ProjectName: 'SydneyTrains', IsActive: 'Lost', Probability: 'Medium', Technology: 'CQ', Startdate: '4-Jul-2014', Stage: 'Proposal' }
    ];

    $scope.ActiveProjectDetails = ProjectDetails;

    var ActionItems = [
            { ShortDesc: 'TafeNSW', Owner: 'Adam', DueDate: '20-Aug', Status: 'Closed' },
            { ShortDesc: 'Testing CoE', Owner: 'Shakeel', DueDate: '20-Aug', Status: 'Open' },
            { ShortDesc: 'Upcoming Holidays', Owner: 'Tushar', DueDate: '20-Aug', Status: 'Open' },
            { ShortDesc: 'India Trip', Owner: 'Adam', DueDate: '20-Aug', Status: 'Open' },
            { ShortDesc: 'India Trip', Owner: 'Adam', DueDate: '20-Aug', Status: 'Open' },
            { ShortDesc: 'India Trip', Owner: 'Adam', DueDate: '20-Aug', Status: 'Open' }
    ];

    $scope.AllActionItems = ActionItems;

    var InvoicesData = [
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Aus Super Spt', Partner: 'Milesi / Lipman', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'ANZ', Partner: 'Carlisle / Adappa', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2013', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2013', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2013', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2013', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Pending' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2014', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2014', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2014', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Sharma, Tushar', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Pending' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Time Saver App', Partner: 'Hallam/Enderby', Resource: 'Tiwari Harsha, Harkala Ram', Period: 'P10_FY12', Date: '02/20/12 - 03/02/12', AmountUSD: 4860, ATBApproval: 'Received', ATBSentOn: '11/26/2012', InvoiceRaised: 'Yes', InvoiceNumber: '3000079888', InvoiceRaisedOn: '11/27/2012', Comments: '---', PaymentReceived: 'Received' }
    ];


    var FakeInvoicesData = [
        { Project: 'Project 1', Partner: 'Partner 1', Resource: 'Resource 1, Resource 2', Period: 'P10_FY13', Date: '02/20/17 - 03/02/17', AmountUSD: 1234, ATBApproval: 'Received', ATBSentOn: '11/26/2017', InvoiceRaised: 'Yes', InvoiceNumber: '123456789', InvoiceRaisedOn: '11/27/2017', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Project 2', Partner: 'Partner 2', Resource: 'Resource 2, Resource 3', Period: 'P10_FY13', Date: '02/20/18 - 03/02/18', AmountUSD: 5678, ATBApproval: 'Received', ATBSentOn: '11/26/2018', InvoiceRaised: 'Yes', InvoiceNumber: '987654321', InvoiceRaisedOn: '11/27/2017', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Project 3', Partner: 'Partner 3', Resource: 'Resource 3, Resource 4', Period: 'P10_FY13', Date: '02/20/19 - 03/02/19', AmountUSD: 9012, ATBApproval: 'Received', ATBSentOn: '11/26/2019', InvoiceRaised: 'Yes', InvoiceNumber: '111111111', InvoiceRaisedOn: '11/27/2017', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Project 4', Partner: 'Partner 4', Resource: 'Resource 3, Resource 2', Period: 'P10_FY13', Date: '02/20/18 - 03/02/18', AmountUSD: 1234, ATBApproval: 'Received', ATBSentOn: '11/26/2017', InvoiceRaised: 'Yes', InvoiceNumber: '987654321', InvoiceRaisedOn: '11/27/2017', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Project 5', Partner: 'Partner 1', Resource: 'Resource 1, Resource 4', Period: 'P10_FY13', Date: '02/20/19 - 03/02/19', AmountUSD: 5678, ATBApproval: 'Received', ATBSentOn: '11/26/2018', InvoiceRaised: 'Yes', InvoiceNumber: '222222222', InvoiceRaisedOn: '11/27/2017', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Project 6', Partner: 'Partner 2', Resource: 'Resource 1, Resource 2', Period: 'P10_FY13', Date: '02/20/18 - 03/02/18', AmountUSD: 9876, ATBApproval: 'Received', ATBSentOn: '11/26/2019', InvoiceRaised: 'Yes', InvoiceNumber: '987654321', InvoiceRaisedOn: '11/27/2017', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Project 7', Partner: 'Partner 3', Resource: 'Resource 1, Resource 2', Period: 'P10_FY13', Date: '02/20/19 - 03/02/19', AmountUSD: 5432, ATBApproval: 'Received', ATBSentOn: '11/26/2017', InvoiceRaised: 'Yes', InvoiceNumber: '112233445', InvoiceRaisedOn: '11/27/2017', Comments: '---', PaymentReceived: 'Received' },
        { Project: 'Project 8', Partner: 'Partner 4', Resource: 'Resource 1, Resource 2', Period: 'P10_FY13', Date: '02/20/18 - 03/02/18', AmountUSD: 4321, ATBApproval: 'Received', ATBSentOn: '11/26/2018', InvoiceRaised: 'Yes', InvoiceNumber: '987654321', InvoiceRaisedOn: '11/27/2017', Comments: '---', PaymentReceived: 'Received' },

    ];


    $scope.AllInvoices = FakeInvoicesData;




    $scope.AddProject = function (ProjectEntity) {
        var currentProjects = $scope.ActiveProjectDetails;
        var newProjects = currentProjects.concat(ProjectEntity);
        $scope.ActiveProjectDetails = newProjects;
        $scope.IsHidden = 'false';
        $scope.ProjectEntity = '';

    };

}]);

AUDashboardApp.controller('ActionItemsController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    var todos = $scope.todos = [];

    $scope.newTodo = '';
    $scope.newAssignedTo = '';
    $scope.editedTodo = null;
    var STORAGE_ID = 'ToDoItems';

    $scope.$watch('todos', function (newValue, oldValue) {
        //$scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
        //$scope.completedCount = todos.length - $scope.remainingCount;
        //$scope.allChecked = !$scope.remainingCount;
        if (newValue !== oldValue) { // This prevents unneeded calls to the local storage
            $scope.setTodos(todos);
        }
    }, true);

    //// Monitor the current route for changes and adjust the filter accordingly.
    //$scope.$on('$routeChangeSuccess', function () {
    //    var status = $scope.status = $routeParams.status || '';

    //    $scope.statusFilter = (status === 'active') ?
    //			{ completed: false } : (status === 'completed') ?
    //			{ completed: true } : null;
    //});

    $scope.getTodos = function () {
        debugger;
        $http({ method: 'GET', url: 'api/Dashboard/GetReferenceData?storageId=' + STORAGE_ID }).
               success(function (data, status, headers, config) {

                   if (data != 'null') {
                       todos = $scope.todos = JSON.parse(JSON.parse(data));
                   }
               }).
               error(function (data, status, headers, config) {
                   // called asynchronously if an error occurs
                   // or server returns response with an error status.
                  
               });

    };

    $scope.getTodos();

    $scope.setTodos = function (todos) {
        //localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
        debugger;
        var referenceData = new Object();
        referenceData.storageId = STORAGE_ID;
        referenceData.storageData = JSON.stringify(todos);
        $http({
            url: 'api/Dashboard/SetReferenceData',
            method: "POST",
            data: JSON.stringify(JSON.stringify(referenceData))
        })
       .then(function (response) {
       },
       function (response) { // optional
       }
     );
    };

    $scope.addTodo = function () {
        debugger;
        var newTodo = $scope.newTodo.trim();
        var newAssignedTo = $scope.newAssignedTo.trim();
        if (!newTodo.length && !newTodo.length) {
            return;
        }
        todos.push({
            title: newTodo,
            AssignedTo: newAssignedTo,
            completed: false
        });

        $scope.newTodo = '';
        $scope.newAssignedTo = '';
    };

    $scope.editTodo = function (todo) {
        $scope.editedTodo = todo;
        // Clone the original todo to restore it on demand.
        $scope.originalTodo = angular.extend({}, todo);
    };

    $scope.doneEditing = function (todo) {
        $scope.editedTodo = null;
        todo.title = todo.title.trim();
        todo.AssignedTo = todo.AssignedTo.trim();

        if (!todo.title) {
            $scope.removeTodo(todo);
        }
    };

    $scope.revertEditing = function (todo) {
        todos[todos.indexOf(todo)] = $scope.originalTodo;
        $scope.doneEditing($scope.originalTodo);
    };

    $scope.removeTodo = function (todo) {
        todos.splice(todos.indexOf(todo), 1);
    };

    $scope.clearCompletedTodos = function () {
        $scope.todos = todos = todos.filter(function (val) {
            return !val.completed;
        });
    };

    $scope.markAll = function (completed) {
        todos.forEach(function (todo) {
            todo.completed = !completed;
        });
    };
}]);


AUDashboardApp.controller('ActiveProjectsController', ['$scope', function ($scope) {


    $scope.ActiveProjects = 12;
    $scope.PendingInvoices = 9;
    $scope.ActiveResources = 32;
    $scope.OpenActionItems = 5;
    var ProjectEntity;
    var ProjectDetails = [
            { Client: 'AMP', ProjectName: 'AMP-Online', IsActive: 'Active', Probability: 'Medium', Technology: 'CQ', Startdate: '4-Jul-2014', Stage: 'Development' },
            { Client: 'Telstra', ProjectName: 'Telstra.com', IsActive: 'Active', Probability: 'Medium', Technology: 'CQ', Startdate: '4-Jul-2014', Stage: 'Development' },
            { Client: 'Caltex', ProjectName: 'Caltex', IsActive: 'Active', Probability: 'Medium', Technology: 'Sitecore', Startdate: '4-Jul-2014', Stage: 'UAT' },
            { Client: 'VicRoads', ProjectName: 'VicRoads', IsActive: 'Active', Probability: 'Medium', Technology: 'Sitecore', Startdate: '4-Jul-2014', Stage: 'Design' },
            { Client: 'CPA ITB', ProjectName: 'CPA ITB', IsActive: 'Inactive', Probability: 'Medium', Technology: 'Sitecore', Startdate: '4-Jul-2014', Stage: 'Design' },
            { Client: 'Sydney Trains', ProjectName: 'SydneyTrains', IsActive: 'Lost', Probability: 'Medium', Technology: 'CQ', Startdate: '4-Jul-2014', Stage: 'Proposal' }
    ];

    $scope.ActiveProjectDetails = ProjectDetails;


    $scope.AddProject = function (ProjectEntity) {
        var currentProjects = $scope.ActiveProjectDetails;
        var newProjects = currentProjects.concat(ProjectEntity);
        $scope.ActiveProjectDetails = newProjects;
        $scope.IsHidden = 'false';
        $scope.ProjectEntity = '';

    };

}]);

AUDashboardApp.controller('ActiveResourcesController', ['$scope', '$http', function ($scope, $http) {

    $scope.GetResource = function () {
        $http({ method: 'GET', url: 'api/Dashboard/GetResourceList' }).
      success(function (data, status, headers, config) {
          $scope.AllResources = JSON.parse(JSON.parse(data));
      }).
      error(function (data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          $scope.AllResources = -1;

      });
    };

    $scope.EditMode = "false";

    $scope.EditResource = function (resource) {
        debugger;
        $scope.EditMode = "true";
        // Shallow Copy - $scope.ResourceEntity = resource;
        $scope.ResourceEntity = jQuery.extend(true, {}, resource); // deep copy

    }

    $scope.GetResource();

    $scope.addResource = function (resource) {
        debugger;

        if ($scope.EditMode == "true") {
            $http({
                url: 'api/Dashboard/EditResource',
                method: "POST",
                data: "'" + JSON.stringify(resource) + "'"
            })
            .then(function (response) {

                $scope.GetResource();
                $scope.ResourceEntity = '';
                dialog.close;

            },
            function (response) { // optional
            }
          );

        }
        else {
            $http({
                url: 'api/Dashboard/AddResource',
                method: "POST",
                data: "'" + JSON.stringify(resource) + "'"
            })
            .then(function (response) {

                $scope.GetResource();
                $scope.ResourceEntity = '';
                dialog.close;

            },
            function (response) { // optional
            }
          );
        }



    };


    // $scope.AllResources = allResources;

}]);
