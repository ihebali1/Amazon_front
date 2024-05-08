import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PublicModule } from "./public/public.module";
import { PrivateModule } from "./private/private.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./shared/helpers/authconfig.interceptor";
import { ErrorInterceptor } from "./shared/helpers/error.interceptor";
import { GalleryModule, GALLERY_CONFIG } from "ng-gallery";
import { NgxStripeModule } from "ngx-stripe";
import { environment } from "src/environments/environment";
import { StarRatingModule } from "angular-star-rating";
import {
  NgxUiLoaderModule,
  NgxUiLoaderHttpModule,
  NgxUiLoaderConfig,
} from "ngx-ui-loader";
import { ServiceWorkerModule } from '@angular/service-worker';

const configuration: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsOpacity: 0.5,
  bgsPosition: "bottom-right",
  bgsSize: 60,
  bgsType: "ball-spin-clockwise",
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: "#4b433d",
  fgsPosition: "center-center",
  fgsSize: 60,
  fgsType: "three-strings",
  gap: 24,
  logoPosition: "center-center",
  logoSize: 70,
  logoUrl: "assets/img/Untitled-11.png",
  masterLoaderId: "master",
  overlayBorderRadius: "0",
  overlayColor: "rgba(40, 40, 40, 0.1)",
  pbColor: "#4b433d",
  pbDirection: "ltr",
  pbThickness: 3,
  hasProgressBar: true,
  text: "AzizShop",
  textColor: "#4b433d",
  textPosition: "center-center",
  maxTime: -1,
  minTime: 300,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PublicModule,
    PrivateModule,
    SharedModule,
    CoreModule,
    CarouselModule,
    GalleryModule,
    NgxStripeModule.forRoot(environment.stripeApiKey),
    StarRatingModule.forRoot(),
    NgxUiLoaderModule.forRoot(configuration),
    //NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
      
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
