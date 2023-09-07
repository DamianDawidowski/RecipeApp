import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() changeToRecipes = new EventEmitter<{targetSection: string}>();
  @Output() changeToList = new EventEmitter<{targetSection: string}>();

  setToRecipes() {
    this.changeToRecipes.emit({targetSection: 'recipe'})
  }

  setToList() { 
    this.changeToList.emit({targetSection: 'list'})
  }

}
