import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "app/auth/helpers";
import { Role } from "app/auth/models";
import { InvoiceListService } from "../apps/invoice/invoice-list/invoice-list.service";
import { AddCategoryComponent } from "../masters/add-category/add-category.component";
import { AddSubCategoryComponent } from "../masters/add-sub-category/add-sub-category.component";
import { AddUserComponent } from "../masters/add-user/add-user.component";
import { OrderService } from "./order.service";
import { RouterModule } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { InvoiceModule } from "../apps/invoice/invoice.module";
import { CancelOrderComponent } from "./cancel-order/cancel-order.component";
import { DeliveredOrderComponent } from "./delivered-order/delivered-order.component";
import { RecentOrderComponent } from "./recent-order/recent-order.component";
import { JwPaginationModule } from 'jw-angular-pagination';

const routes = [
  {
    path: "cancel-order",
    component: CancelOrderComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: OrderService,
    },
  },
  {
    path: "delivered-order",
    component: DeliveredOrderComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: OrderService,
    },
  },
  {
    path: "recent-order",
    component: RecentOrderComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: OrderService,
    },
  },
];

@NgModule({
  declarations: [
    RecentOrderComponent,
    DeliveredOrderComponent,
    CancelOrderComponent,
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
  exports: [
    RecentOrderComponent,
    DeliveredOrderComponent,
    CancelOrderComponent,
  ],
})
export class OrderModule {}
