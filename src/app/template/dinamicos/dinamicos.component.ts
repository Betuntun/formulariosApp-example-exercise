import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];

}

interface Favorito{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  nuevoJuego: string = '';
  persona: Persona ={
    nombre: 'Beto',
    favoritos: [
      {id:1, nombre:'Shofis'},
      {id:2, nombre: 'Nashira'},

    ]
  }
  @ViewChild('miFormulario') miFormulario!:NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('Formulario posteado');
    console.log(this.miFormulario.value);
  }

  eliminar(id:number){
    this.persona.favoritos.splice(id, 1);
  }
  agregarFavorito(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }
}
