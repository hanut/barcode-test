import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import * as Vcf from 'vcf';
//----------------------------------------------------------------
import { User } from '../../models/user/user';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	users:User[] = [];

	constructor (public navCtrl: NavController, public barcodeScanner: BarcodeScanner) {

	}

	startScanner () {
		this.barcodeScanner.scan().then((barcodeData: BarcodeScanResult) => {
		 // Success! Barcode data is here
		 console.log("Vcard Data: ", barcodeData);
		 let jsonData = Vcf.parse(barcodeData.text);
		 console.log("Json Data: ", jsonData);
		 if (!jsonData) {
		 	return;
		 }
		 if(jsonData.length == 0) {
		 	return;
		 }
		 for (let i=0, len = jsonData.length; i < len; i++) {
		 	let user: User = new User();
		 	user.name = jsonData.get('N');
		 	user.email = jsonData.get('email');
		 	user.phone = jsonData.get('tel');
		 	user.org = jsonData.get('org');
		 	console.log(user);
		 }
		}, (err) => {
		    // An error occurred
		    console.log(err);
		});
	}

}
