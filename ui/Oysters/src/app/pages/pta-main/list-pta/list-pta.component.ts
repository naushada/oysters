import { Component } from '@angular/core';
import { IPTA } from 'src/app/core/common';

@Component({
  selector: 'app-list-pta',
  templateUrl: './list-pta.component.html',
  styleUrls: ['./list-pta.component.scss']
})
export class ListPtaComponent {

  selected:any = "";
  year:Date = new Date();
  ptas: Array<IPTA> = [{"academic_year": "2023-2024", "pta": 
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
    {"academic_year": "2024-2025", "pta": [{"grade": "Grade 1", "name": "ABD", "cellnumber": "1234567891", "role": "Member"},
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
]

  constructor() {
  
  }

  
    
}
