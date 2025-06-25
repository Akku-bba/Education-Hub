import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Aptitude Tutorial','description':'It is Aptitude Tutorial In Video','image':'../../assets/Python (11).jpg','link':'https://www.tutorialspoint.com/quantitative_aptitude/aptitude_overview.htm','link2':'https://www.youtube.com/watch?v=eQN_sz2crc0&list=PLYwpaL_SFmcBpa1jwpCbEDespCRF3UPE5'},
    {'id':2,'name':'Logical Reasoning','description':'It is basic Logical Reasoning Tutorial In Video','image':'../../assets/Python (10).jpg','link':'https://www.tutorialspoint.com/reasoning/index.htm','link2':'https://www.youtube.com/watch?v=aNboMxTA4cg'},
    {'id':3,'name':'HR Question','description':'It is Improtant HR Question Tutorial In Video','image':'../../assets/Python (9).jpg','link':'https://www.indiabix.com/hr-interview/questions-and-answers/','link2':'https://www.youtube.com/watch?v=cvmuCat_lE4&list=PLZKbcELbmfUBzPsF55ajfxb0Y2RhfK1KI'},
    {'id':4,'name':'Coding Question','description':'It is Important Coding Question Tutorial In Video','image':'../../assets/Python (8).jpg','link':'https://quescol.com/interview-preparation/c-coding-questions','link2':'https://www.youtube.com/watch?v=gMlmI6aM-ng&list=PLKtofb3HgEywSqg-IMpTClVT-IIoAifHL'},
    {'id':5,'name':'Python Basic','description':'It is basic Python Tutorial In Video','image':'../../assets/Python.jpg','link':'https://www.simplilearn.com/tutorials/python-tutorial/python-interview-questions','link2':'https://www.youtube.com/watch?v=CNs6M4fXBwA&list=PL_8jNcohs27XQfEmWAHCgLFqpsNaWxUSe'},
    {'id':6,'name':'Java Basic','description':'It is Basic Java Tutorial In Video','image':'../../assets/Python (2).jpg','link':'https://www.javatpoint.com/corejava-interview-questions','link2':'https://www.youtube.com/watch?v=eTXd89t8ngI&list=PLd3UqWTnYXOmx_J1774ukG_rvrpyWczm0'},
    {'id':7,'name':'C Basic tutorial','description':'It is Basic C Tutorail In Video','image':'../../assets/Python (4).jpg','link':'https://www.guru99.com/c-programming-interview-questions.html','link2':'https://www.youtube.com/watch?v=rLf3jnHxSmU&list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR'},
    {'id':8,'name':'C++ Basic','description':'It is Basic C++ Tutorial In Video','image':'../../assets/Python (6).jpg','link':'https://www.softwaretestinghelp.com/cpp-interview-questions/','link2':'https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ'},
    {'id':9,'name':'C# Basic tutorial','description':'It is Basic C# Tutorial In Video','image':'../../assets/Python (1).jpg','link':'https://www.geeksforgeeks.org/top-50-c-sharp-interview-questions-answers/','link2':'https://www.youtube.com/watch?v=QxJaNIo1DUo&list=PLX07l0qxoHFLZftsVKyj3k9kfMca2uaPR'},
    {'id':10,'name':'HTML tutorial','description':'It is Full HTML Tutorial In Video','image':'../../assets/Python (3).jpg','link':'https://engineeringinterviewquestions.com/html-html-5-interview-questions-answers/#:~:text=300%2B%20TOP%20HTML%20%26%20HTML%205%20Interview%20Questions,8%208%29%20Explain%20HTML%20Headings%3F%20...%20More%20items','link2':'https://www.youtube.com/watch?v=_Mz69752y_8'},
    {'id':11,'name':'CSS tutorial','description':'It is FULL CSS Tutorial In Video','image':'../../assets/Python (5).jpg','link':'https://www.simplilearn.com/tutorials/css-tutorial/css-interview-questions','link2':'https://www.youtube.com/watch?v=TThZIt4r3eg&list=PL0b6OzIxLPbzDsI5YXUa01QzxOWyqmrWw'},
    {'id':12,'name':'Java Script','description':'It is Java Script Tutorial In Video','image':'../../assets/Python (7).jpg','link':'https://www.guru99.com/javascript-interview-questions-answers.html','link2':'https://www.youtube.com/watch?v=bBpKJccIdvQ&list=PLjpp5kBQLNTSvHo6Rp4Ky0X8x_MabmKye'},
    {'id':13,'name':'Learn Angular','description':'It is Basic Angular Tutorial In Text','image':'../../assets/angular.jpg','link':'https://angular.io/docs','link2':'https://www.youtube.com/watch?v=NMzl2pGOK_8&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty'},
    {'id':14,'name':'Learn Typescript','description':'It is Basic Typescript Tutorial In Text','image':'../../assets/typescript.jpg','link':'https://www.tutorialspoint.com/typescript/index.htm','link2':'https://www.youtube.com/watch?v=kpZn8WEgirI&list=PL_qizAfcpJ-OC2cXLKVZvKK3vg-yz4bqR'},
    {'id':15,'name':'Learn Nodejs','description':'It is Basic Nodejs Tutorial In Text','image':'../../assets/nodejs.jpg','link':'https://www.w3schools.com/nodejs/','link2':'https://www.youtube.com/watch?v=qwfE7fSVaZM'},
    {'id':16,'name':'Learn Reactjs','description':'It is Basic Reactjs Tutorial In text','image':'../../assets/reactjs.jpg','link':'https://reactjs.org/tutorial/tutorial.html','link2':'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3'},
  ]
}
