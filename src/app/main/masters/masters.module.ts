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
import { AddProductComponent } from "../product/add-product/add-product.component";
import { ProductListComponent } from "../product/product-list/product-list.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { AddPromoComponent } from "./add-promo/add-promo.component";
import { AddSubCategoryComponent } from "./add-sub-category/add-sub-category.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { BannerComponent } from "./banner/banner.component";
import { ProductUnitComponent } from "./product-unit/product-unit.component";
import { MastersService } from "./masters.service";

const routes = [
  {
    path: "add-user",
    component: AddUserComponent,
    canActivate: [AuthGuard],
    // data: { roles: [Role.Admin] },
    resolve: {
      css: MastersService,
      inv: InvoiceListService,
    },
  },
  {
    path: "add-category",
    component: AddCategoryComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: MastersService,
    },
  },
  {
    path: "add-subCategory",
    component: AddSubCategoryComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: MastersService,
    },
  },
  {
    path: "add-promo",
    component: AddPromoComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: MastersService,
    },
  },
  {
    path: "product-unit",
    component: ProductUnitComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: MastersService,
    },
  },
  {
    path: "banner",
    component: BannerComponent,
    canActivate: [AuthGuard],
    resolve: {
      css: MastersService,
    },
  },
];

@NgModule({
  declarations: [
    AddUserComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    AddPromoComponent,
    ProductUnitComponent,
    BannerComponent,
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
  ],
  providers: [MastersService, InvoiceListService],
  exports: [
    AddCategoryComponent,
    AddSubCategoryComponent,
    AddPromoComponent,
    ProductUnitComponent,
    BannerComponent,
  ],
})
export class MastersModule {}
