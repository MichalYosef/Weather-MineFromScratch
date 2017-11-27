var weatherApp = angular.module('liveWeatherApp',[]);

weatherApp.controller('getWeatherCtrl',function()
{
    cities = [
        {
            cityName : "Jerusalem",
            enabled : true, //for button show or not
            hide: false
        },
        {
            cityName : "Beer Sheva",
            enabled : true,
            hide: false 
        }
    ];

    this.cities = cities;
    

});