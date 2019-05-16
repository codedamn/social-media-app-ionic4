import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

email: string = ""
password: string = ""
cpassword: string = ""

  constructor(public alertController: AlertController, public fire: AngularFireAuth) {

  }

  ngOnInit() {
  }

  async presentAlert(content: string) {
  		const alert = await this.alertController.create({
  			message: content,
  			buttons: ['OK']
  		})

  		await alert.present()
  	}


 registerUser() {
    const { email, password, cpassword, isChecked } = this

      if(password !== cpassword) {
  			console.error("Passwords don't match");
        this.presentAlert('Passwords dont match');
  		}
      try{
       this.fire.auth.createUserWithEmailAndPassword(email, password)
       this.presentAlert('Registered!')
       this.router.navigate(['/tabs'])
       }
     }
     catch(error) {
       console.log('got an error ', error);
       this.presentAlert(error.message);
     }
 }

}
