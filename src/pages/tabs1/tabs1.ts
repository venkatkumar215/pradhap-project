import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * Generated class for the Tabs1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs1',
  templateUrl: 'tabs1.html',
})
export class Tabs1Page {

information:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {

    let localdata= this.http.get('assets/information.json').map(res => res.json().items);
    //console.log(localdata)
     localdata.subscribe(data=>{
       this.information=data;
       //console.log(data)
       
     })
  }

 toggleSection(i){

  this.information[i].open=!this.information[i].open;
 }

 toggleItem(i,j){
  this.information[i].children[j].open=!this.information[i].children[j].open;
 }

 gotomap(){

  this.navCtrl.push('MapPage')

 }

}
