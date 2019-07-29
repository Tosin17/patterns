import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  private fileForm: FormGroup;
  constructor(private uploadService: FileUploadService) { }

  ngOnInit() {
    this.fileForm = new FormGroup({
      username: new FormControl(null),
      file: new FormControl(null, Validators.required)
    });
  }

  onFileChange(file) {
    this.fileForm.get('file').setValue(file);
  }

  onSubmit() {
    const formData = new FormData();
    this.uploadService.upload(formData.append('file', this.fileForm.get('file').value)).subscribe(_ => {
      console.log(_, 'File Uploaded!');
    })
  }
}
