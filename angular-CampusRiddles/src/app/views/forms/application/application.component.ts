import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormsService } from 'src/app/services/forms.service';
import { FormTypes } from '../../../common/enums/form-types.enum'


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(private formService: FormsService) { }

  agreementRead: boolean;

  ngOnInit(): void {
    this.agreementRead = false;
  }

  onSubmit(value: any) {
    this.formService.sendForm(value, FormTypes.riddlerApp)
  }

  onClick(){
    this.agreementRead = true;
  }

}
