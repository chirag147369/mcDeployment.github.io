import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "app/auth/helpers";
import { Role } from "app/auth/models";
import { InvoiceListService } from "../apps/invoice/invoice-list/invoice-list.service";
import { AnalyticsComponent } from "../dashboard/analytics/analytics.component";
import { DashboardService } from "../dashboard/dashboard.service";
import { EcommerceComponent } from "../dashboard/ecommerce/ecommerce.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductService } from "./product.service";
import { RouterModule } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { InvoiceModule } from "../apps/invoice/invoice.module";

const routes = [
  {
    path: "add-product",
    component: AddProductComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
    resolve: {
      css: ProductService,
      inv: InvoiceListService,
    },
  },
  {
    path: "product-list",
    component: ProductListComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: ProductService,
    },
  },
];

@NgModule({
  declarations: [AddProductComponent, ProductListComponent],
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
  providers: [ProductService, InvoiceListService],
  exports: [ProductListComponent],
})
export class ProductModule {}
