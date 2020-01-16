import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular';
  myForm: FormGroup;
  arr: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      arr: this.fb.array([])
    })
    const childArr = this.myForm.controls.arr as FormArray;
    childArr.push(this.createItem());
  }

  createItem() {
    return this.fb.group({
      name: ['abc'],
      age: ['21'],
      address: this.fb.array([
        this.fb.group({city:[''],
        state:['state']
        }),
        this.fb.group({city:[''],
        state:['state1']
        })
      ])
    })
  }

  addItem() {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
