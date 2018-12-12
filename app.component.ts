import { Component } from '@angular/core';
import {MovieService} from './services/movie.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [MovieService]
})
export class AppComponent { 


previousPage() {
    if (this.page > 1) {
      // this.jsonData.forEach(row => {
      //   this.finalJsonDataArray.push(row);
      // });
      // this.jsonData = [];
      this.page = this.page - 1;
      this.changePage(this.page);
    }
  }

  nextPage() {
    if (this.page < this.numPages()) {
      this.page = this.page + 1;
      this.changePage(this.page);
    }
  }

  changePage(page) {
    if (page < 1) {
      page = 1;
    }
    if (page > this.numPages()) {
      page = this.numPages();
    }
    if (page === 1) {
      for (let i = ((page - 1) * this.records_per_page); i <= (page * this.records_per_page); i++) {
        if (JsonData[i].key) {
          this.jsonData.push(JsonData[i]);
        }
      }
    } else {
      for (let i = ((page - 1) * this.records_per_page); i < (page * this.records_per_page); i++) {
        if (JsonData[i].key) {
          this.jsonData.push(JsonData[i]);
        }
      }
    }
  }

  numPages() {
    return Math.ceil(JsonData.length / this.records_per_page);
  }}
