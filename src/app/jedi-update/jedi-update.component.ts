import { Jedi } from './../jedi/shared/jedi.model';
import { JEDIS } from './../jedi/mock-jedis';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jedi-update',
  templateUrl: './jedi-update.component.html',
  styleUrls: ['./jedi-update.component.css']
})
export class JediUpdateComponent implements OnInit {

  name:string;
  jedis: Jedi[];

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.forEach(p => this.name = p['name']);
    this.jedis = JEDIS;
  }

}
