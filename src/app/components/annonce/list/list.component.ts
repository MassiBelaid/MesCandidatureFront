import { Component, OnInit } from '@angular/core';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  candidatures: Candidature[];
  candidaturesAll: Candidature[];
  candidature: Candidature;
  page: number;
  pageSize: number;
  ordredByName = false;
  ordredByDate = true;

  sizeFilter: number = 2;

  filterObject: string;

  constructor(
    private candidatureService: CandidatureServiceService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 12;

    this.getCandidatures();

  }

  getCandidatures() {
    this.candidatureService.findAll().subscribe(
      candidatures => {
        this.candidatures = candidatures;
        this.candidaturesAll = candidatures.sort((a, b) => (a.candidatureDate > b.candidatureDate ? -1 : 1));
      }, error => {
        console.log(error);
      }
    );
  }

  deleteCandidature(modal: any){
    this.candidatureService.deleteById(this.candidature.id).subscribe(
      () => {
        modal.close();
        this.getCandidatures();
      }
    );
  }

  openDeleteCandidatureModal(modal: any, candid: Candidature){
    this.candidature = candid;
    this.modalService.open(modal).result.then(
      result => {}, reason => {}
    );
  }

  onChangeStatus(candidature: Candidature, statusValue: any) {
    if (candidature.status !== statusValue.value) {
      candidature.status = statusValue.value;
      this.candidatureService.editCandidature(candidature).subscribe(
        () => {
          this.getCandidatures();
        }
      );
    }
  }

  onEnter(){
    if(this.filterObject.length >= this.sizeFilter) {
      this.candidatureService.filter(this.filterObject).subscribe(
        candidatures => {
          this.candidatures = candidatures;
        }
      );
    } else {
      this.candidatures = this.candidaturesAll;
    }
  }

  orderByName() {
    if(this.ordredByName) {
      this.candidatures.sort((a, b) => (a.companyName > b.companyName ? -1 : 1));
    } else {
      this.candidatures.sort((a, b) => (a.companyName < b.companyName ? -1 : 1));
    }
    this.ordredByName = !this.ordredByName;
  }

  orderByDate() {
    if(this.ordredByDate) {
      this.candidatures.sort((a, b) => (a.candidatureDate < b.candidatureDate ? -1 : 1));
    } else {
      this.candidatures.sort((a, b) => (a.candidatureDate > b.candidatureDate ? -1 : 1));
    }
    this.ordredByDate = !this.ordredByDate;
  }


}
