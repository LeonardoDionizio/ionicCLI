import { GithubProvider } from './../../providers/github/github.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dynamic',
  templateUrl: 'dynamic.html',
})
export class DynamicPage {
  public gitUsers: {};
  public loader: any;
 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public githubService: GithubProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Getting...",
    });
    this.loader.present();
  }

  public onIncrement(): void {
    this.presentLoading();
    this.githubService.getUsers().subscribe((users: [{}]) => {
      this.gitUsers = users;
      this.loader.dismiss();
    })
  }

}
