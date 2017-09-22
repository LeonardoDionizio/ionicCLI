import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubProvider {

  private count: number = 0;

  constructor(public http: Http) {

  }

  increment(): number {
    return ++this.count;
  }

  public getUsers(): Observable<[{}]> {
    return this.http.get('https://api.github.com/users')
    .map((res: Response) => res.json() as [{}]
    );

  }

}
