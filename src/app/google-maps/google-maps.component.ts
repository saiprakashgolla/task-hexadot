import { Component, OnInit, ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';

import { } from '@types/googlemaps';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;
  constructor() { }

  ngOnInit() {

    // var mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    // console.log(mapProp.center);
  }
 // google maps zoom level
 zoom: number = 5;
  
 // initial center position for the map
 lat: number = 20.5937;
 lng: number = 78.9629;

 clickedMarker(label: string, index: number) {
   console.log(`clicked the marker: ${label || index}`)
 }
 
 mapClicked($event: MouseEvent) {
   this.markers.push({
     lat: $event.coords.lat,
     lng: $event.coords.lng,
     draggable: true
   });
   console.log(this.markers)
 }
 
 markerDragEnd(m: marker, $event: MouseEvent) {
   console.log('dragEnd', m, $event);
 }
 
 markers: marker[] = [
   {
     lat: 17.3850,
     lng: 78.4867,
     label: 'A',
     place:'Hyderabad',
     draggable: true
   },
   {
     lat: 12.9716,
     lng: 77.5946,
     label: 'B',
     place: 'Banglore',
     draggable: false
   },
   {
     lat: 13.0827,
     lng: 80.2707,
     label: 'C',
     place: 'CHennai',
     draggable: true
   },
   {
    lat: 19.0760,
    lng: 72.8777,
    label: 'D',
    place: 'Mumbai',
    draggable: true
  }
 ]
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  label?: string;
  place?: string;
	draggable: boolean;
}