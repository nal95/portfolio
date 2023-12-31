import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExperienceComponent} from './experience.component';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {EnterprisesComponent} from "./enterprises/enterprises.component";

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceComponent, EnterprisesComponent],
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule,
      ],

      providers: [TranslateService]
    });
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
