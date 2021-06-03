import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Candidature } from 'src/app/models/candidature';
import { Etape } from 'src/app/models/etape';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';
import { EtapeService } from 'src/app/services/etape.service';

@Component({
  selector: 'app-candidature-details',
  templateUrl: './candidature-details.component.html',
  styleUrls: ['./candidature-details.component.css']
})
export class CandidatureDetailsComponent implements OnInit {

  candidature: Candidature;
  etape: Etape;
  etapeMode: string;

  constructor(
    private candidatureService: CandidatureServiceService,
    private etapeService: EtapeService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    const idCandidature = this.route.snapshot.params['id'];
    this.initCandidature(idCandidature);
  }

  openCreateEtapeModal(modal: any){
    this.etape = new Etape();
    this.etapeMode = "create";
    this.modalService.open(modal).result.then(
      result => {}, reason => {}
    );
  }

  openEditEtapeModal(modal: any, etape: Etape){
    this.etape = etape;
    this.etapeMode = "edit";
    this.modalService.open(modal).result.then(
      result => {}, reason => {}
    );
  }

  initCandidature(id: number) {
    this.candidatureService.findById(id).subscribe(
      candidature => {
        this.candidature = candidature;
      }, error => {
        console.log(error);
        this.router.navigate(['list']);
      }
    );
  }

  submitEtape(){
    if(this.etapeMode ===  "create") {
      this.candidatureService.addEtape(this.candidature.id, this.etape).subscribe(
        (data) => {
          this.initCandidature(data.id);
        }
      );

    } else {
      this.etapeService.editEtape(this.etape).subscribe(
        (data) => {
          this.ngOnInit();
        }
      );
    }
  }

  deleteEtape(modal: any){
    this.etapeService.deleteById(this.etape.id).subscribe(
      () => {
        modal.close();
        this.initCandidature(this.candidature.id);
      }
    );
  }

  openDeleteEtapeModal(modal: any, etape: Etape){
    this.etape = etape;
    this.modalService.open(modal).result.then(
      result => {}, reason => {}
    );
  }

}
