import { Router} from '@angular/router';
import { Jedi } from './shared/jedi.model';
import { Component, OnInit } from '@angular/core';
import {JEDIS} from './mock-jedis';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-jedi',
  templateUrl: './jedi.component.html',
  styleUrls: ['./jedi.component.css']
})
export class JediComponent implements OnInit {

  jedis: Jedi[];
  selectedJedi: Jedi;
  dataSource: JedisDataSource | null;
  jedisModified: Jedi[];
  jediDatabase = new JediDatabase();
  displayedColumns = ['name', 'lightsaberColor', 'power', 'race', 'specialPower', 'resistance'];
  

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.jedis = JEDIS;
    this.jedisModified = this.jedis;
    this.dataSource = new JedisDataSource(this.jediDatabase);
  }

  onSelect(jedi: Jedi) {
    this.router.navigate(['jedi-details', jedi.name]);
  }

  onDelete(jedi: Jedi) {
    this.jedisModified = this.jedis.filter(j=>j.name != jedi.name);
    this.jedis = this.jedisModified;
    this.jediDatabase.dataChange = new BehaviorSubject<Jedi[]>([]);
    this.jedisModified.map(j => this.jediDatabase.addJedi(j));
    this.dataSource= new JedisDataSource(this.jediDatabase);
  }

  onUpdate(jedi:Jedi) {
    this.router.navigate(['jedi-update', jedi.name]);
  }

}


export class JediDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Jedi[]> = new BehaviorSubject<Jedi[]>([]);
  get data(): Jedi[] { return this.dataChange.value; }
  //set data(array): void {this.dataChange.value = array}

  constructor() {
    // Fill up the database with 100 users.
    JEDIS.map(j => this.addJedi(j));
    //for (let i = 0; i < 100; i++) { this.addUser(); }
  }

  /** Adds a new jedi to the database. */
  addJedi(jedi:Jedi) {
    const copiedData = this.data.slice();
    copiedData.push(jedi);
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new Jedi. */
  /*private createNewUser() {
    const name =
        JEDIS[Math.round(Math.random() * (JEDIS.length - 1))] + ' ' +
        JEDIS[Math.round(Math.random() * (JEDIS.length - 1))].charAt(0) + '.';

    return {
      name: name,
      lightsaberColor: 
    };
  }*/
}


export class JedisDataSource extends DataSource<any> {
  constructor(private _jediDatabase: JediDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Jedi[]> {
    return this._jediDatabase.dataChange;
  }

  disconnect() {}
}