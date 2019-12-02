import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  actor: Actor = new Actor;
  title: string = "Actor Detail";
  id: number = 0;

  constructor(
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.actorSvc.get(this.id).subscribe(jr => {
      this.actor = jr.data as Actor;
    });
  }

  delete() {
    this.actorSvc.delete(this.id).subscribe(jr => {
      // add Sean's fix here
      if (jr.errors != null) {
        console.log("Errors: " + jr.errors)
      }
      this.router.navigateByUrl('actors/list')
    });

  }
}
