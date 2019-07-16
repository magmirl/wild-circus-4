import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Abbey } from '../class/abbey';
import { text } from '@angular/core/src/render3';
import { AbbeyService } from '../services/abbey.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  myMap: any;
  allAbbey: Abbey[] = [];

  constructor(private abbeyService: AbbeyService) { }

  ngOnInit() {
    this.abbeyService.getAllAbbey().subscribe(
      (abbey: Abbey[]) => {
        this.allAbbey = abbey;
        this.generateMap(this.allAbbey);
      }
    );
  }

  public generateMap(tabOfAbbey: Abbey[]) {

    this.myMap = L.map('map').setView([47.6311634, 3.0599573], 4);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      noWrap: true,
      attribution: 'Ordre de Tiron'
    }).addTo(this.myMap);

    const iconNotMember = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png'
    });

    const iconMember = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png'
    });


    //Add point on map
    for (let i = 0; i < tabOfAbbey.length; i++) {
      let text: string = "<strong>Nom : </strong>" + tabOfAbbey[i].name + " , Description : " + tabOfAbbey[i].description;

      if (tabOfAbbey[i].member) {
        let test = L.marker([tabOfAbbey[i].latitude, tabOfAbbey[i].longitude], {
          icon: iconMember
        }).bindPopup(text).addTo(this.myMap)
      } else {
        let test = L.marker([tabOfAbbey[i].latitude, tabOfAbbey[i].longitude], {
          icon: iconNotMember
        }).bindPopup(text).addTo(this.myMap)
      }
    }
  }

}
