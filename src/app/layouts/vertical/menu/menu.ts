import { Menu } from '../../../core/models/menu.model';


export const verticalMenuItems = [
    new Menu(1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new Menu(2, 'Task', '/blank', null, 'check_box_outline_blank', null, true, 0),
    new Menu(3, 'Sub Task', '/blank', null, 'check_box_outline_blank', null, false, 2)
];