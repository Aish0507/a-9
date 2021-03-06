import { Component, OnInit, AfterViewInit,
         ElementRef, ViewChild, Input,
         OnChanges } from '@angular/core';
import MetisMenu from 'metismenujs/dist/metismenujs';
import { EventService } from '@app/services/events/event.service';
import { Router, NavigationEnd } from '@angular/router';
import { LoggerService } from '@app/services/log4ts/logger.service';
import { Util } from '@app/utils/util';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

/**
 * Sidebar component
 */
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() isCondensed = false;
  @Input() menuItems: any;
  @Input() menuParentId: any;
  parentMenu: Array<any>;
  menu: any;
  @ViewChild('sideMenu') sideMenu: ElementRef;
  constructor(private eventService: EventService,
              private router: Router,
              private logger: LoggerService,
              private util: Util) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
      }
    });
  }

  ngOnInit() {
    this.lightSidebar();
    this.parentMenu = this.util.unFlattenArray(this.menuItems);
    this.logger.info('Side bar parentMenu', JSON.stringify(this.parentMenu));
  }
  ngAfterViewInit() {
    this.menu = new MetisMenu(this.sideMenu.nativeElement);
    this._activateMenuDropdown();
  }

  ngOnChanges() {
    if (!this.isCondensed && this.sideMenu || this.isCondensed) {
      setTimeout(() => {
        this.menu = new MetisMenu(this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }

  /**
   * remove active and mm-active class
   */
  _removeAllClass(className) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }

  /**
   * Activates the menu dropdown
   */
  _activateMenuDropdown() {
    this._removeAllClass('active');
    this._removeAllClass('mm-active');
    const links = document.getElementsByClassName('side-nav-link-ref');
    let menuItemEl = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // tslint:disable-next-line: no-string-literal
      if (window.location.pathname === links[i]['pathname']) {
        menuItemEl = links[i];
        break;
      }
    }
    if (menuItemEl) {
      menuItemEl.classList.add('active');

      const parentEl = menuItemEl.parentElement;
      if (parentEl) {
        parentEl.classList.add('mm-active');
        const parentEl2 = parentEl.parentElement.closest('ul');
        if (parentEl2 && parentEl2.id !== 'side-menu') {
          parentEl2.classList.add('mm-show');

          const parentEl3 = parentEl2.parentElement;
          if (parentEl3) {
            parentEl3.classList.add('mm-active');
            const childAnchor = parentEl3.querySelector('.has-arrow');
            const childDropdown = parentEl3.querySelector('.has-dropdown');
            if (childAnchor) { childAnchor.classList.add('mm-active'); }
            if (childDropdown) { childDropdown.classList.add('mm-active'); }

            const parentEl4 = parentEl3.parentElement;
            if (parentEl4) { parentEl4.classList.add('mm-show'); }
            const parentEl5 = parentEl4.parentElement;
            if (parentEl5) { parentEl5.classList.add('mm-active'); }
          }
        }
      }
    }
  }

  /**
   * Light sidebar
   */
  lightSidebar() {
    document.body.setAttribute('data-sidebar', 'light');
    document.body.setAttribute('data-topbar', 'dark');
    document.body.removeAttribute('data-sidebar-size');
    document.body.removeAttribute('data-layout-size');
    document.body.removeAttribute('data-keep-enlarged');
    document.body.classList.remove('vertical-collpsed');
  }
}
