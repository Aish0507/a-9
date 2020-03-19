import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'any'
})
export class Util {
    constructor() { }

    unFlattenArray(array: any) {
        const map = {};
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < array.length; i++) {
            // tslint:disable-next-line:prefer-const
            let obj = array[i];
            obj.childs = [];
            map[obj.id] = obj;
            // tslint:disable-next-line:prefer-const
            let parent = obj?.parentId || '-';
            if (!map[parent]) {
                map[parent] = {
                    childs: []
                };
            }
            map[parent].childs.push(obj);
        }

        return map['-'].childs;
    }
}
