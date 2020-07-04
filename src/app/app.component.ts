import { Component, AfterViewChecked, OnChanges,DoCheck } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, DoCheck {

  constructor( public router : Router, private route: ActivatedRoute ) { }

 public title = 'Bid-Management';
 public status = false;

 ngOnChanges(){}
  ngDoCheck(){
    // window.sessionStorage.getItem('isLoggedIn') == 'true' ? this.status = true : false;
  }

  public logout(){
    window.sessionStorage.removeItem('isLoggedIn');
    window.sessionStorage.removeItem('SelectedBidItem');
    this.status = false
  }
  routes(val) {
    this.router.navigate(['board', { id: val }]);
  }
}
