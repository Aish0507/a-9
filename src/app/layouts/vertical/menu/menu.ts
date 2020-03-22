import { Menu } from '@models/menu.model';

export const verticalMenuItems = [
    new Menu(1, 'Dashboard', '/', null, 'bx-home-circle', null, false, 0, true),
    new Menu(2, 'Task', '/blank', null, 'bx-task', null, true, 0, false),
    new Menu(3, 'Sub Task', '/sub-task', null, 'bx-subdirectory-right', null, false, 2, false),
    new Menu(4, 'Sub Task', '/sub-task', null, 'bx-subdirectory-right', null, false, 2, false),
    new Menu(5, 'Event', '/events', null, 'bx-polygon', null, false, 0, false)
    // new Menu(6, 'Login Demo', '/account/auth/login', null, 'bx-log-in', null, false, 0, false)
];