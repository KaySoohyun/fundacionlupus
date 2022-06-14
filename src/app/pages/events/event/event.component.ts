import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  htmlString: any;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    const nameFile = this.route.snapshot.paramMap.get('name');
    if (nameFile) {
      console.log(nameFile);
      this.firestore.collection('events').doc(nameFile).valueChanges()
      .subscribe((items: any) => {
        this.htmlString = this.sanitizer.sanitize(SecurityContext.HTML, items.html)
      }),
      (error: any) => {
        console.log(error)
        // mostrar error
      }
    }
  }
}
