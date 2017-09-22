import { GithubProvider } from './../../providers/github/github.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dynamic',
  templateUrl: 'dynamic.html',
})
export class DynamicPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public githubService: GithubProvider
  ) {
  }

  ionViewDidLoad() {
    this.githubService.getUsers().subscribe((users: [{}]) => {
      console.log(users);
    })
  }

  public onIncrement(): void {
    console.log(this.githubService.increment());
  }

}
