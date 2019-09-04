import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {AddComponent} from './pages/add/add.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import { CustomerService } from './shared/customer.service';
import { CustomerComponent } from './pages/add/customer/customer.component';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketDetailComponent } from './pages/add/customer/ticket-detail/ticket-detail.component';
import { GrdFilterPipe } from './shared/grd-filter.pipe';
import { StatisticsService } from './shared/statistics.service';
import { NavbarComponent } from './navbar/navbar.component';

import { FusionChartsModule } from 'angular-fusioncharts';
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import { DatePipe } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { MessageComponent } from './pages/message/message.component';
import { PartnershipComponent } from './pages/partnership/partnership.component';
import { EventInformationModule } from './pages/event-information/event-information.module';
import { HomeModule } from './pages/home/home.module';
import { AdminComponent } from './pages/admin/admin.component';
import { AnalysisComponent } from './pages/admin/analysis/analysis.component';
import { CustomerListComponent } from './pages/admin/customer-list/customer-list.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsModule } from './pages/news/news.module';
import { AddUserComponent } from './pages/admin/user/add-user/add-user.component';
import { EditUserComponent } from './pages/admin/user/edit-user/edit-user.component';
import { ContentComponent } from './pages/admin/content/content.component';
import { EditContentComponent } from './pages/admin/content/edit-content/edit-content.component';
import { AddContentComponent } from './pages/admin/content/add-content/add-content.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { TablesComponent } from './pages/admin/tables/tables.component';
import { TableStatusComponent } from './pages/admin/tables/table-status/table-status.component';
import { TableTypeComponent } from './pages/admin/tables/table-type/table-type.component';
import { ChartStatusComponent } from './pages/admin/charts/chart-status/chart-status.component';
import { ChartsComponent } from './pages/admin/charts/charts.component';
import { ChartTypeComponent } from './pages/admin/charts/chart-type/chart-type.component';
import { AuthGuardService } from './guards/auth-guard.service';

library.add(fas, far, fab);
// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme, TimeSeries)


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    LoginComponent,
    SignupComponent,
    CustomerComponent,
    TicketDetailComponent,
    GrdFilterPipe,
    NavbarComponent,
    FooterComponent,
    ActivitiesComponent,
    MessageComponent,
    PartnershipComponent,
    NewsComponent,

    AdminComponent,
    AnalysisComponent,
    CustomerListComponent,
    DashboardComponent,
    TablesComponent,
    TableStatusComponent,
    TableTypeComponent,
    ChartsComponent,
    ChartStatusComponent,
    ChartTypeComponent,

    AddUserComponent,
    EditUserComponent,
    ContentComponent,
    AddContentComponent,
    EditContentComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    FusionChartsModule,
    FontAwesomeModule,
    EventInformationModule,
    HomeModule,
    NewsModule
  ],
  providers: [
    CustomerService,
    StatisticsService,
    DatePipe,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


