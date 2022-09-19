import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { AuthGuard } from "app/auth/helpers";
import { Role } from "app/auth/models";
import { NgApexchartsModule } from "ng-apexcharts";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { InvoiceListService } from "../apps/invoice/invoice-list/invoice-list.service";
import { InvoiceModule } from "../apps/invoice/invoice.module";
import { CancelOrderComponent } from "../order/cancel-order/cancel-order.component";
import { AddStockService } from "./add-stock.service";
import { AddStockComponent } from "./add-stock/add-stock.component";

const routes = [
  {
    path: "add-stock",
    component: AddStockComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
    resolve: {
      css: AddStockService,
      inv: InvoiceListService,
    },
  },
];

@NgModule({
  declarations: [AddStockComponent],
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
  exports: [AddStockComponent],
})
export class AddStockModule {}
