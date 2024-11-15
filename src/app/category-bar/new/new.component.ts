import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  //templateUrl: './new.component.html',
  template: `<form [formGroup]="categoryForm" (ngSubmit)="onSubmit()" class="mt-3 ms-3">
    <label class="form-label" for="title">Título</label>
    <input class="form-control" type="text" formControlName="titulo" id="title">
    <div *ngIf="categoryForm.get('titulo')?.invalid && categoryForm.get('titulo')?.touched">
      <p>Campo inválido</p>
    </div>

    <label  class="form-label" for="image">Imagem</label>
    <input  class="form-control" type="text" formControlName="imagem" id="image">

    <button class="mt-2 btn btn-success" type="submit">Cadastrar</button>
  </form>`,
  styleUrl: './new.component.css'
})
export class NewComponent {
  categoryForm:FormGroup;
  //FormBuilder --> classe injetavel
  //FormGroup --> vincula formulário com o angular
  //FormControl --> gerencia um componente do formulário
  constructor(private form:FormBuilder){
    this.categoryForm = this.form.group({
      titulo:['',[Validators.required,Validators.minLength(4)]],
      imagem:['']
    });
  }
  onSubmit(){
    console.log(this.categoryForm.value);
  }
}
