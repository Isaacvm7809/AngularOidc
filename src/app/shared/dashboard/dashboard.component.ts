import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [MatSidenavModule, RouterOutlet, MenuComponent]
})
export default class DashboardComponent {

}
