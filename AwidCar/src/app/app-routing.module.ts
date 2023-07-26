import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';
import { ClientComponent } from './client/client.component';
import { NotificationComponent } from './notification/notification.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { CarEditeurComponent } from './car-editeur/car-editeur.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "car", component: CarComponent},
  {path: "client", component: ClientComponent},
  {path: "order", component: OrderComponent},
  {path: "notification", component: NotificationComponent},
  {path: "user", component: UserComponent},
  {path: "setting", component: SettingComponent},
  {path: "carEditeur", component: CarEditeurComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
