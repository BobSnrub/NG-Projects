import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Puppypost } from 'src/app/interfaces/puppypost';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [MessageService],
    styles: [`
        :host ::ng-deep .ui-toast {
            top: 80px;
        }
        :host ::ng-deep .news-active .ui-toast {
            top: 150px;
        }
        @media screen and (max-width: 64em) {
            :host ::ng-deep .ui-toast {
                top: 110px;
            }
            :host ::ng-deep .news-active .ui-toast {
                top: 180px;
            }
        }
    `]
})
export class DashboardComponent implements OnInit {

    listingForm: FormGroup;

    postCreds: Puppypost = {
        id: undefined,
        name: '',
        coat: '',
        eyes: '',
        sex: '',
        price: undefined,
        desc: '',
        imgPath: ''
    };

    get name() { return this.listingForm.get('name'); }
    get coat() { return this.listingForm.get('coat'); }

    uploadedFiles: any[] = [];

    // pPost = {
    //     "id": 1,
    //     "name": "Sniffy",
    //     "price": "2000",
    //     "dateBorn": "12/12/2020",
    //     "description": "Ugly",
    //     "coat": "blue merle",
    //     "eyes": "asdf",
    //     "imgUrl": "https://www.idontgiveoneshit.com/someimg"
    // };

    constructor(private http: HttpClient,
        private formBuilder: FormBuilder,
        private dService: DataService,
        private messageService: MessageService) { }

    ngOnInit() {
        this.listingForm = this.formBuilder.group({
            name: ['', Validators.required],
            coat: ['', [Validators.required, Validators.minLength(6)]],
        });
        // this.dService.GetPosts().subscribe(x => console.log(x));
        // this.dService.GetPostById(1).subscribe(x => console.log(x));
    }

    // submitForm() {
    //     if (this.listingForm.invalid) {
    //       alert('Fix errors on form');
    //       // or you can just return
    //     } else {
    //       console.log(this.listingForm.value);
    //       this.lService.Login(this.listingForm.value);
    //       // Know that we need to do proper validation - this will be in another lecture
    //       // alert('Succesful!');
    //       this.listingForm.reset();
    //     }
    //   }

    onSubmission(Name: string, Coat: string) {
        // this.username
        // this.password
        this.postCreds.id = 0;
        this.postCreds.name = Name;
        this.postCreds.coat = Coat;
        this.postCreds.eyes = "eyes asdf";
        this.postCreds.sex = "sex asdf";
        this.postCreds.price = 2000;
        this.postCreds.desc = "desc asdf";
        this.postCreds.imgPath = "imgPath asdf";

        this.dService.CreatePost(this.postCreds);

        // httpOptions = {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json',
        //         Authorization: 'my-auth-token'
        //     })
        // };

        // this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'bearer ' + localStorage.getItem("loginToken"));

        // this.http.get('http://localhost:5000/puppypost', this.httpOptions).subscribe(x => {
        //     console.log(x)
        // });

        // GetTracks() {
        //     const tokenInfo = 'bearer ' + this.token;
        //     console.log(this.token);
        //     // We use the set here to create an instance of httpOptions with the value we need for the header.
        //     this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'bearer ' + this.token);
        //     console.log(this.httpOptions.headers);
        //     this.http.get(this.getTracksURL, this.httpOptions).subscribe(data => {
        //         console.log(data);
        //     });
        // }
    }

    // GetAll() {
    //     this.dService.GetPosts().subscribe(x => console.log(x));
    //     this.UpdatePost(this.pPost);
    // }

    // UpdatePost(postToUpdate: Puppypost) {
    //     this.dService.UpdatePost(postToUpdate).subscribe(x => console.log(x));
    // }

}
