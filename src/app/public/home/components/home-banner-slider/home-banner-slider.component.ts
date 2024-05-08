import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerService } from 'src/app/shared/services/banner.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-banner-slider',
  templateUrl: './home-banner-slider.component.html',
  styleUrls: ['./home-banner-slider.component.scss']
})
export class HomeBannerSliderComponent implements OnInit {
  banners: any;
  server: string;

  constructor(private bannerService: BannerService, private router: Router) {
    this.server = environment.server;
   }

  getHomeBanners(){
    this.bannerService.getBanners('HOME_HEADER').subscribe(
      res=> this.banners = res
    )
  }

  ngOnInit(): void {
    this.getHomeBanners();
  }

  redirect(banner: any) {
    if (banner.linkType == 'DEPARTMENT') this.router.navigate(['/public/department/', banner.department.id])
    if (banner.linkType == 'PRODUCT') this.router.navigate(['/public/product/', (banner.parentListing || banner.simpleProduct).id],
      {
        queryParams: { type: (banner.parentListing || banner.simpleProduct).type},
        queryParamsHandling: 'merge'
      })
    if (banner.linkType == 'VENDOR') this.router.navigate(['/user-management/vendor/details/', banner.vendor.id],
    {
      queryParams: { id: banner.vendor.id },
      queryParamsHandling: 'merge'
    })
  }

}
