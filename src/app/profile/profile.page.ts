import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-page',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	userPosts

	constructor(private afs: AngularFirestore, private user: UserService, private router: Router) {
		const posts = afs.doc(`users/${user.getUID()}`)
		this.userPosts = posts.valueChanges()
	}

	goTo(postID: string) {

		this.router.navigate(['/tabs/post/' + postID.split('/')[0]])
	}

	ngOnInit() {
	}

}
