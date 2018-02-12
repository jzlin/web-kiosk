import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  private allowPages: string[] = [
    'background',
    'popup',
    'options'
  ];
  private page: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.page) {
        return;
      }
      this.page = params.page;
      let redirectToUrl = '/';
      if (this.allowPages.includes(this.page)) {
        redirectToUrl += this.page;
      }
      this.router.navigateByUrl(redirectToUrl, {
        replaceUrl: true
      });
    });
  }

}
