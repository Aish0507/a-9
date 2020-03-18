import { Injectable } from '@angular/core';
import { Menu } from '../models/menu.model';
import { verticalMenuItems } from '../../layouts/vertical/menu/menu';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    constructor() {}
    public getVerticalMenuItems(): Array<Menu> {
        return verticalMenuItems;
    }
}