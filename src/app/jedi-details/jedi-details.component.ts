import { JEDIS } from './../jedi/mock-jedis';
import { Jedi } from './../jedi/shared/jedi.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

@Component({
  selector: 'app-jedi-details',
  templateUrl: './jedi-details.component.html',
  styleUrls: ['./jedi-details.component.css']
})
export class JediDetailsComponent implements OnInit {

  name: string;
  selectedJedi: Jedi;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.forEach(params => this.name = params['name']);
    console.log(this.name);
    JEDIS.map(jedi => {
      if (this.name == jedi.name)
        this.selectedJedi = jedi;
    });
  }

}
