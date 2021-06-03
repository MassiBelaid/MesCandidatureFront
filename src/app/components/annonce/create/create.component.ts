import { Component, OnInit } from '@angular/core';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  candidature: Candidature;

  alertMessage: any;
  alertType: any;
  mode: string;

  constructor(
    private candidatureService: CandidatureServiceService
  ) { }

  ngOnInit(): void {
    this.mode = "create";
    this.candidature = new Candidature();
  }

  onSubmit() {
    this.candidature.status = 'deposee';
    this.candidatureService.saveCandidature(this.candidature).subscribe(
      data => {
        this.alertMessage = `candidature chez ${data.companyName} créé`;
        this.alertType = 'alert-success';
      }, error => {
        console.log(error);
        this.alertMessage = `erreur lors de création`;
        this.alertType = 'alert-danger';
      }
    );

  }

  closeAlerte() {
    this.alertMessage = undefined;
    this.alertType = null;
  }
}
