import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { FakeDbService } from "@fake-db/fake-db.service";

import "hammerjs";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { TranslateModule } from "@ngx-translate/core";
import { ContextMenuModule } from "@ctrl/ngx-rightclick";

import { CoreModule } from "@core/core.module";
import { CoreCommonModule } from "@core/common.module";
import { CoreSidebarModule, CoreThemeCustomizerModule } from "@core/components";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";

import { coreConfig } from "app/app-config";
import { AuthGuard } from "app/auth/helpers/auth.guards";
import { fakeBackendProvider } from "app/auth/helpers"; // used to create fake backend
import { JwtInterceptor, ErrorInterceptor } from "app/auth/helpers";
import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";

import { ContextMenuComponent } from "app/main/extensions/context-menu/context-menu.component";
import { AnimatedCustomContextMenuComponent } from "./main/extensions/context-menu/custom-context-menu/animated-custom-context-menu/animated-custom-context-menu.component";
import { BasicCustomContextMenuComponent } from "./main/extensions/context-menu/custom-context-menu/basic-custom-context-menu/basic-custom-context-menu.component";
import { SubMenuCustomContextMenuComponent } from "./main/extensions/context-menu/custom-context-menu/sub-menu-custom-context-menu/sub-menu-custom-context-menu.component";
import { AddUserComponent } from "./main/masters/add-user/add-user.component";
import { AddCategoryComponent } from "./main/masters/add-category/add-category.component";
import { AddSubCategoryComponent } from "./main/masters/add-sub-category/add-sub-category.component";
import { AddPromoComponent } from "./main/masters/add-promo/add-promo.component";
import { ProductUnitComponent } from "./main/masters/product-unit/product-unit.component";
import { BannerComponent } from "./main/masters/banner/banner.component";
import { AddProductComponent } from "./main/product/add-product/add-product.component";
import { ProductListComponent } from "./main/product/product-list/product-list.component";
import { RecentOrderComponent } from "./main/order/recent-order/recent-order.component";
import { DeliveredOrderComponent } from "./main/order/delivered-order/delivered-order.component";
import { CancelOrderComponent } from "./main/order/cancel-order/cancel-order.component";
import { AddStockComponent } from "./main/stock/add-stock/add-stock.component";
import { AdminUserComponent } from "./main/all-users/admin-user/admin-user.component";
import { CustomerUserComponent } from "./main/all-users/customer-user/customer-user.component";
import { RetailerUserComponent } from "./main/all-users/retailer-user/retailer-user.component";
import { AppAlertComponent } from "./main/utilities/app-alert/app-alert.component";
import { DemoBillComponent } from "./main/utilities/demo-bill/demo-bill.component";

const appRoutes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./main/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: "masters",
    loadChildren: () =>
      import("./main/masters/masters.module").then((m) => m.MastersModule),
  },
  {
    path: "product",
    loadChildren: () =>
      import("./main/product/product.module").then((m) => m.ProductModule),
  },
  {
    path: "order",
    loadChildren: () =>
      import("./main/order/order.module").then((m) => m.OrderModule),
  },
  {
    path: "stock",
    loadChildren: () =>
      import("./main/stock/add-stock.module").then((m) => m.AddStockModule),
  },
  {
    path: "all-user",
    loadChildren: () =>
      import("./main/all-users/all-user.module").then((m) => m.AllUserModule),
  },
  {
    path: "utilities",
    loadChildren: () =>
      import("./main/utilities/utilities.module").then(
        (m) => m.UtilitiesModule
      ),
  },
  {
    path: "apps",
    loadChildren: () =>
      import("./main/apps/apps.module").then((m) => m.AppsModule),
    canActivate: [AuthGuard],
  },
  {
    path: "pages",
    loadChildren: () =>
      import("./main/pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "ui",
    loadChildren: () => import("./main/ui/ui.module").then((m) => m.UIModule),
    canActivate: [AuthGuard],
  },
  {
    path: "components",
    loadChildren: () =>
      import("./main/components/components.module").then(
        (m) => m.ComponentsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "extensions",
    loadChildren: () =>
      import("./main/extensions/extensions.module").then(
        (m) => m.ExtensionsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "forms",
    loadChildren: () =>
      import("./main/forms/forms.module").then((m) => m.FormsModule),
    canActivate: [AuthGuard],
  },
  {
    path: "tables",
    loadChildren: () =>
      import("./main/tables/tables.module").then((m) => m.TablesModule),
    canActivate: [AuthGuard],
  },
  {
    path: "charts-and-maps",
    loadChildren: () =>
      import("./main/charts-and-maps/charts-and-maps.module").then(
        (m) => m.ChartsAndMapsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "",
    redirectTo: "/dashboard/ecommerce",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "/pages/miscellaneous/error", // Error 404 - Page not found
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ContextMenuComponent,
    BasicCustomContextMenuComponent,
    AnimatedCustomContextMenuComponent,
    SubMenuCustomContextMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true,
    }),
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: "enabled", // Add options right here
      relativeLinkResolution: "legacy",
    }),
    NgbModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot(),
    ContextMenuModule,
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,
    CardSnippetModule,
    LayoutModule,
    ContentHeaderModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend, comment while using real api
    fakeBackendProvider,
  ],
  entryComponents: [
    BasicCustomContextMenuComponent,
    AnimatedCustomContextMenuComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
