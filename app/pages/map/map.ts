/// <reference path="../../../typings/typings/globals/google.maps/index.d.ts"/>

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MapPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/map/map.html',
})
export class MapPage {
    private map: google.maps.Map;

    constructor(private nav: NavController) {
        this.initMap();
    }

    initMap() {
        navigator.geolocation.getCurrentPosition((position) => {

            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

        }, (error) => {
            console.log(error);
        });
    }
}
