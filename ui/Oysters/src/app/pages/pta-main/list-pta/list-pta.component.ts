import { Component, OnInit } from '@angular/core';
import { IPTA } from 'src/app/core/common';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-list-pta',
  templateUrl: './list-pta.component.html',
  styleUrls: ['./list-pta.component.scss']
})
export class ListPtaComponent implements OnInit {

  selected:any = "";
  year:Date = new Date();
  response: Array<IPTA> = [];
  /*[{"academicyear": "2023-2024", "ptas": 
  [
    {"grade": "Grade 1", "name": "ABD", "cellnumber": "1234567891", "role": "Member"},
    {"grade": "Grade 2", "name": "XYZ", "cellnumber": "", "role": ""},
    {"grade": "Grade 3", "name": "UVW", "cellnumber": "", "role": ""},
    {"grade": "Grade 4", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 5", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 6", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 7", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 8", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 9", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 10", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 10", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 10", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 10", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 11", "name": "", "cellnumber": "", "role": ""}]},
    {"academicyear": "2024-2025", "ptas": [{"grade": "Grade 1", "name": "ABD", "cellnumber": "1234567891", "role": "Member"},
    {"grade": "Grade 2", "name": "XYZ", "cellnumber": "", "role": ""},
    {"grade": "Grade 3", "name": "UVW", "cellnumber": "", "role": ""},
    {"grade": "Grade 4", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 5", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 6", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 7", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 8", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 9", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 10", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 10", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 10", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 10", "name": "", "cellnumber": "", "role": ""},
    {"grade": "Grade 11", "name": "", "cellnumber": "", "role": ""}]}
]*/

  constructor(private http: HttpService) {
  
  }

  ngOnInit(): void {
    this.http.getptainfo().subscribe((rsp: Array<IPTA>) => {
      this.response.length = 0;
      rsp.forEach(ent => this.response.push(ent));
      console.log(this.response);
    },
    (error) => {},
    () => {})
  }
    
}
