import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    constructor(private router: Router) {
        
    }


    ngOnInit() {
    }

}