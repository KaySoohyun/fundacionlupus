import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-events-board',
  templateUrl: './events-board.component.html',
  styleUrls: ['./events-board.component.scss']
})
export class EventsBoardComponent implements OnInit {
  events: any[] = [];
  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.firestore.collection('events').snapshotChanges()
    .subscribe((items: any) => {
      this.events = items.map((item: any) => {
        const user: any = {
          data: item.payload.doc.data(),
          id: item.payload.doc.id,
        }
        return user;
      })
      this.events.sort(function (a, b) {
        return b.data.index - a.data.index;
      });
      console.log(this.events)
    }),
    (error: any) => {
      console.log(error)
      // mostrar error
    }
  }

  wait() {
    console.log(this.events)
    return this.events.length > 0;
  }

}
