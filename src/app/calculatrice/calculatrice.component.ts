import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {
  ecran="0";
  a="";
  b="";
  operator="";
  test=false;
  constructor() { }

  ngOnInit(): void {
  }
  onNumber(n : string){
    if(this.ecran==="0"){
        this.ecran=n;
    }else{
      this.ecran+=n;
    }
    if(this.test===false){
      this.a+=n;
    }else{
      this.b+=n;
    }
  }
  onOperator(op : string){
    if(this.operator!=""){
      if(this.a!="" && this.b!=""){
        this.a=this.calcul().toString();
        this.b="";
        this.operator=op;
        this.test=true;
        this.ecran+=op;
      }
    }else{
      this.operator=op;
      this.test=true;
      this.ecran+=op;
    }
  }
  onClear(){
    this.ecran="0";
    this.a="";
    this.b="";
    this.test=false;
  }
  calcul(){
    let a=+this.a;

      let b=+this.b;
      let res=0;
      
      if(this.operator==="+"){
        res=a+b;
      }
      if(this.operator==="-"){
        res=a-b;
      }
      if(this.operator==="*"){
        res=a*b;
      }
      if(this.operator==="/" ){
        res=a/b;
      }
      return res;  
  }
  onResult(){
    if(this.a!="" && this.b!="" && this.operator!=""){
      let res=this.calcul();
      this.ecran=res.toString();
      this.a=this.ecran;
      this.b="";
      this.operator="";
      this.test=true;
    }
  }
 
}
