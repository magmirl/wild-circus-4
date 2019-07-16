import { Component, OnInit, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Location } from '@angular/common';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    animations: [
        trigger('animation1', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate(300)
            ]),
            transition(':leave', [
                animate(300, style({ opacity: 0 }))
            ]),
            state('*', style({ opacity: 100 })),
        ]),
    ]
})

export class NavbarComponent implements OnInit {

    isNavOpen: boolean = false;
    enable: boolean = false;
    screenHeight: any;
    atHome: boolean
    toggleSideNav() {
        this.isNavOpen = !this.isNavOpen;
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {

        const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 550 && !this.enable) {
            this.enable = true;
        } else if (number < 550 && this.enable) {
            this.enable = false;
        }
    }
    constructor(private location: Location, private router: Router) {
        this.getScreenSize();
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                if (this.location.path() === '') {
                    this.atHome = true;
                } else {
                    this.atHome = false;
                }
                this.enable = false;
            }
        });
    }

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
    }

    ngOnInit() {
        if (this.location.path() === '') {
            this.atHome = true;
        } else {
            this.atHome = false;
        }
        this.enable = false;
    }

}
