import { Component } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service'
import { NewsService } from '../../services/news.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
  providers: [DatePipe],
})
export class SpeakerListPage {
  public currentStudents;
  data: any;
  myDate : any = this.datePipe.transform(new Date(), 'short');



  constructor( private datePipe: DatePipe, public firestoreService: FirestoreService, private newsService:NewsService,
    private iab: InAppBrowser,
 ) {}
//publishedAt": "2020-06-25T04:30:00Z",
  ionViewDidEnter() {
    //everything from today will need a date object
    this.newsService.getData('everything?q=covid OR covid-19 OR corona&language=en&from=${myDate}&sortBy=publishedAt').subscribe(data => {
      console.log(data);
      this.data = data;
        })
  // this.currentStudents = this.firestoreService.getListAll("student-users").valueChanges();
  }
  openUrl(url){
    const browser = this.iab.create(url)
  }
}
