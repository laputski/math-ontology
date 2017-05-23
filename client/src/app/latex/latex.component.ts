import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-latex',
  templateUrl: './latex.component.html',
  styleUrls: ['./latex.component.css']
})
export class LatexComponent implements OnInit {

  constructor() { }
 fractionString: string = 'Inside Angular one half = $\\frac 12$';
  index: number = 3;
  
    ngOnInit() {
        //MathJax.Hub.Queue(["Typeset",MathJax.Hub,"MathJax"]);
    }
    
    update () {
      this.fractionString = 'Inside Angular one third = $\\frac 1'+this.index+'$';
      //MathJax.Hub.Queue(["Typeset",MathJax.Hub,"MathJax"]);
      this.index++;
    }

}
