import { Routes } from '@angular/router';
import { CouseDetailsComponent } from './couse-details/couse-details.component';
import { CourseComponent } from './course/course.component';
import { NewComponent } from './category-bar/new/new.component';

export const routes: Routes = [
  {path: 'course',component:CourseComponent},
  {path:'course-details',component:CouseDetailsComponent},
  {path:'course/:id',component:CourseComponent},
  {path:'category/new', component:NewComponent}
];
