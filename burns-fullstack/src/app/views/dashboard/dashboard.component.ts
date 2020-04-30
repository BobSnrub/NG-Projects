import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Puppypost } from 'src/app/interfaces/puppypost';
import { LoginService } from 'src/app/services/login.service';

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

    private listingForm: FormGroup;

    private createOrUpdate: boolean = true;

    private listingToUpdate: Puppypost;

    private pPost;

    get name() { return this.listingForm.get('name'); }
    get coat() { return this.listingForm.get('coat'); }
    get eyes() { return this.listingForm.get('eyes'); }
    get sex() { return this.listingForm.get('sex'); }
    get dob() { return this.listingForm.get('dob'); }
    get price() { return this.listingForm.get('price'); }
    get desc() { return this.listingForm.get('desc'); }

    uploadedFiles: any[] = [];

    constructor(private http: HttpClient,
        private formBuilder: FormBuilder,
        private dService: DataService,
        private lService: LoginService,
        private messageService: MessageService) {

        this.getListings();
    }

    ngOnInit() {
        this.listingForm = this.formBuilder.group({
            name: ['', Validators.required],
            coat: ['', Validators.required],
            eyes: ['', Validators.required],
            sex: ['', [Validators.required]],
            dob: ['', [Validators.required]],
            price: ['', [Validators.required]],
            desc: ['', [Validators.required]],
        });

        // this.CheckToken();

        // this.registerForm = this.formBuilder.group({
        //     username: ['', Validators.required],
        //     password: ['', [Validators.required, Validators.minLength(8)]],
        // });

        // this.dService.GetPosts().subscribe(x => console.log(x));
        // this.dService.GetPostById(1).subscribe(x => console.log(x));
    }

    // CheckToken() {
    // while (true) {
    //     setTimeout(function () { console.log("setTimeout"); }, 3000);
    //     console.log("while")
    // }
    // }

    getListings() {
        let puppyObj = this.dService.GetPosts();

        puppyObj.subscribe(x => {
            this.pPost = x;
            // console.log(this.pPost);
        });
    }

    submitForm() {
        if (this.listingForm.invalid) {
            alert('Fix errors on form');
            // or you can just return
        } else {
            console.log(this.listingForm.value);
            //I need to post the data here
            // this.lService.Login(this.listingForm.value);

            // Know that we need to do proper validation - this will be in another lecture
            alert('Succesful!');
            this.listingForm.reset();
        }
    }

    onSubmission(
        Name: string,
        Coat: string,
        Eyes: string,
        Sex: string,
        Dob: string,
        Price: string,
        Desc: string,
        // ImgUrl: string
    ) {
        let postToAdd: Puppypost = {
            'id': 0,
            'name': Name,
            'coat': Coat,
            'eyes': Eyes,
            'sex': Sex,
            'dob': Dob,
            'price': Price,
            'desc': Desc,
            'imgUrl': "/assets/images/other/aussie9.JPEG"
        }

        this.dService.CreatePost(postToAdd);
    }

    ClickGetListings() {
        this.getListings();
    }

    DeleteListing(listing: Puppypost) {
        let listingId = listing.id;
        this.RemoveLocalPost(listingId);
        this.dService.DeletePostById(listingId).subscribe(x => console.log(x));
    }

    CreatePostButton() {
        this.listingForm = this.formBuilder.group({
            name: ['', Validators.required],
            coat: ['', Validators.required],
            eyes: ['', Validators.required],
            sex: ['', [Validators.required]],
            dob: ['', [Validators.required]],
            price: ['', [Validators.required]],
            desc: ['', [Validators.required]],
        });

        this.createOrUpdate = true;
    }

    SelectToUpdate(listing: Puppypost) {
        this.listingToUpdate = listing;
        console.log(listing);
        this.listingForm = this.formBuilder.group({
            name: [listing.name, Validators.required],
            coat: [listing.coat, Validators.required],
            eyes: [listing.eyes, Validators.required],
            sex: [listing.sex, [Validators.required]],
            dob: [listing.dob, [Validators.required]],
            price: [listing.price, [Validators.required]],
            desc: [listing.desc, [Validators.required]],
        });


        this.createOrUpdate = false;

    }

    UpdateListing(
        Name: string,
        Coat: string,
        Eyes: string,
        Sex: string,
        Dob: string,
        Price: string,
        Desc: string
    ) {
        let postToUpdate: Puppypost = {
            // 'id': 23,
            'id': this.listingToUpdate.id,
            'name': Name,
            'coat': Coat,
            'eyes': Eyes,
            'sex': Sex,
            'dob': Dob,
            'price': Price,
            'desc': Desc,
            'imgUrl': "/assets/images/other/aussie9.JPEG"
        }
        console.log(postToUpdate);
        this.dService.UpdatePost(postToUpdate).subscribe(x => console.log(x));

        this.createOrUpdate = true;
        this.listingForm.reset();
    }

    RemoveLocalPost(id: number) {
        let post = this.pPost.find(x => x.id == id);
        console.log(this.pPost.indexOf(post));
        this.pPost.splice(this.pPost.indexOf(post), 1)
        // console.log(post);
    }


    // GetAll() {
    //     this.dService.GetPosts().subscribe(x => console.log(x));
    //     this.UpdatePost(this.pPost);
    // }

    // UpdatePost(postToUpdate: Puppypost) {
    //     this.dService.UpdatePost(postToUpdate).subscribe(x => console.log(x));
    // }

    Logout() {
        this.lService.Logout();
    }

}
