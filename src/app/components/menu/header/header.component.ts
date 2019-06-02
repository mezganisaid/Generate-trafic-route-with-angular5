import { Component, DoCheck } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements DoCheck {

currentUrl: string;
counter: number;

  constructor (
  	private toastr: ToastrService,
  	private router: Router ) {
  	    this.counter = 1;
        this.toastr.success('Ceci un test, merci de voir le console, ou taper F12', 'Bienvenue'); 
        setInterval(() => this.testCounter() , 10000);
  }


  ngDoCheck() {
        this.currentUrl = this.router.url;
        console.log(this.router.url);
        this.testCounter();
        this.counter++;
  }


  testCounter(){
        
		switch (this.counter) {
		   case 20: {
		      this.toastr.info('Un trafic important  = ' + this.counter + ' routes', 'Alerte');
              console.log(this.currentUrl);
              console.log('Un trafic important  = ' + this.counter + ' routes');
              for (var name in this)
                 this.currentUrl += name + "\n";
		      break;
		   }
		}	

  }


}
