import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class EditComponent implements OnInit {

  candidature: Candidature;

  alertMessage: any;
  alertType: any;
  mode: string;

  constructor(
    private candidatureService: CandidatureServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mode = "edit";
    const idCandidature = this.route.snapshot.params['id'];
    this.candidatureService.findById(idCandidature).subscribe(
      candidature => {
        this.candidature = candidature;
      }, error => {
        console.log(error);
        this.router.navigate(['list']);
      }
    );
  }

  onSubmit() {
    this.candidature.status = 'deposee';
    this.candidatureService.editCandidature(this.candidature).subscribe(
      data => {
        this.router.navigate(['list']);
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
