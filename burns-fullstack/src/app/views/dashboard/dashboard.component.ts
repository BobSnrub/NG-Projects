import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

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
  uploadedFiles: any[] = [];

  constructor(private http: HttpClient, private messageService: MessageService) { }

  ngOnInit() {
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }

}
