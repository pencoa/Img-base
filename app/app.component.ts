import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/demo.html'
})

export class AppComponent {
	uploadFile: any;
	  options: Object = {
	    url: 'http://localhost:10050/upload'
	  };

	  handleUpload(data: any): void {
	    if (data && data.response) {
	      data = JSON.parse(data.response);
	      this.uploadFile = data;
	    }
	  }
}
