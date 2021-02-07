import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain [find_gym_near_me, about_iron_logs, golden_iron_logs]', () => {
    const navElementDebug: DebugElement = fixture.debugElement;
    const navListDebug: DebugElement[] = navElementDebug.queryAll(By.css('.nav li'));
    const navList = navListDebug.map(el => el.nativeElement);
    const navListContent: (string | null)[] = navList.map(navItem => navItem.textContent);

    expect(navListContent).toContain("Find Gym Near Me");
    expect(navListContent).toContain("About Iron Logs");
    expect(navListContent).toContain("Golden Iron Logs")
  })

  it('first link should redirect to homepage', () => {

  })

  it('clicking collapsed menu should expand menu', () => {
    const navElementDebug: DebugElement = fixture.debugElement;
    const navIconDebug: DebugElement = navElementDebug.query(By.css('.nav i'));
    navIconDebug.triggerEventHandler('click', null);

    // verify dropdown is displayed
  })

  it('clicking exanded menu should collapse menu')


});