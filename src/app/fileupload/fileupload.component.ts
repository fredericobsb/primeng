import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent{

  // import {FileUploadModule} from 'primeng/fileupload';
  // import {HttpClientModule} from '@angular/common/http';

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) { }

 
  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  onBasicUpload(event: any){
    console.log('---------event basic Upload => ', event);
    
  }

  onBasicUploadAuto(event: any){
    console.log('---------event = basic Upload  Auto => ', event);
    
  }


}
