import { HttpModule } from '@angular/http';
import { TodoService } from './todo.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosComponent } from './todos.component';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    
  });

  it('should load todos from the server', () => {
    // only works if you provide service at the module level (registered in the compoent)
    // let service = TestBed.get(TodoService);

    let service = TestBed.get(TodoService);
    spyOn(service, 'getTodos').and.returnValue(Observable.from([[1,2,3]]));
    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
