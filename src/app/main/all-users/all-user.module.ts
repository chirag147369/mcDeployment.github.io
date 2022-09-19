import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "app/auth/helpers";
import { Role } from "app/auth/models";
import { InvoiceListService } from "../apps/invoice/invoice-list/invoice-list.service";
import { AdminUserComponent } from "./admin-user/admin-user.component";
import { AllUserService } from "./all-user.service";
import { CustomerUserComponent } from "./customer-user/customer-user.component";
import { RetailerUserComponent } from "./retailer-user/retailer-user.component";
import { RouterModule } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { InvoiceModule } from "../apps/invoice/invoice.module";
import { JwPaginationModule } from 'jw-angular-pagination';

const routes = [
  {
    path: "admin-user",
    component: AdminUserComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: AllUserService,
    },
  },
  {
    path: "customer-user",
    component: CustomerUserComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: AllUserService,
    },
  },
  {
    path: "retailer-user",
    component: RetailerUserComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: AllUserService,
    },
  },
];

@NgModule({
  declarations: [
    AdminUserComponent,
    CustomerUserComponent,
    RetailerUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NgbModule,
    PerfectScrollbarModule,
    CoreCommonModule,
    NgApexchartsModule,
    InvoiceModule,
    JwPaginationModule
  ],
  exports: [CustomerUserComponent, RetailerUserComponent],
})
export class AllUserModule {}
