import { Component } from '@angular/core';
interface Item{
  name:string;
  select:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  titles=[{title1:"appSowrd!",title2:"A check List"}];
  List=new Array();
  name='Anybody';
  mostrarNombre=false;
  imgUrl="assets/img.png";
  items=[{desc:'Element1',check:true},
    {desc:'Element2',check:false},
    {desc:'Element1',check:true}
  ];
  setName(name:string){
    if(!this.mostrarNombre){
        this.name='Margarita Hurtado'
        this.mostrarNombre=true;
        }
        else{
        this.mostrarNombre=false;
        this.name=name;
        }
  }
  addList(word:string){
    this.List.push({name:word,select:false});
  }
  removeItem(item:Item){
    let index=this.List.indexOf(item);
    if(index>-1){
      this.List.splice(index,1);
    }
  }
  
}
