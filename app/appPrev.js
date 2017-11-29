"use strict"; 

(function()
{
    var weatherApp = angular.module('liveWeatherApp',[]);

    weatherApp.controller('PanelController',function()
    {
        // this.tab = 1;

        this.selectTab = function(setTab)
        {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab)
        {
            return this.tab === checkTab;
        }
        
    });

    weatherApp.controller('getWeatherCtrl',function()
    {
        var cities = [
                {
                    cityName : "Jerusalem",
                    enabled : true, //for button show or not
                    hide: false,
                    images: [{src:"images/jerusalem1.jpg"}]
                },
                {
                    cityName : "Beer Sheva",
                    enabled : true,
                    hide: false,
                    images: [] 
                }
            ];

        this.cities = cities;
    });

    weatherApp.controller('GalleryController',function(){
        this.current = 0;
        
        this.setCurrent  = function(curVal){
          
          this.current = curVal || 0;
          
        };
    });

})();