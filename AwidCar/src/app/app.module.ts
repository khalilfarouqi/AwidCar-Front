import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ClientComponent } from './client/client.component';
import { OrderComponent } from './order/order.component';
import { CarComponent } from './car/car.component';
import { NotificationComponent } from './notification/notification.component';
import { UserComponent } from './user/user.component';
import { SettingComponent } from './setting/setting.component';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CarEditeurComponent } from './car-editeur/car-editeur.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CarDetailsComponent } from './car-details/car-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NotificationDetailComponent } from './notification-detail/notification-detail.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ImmatriculationPopupComponent } from './immatriculation-popup/immatriculation-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ClientComponent,
    OrderComponent,
    CarComponent,
    NotificationComponent,
    UserComponent,
    SettingComponent,
    CarEditeurComponent,
    CarDetailsComponent,
    OrderDetailsComponent,
    NotificationDetailComponent,
    ClientDetailsComponent,
    ImmatriculationPopupComponent
  ],
  imports: [
    BrowserModule,
    DatePipe,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    NgFor,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
