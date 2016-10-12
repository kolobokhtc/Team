/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 11.10.2016.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'app-user',
    template: `

    <div>
    <div>Username change</div>
    Login: <input type="text" [(ngModel)]="user">
    </div>
    <button (click)="change()">Change</button>
`
})

export class AppUserComponent {

    @Input('user') user: string;
    //@Input('password') password: string;
    @Output() userChange: EventEmitter<string> = new EventEmitter<string>();
    //@Output('password') passwordChange: EventEmitter<string> = new EventEmitter<string>();


    change(){
        console.log(this)
        this.userChange.emit(this.user);
        //this.passwordChange.emit(this.password);

        console.log('changed');
    }

}