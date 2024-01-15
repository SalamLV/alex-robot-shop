import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogComponent } from './catalog.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogComponent],
      providers:[
        HttpClient,
        HttpHandler,
        ActivatedRoute
      ]
    });
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
