import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { InvoiceModule } from "../apps/invoice/invoice.module";
import { AppAlertComponent } from "./app-alert/app-alert.component";
import { DemoBillComponent } from "./demo-bill/demo-bill.component";
import { AuthGuard } from "app/auth/helpers";
import { Role } from "app/auth/models";
import { InvoiceListService } from "../apps/invoice/invoice-list/invoice-list.service";
import { UtilitiesService } from "./utilities.service";

const routes = [
  {
    path: "app-alert",
    component: AppAlertComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
    resolve: {
      css: UtilitiesService,
      inv: InvoiceListService,
    },
  },
  {
    path: "demo-bill",
    component: DemoBillComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: UtilitiesService,
    },
  },
];

@NgModule({
  declarations: [AppAlertComponent, DemoBillComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NgbModule,
    PerfectScrollbarModule,
    CoreCommonModule,
    NgApexchartsModule,
    InvoiceModule,
  ],
  exports: [AppAlertComponent, DemoBillComponent],
})
export class UtilitiesModule {}
