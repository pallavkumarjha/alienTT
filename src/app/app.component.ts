import { Component, ViewChild, TemplateRef } from '@angular/core';
import { AppService } from './services/app.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalDirective, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';
  gifList: any = null;
  gifList2: any = null;
  searchForm = new FormGroup({
    search: new FormControl(''),
  });

  searchForm2 = new FormGroup({
    search2: new FormControl(''),
  });

  modalRef: BsModalRef;
  @ViewChild('gifDialog', { static: false }) public gifDialog: ModalDirective;
  constructor(private apiService: AppService,private modalService: BsModalService){}

  ngOnInit(){ }

  getGIPHs(text){
    this.apiService.getImage(text.search).then(data => {
      console.log(data);
      this.gifList = data;
    });
  }

  getGIPHs2(text){
    this.apiService.getImage(text.search2).then(data => {
      console.log(data);
      this.gifList2 = data;
    });
  }

  openModal(template: TemplateRef<any>){
    let element = document.getElementsByClassName("ql-editor");
    this.modalRef = this.modalService.show(template);
  }

  embedImage(item){
    let element = document.getElementsByClassName("ql-editor")[0];
    // implementtation pending after click on image 
    element.firstChild.textContent += `<iframe src="${item.embed_url}" height="150" width="150"></iframe>` 

  }


}
