import {Model} from './model';
import { HttpProtocols } from '@app/http/http.protocols';
export class DashboardModel extends Model {
    constructor(obj: object) {
        super(obj);
    }

    static async getDummyData() {
        // tslint:disable-next-line:one-variable-per-declaration
        let err: any, res: any; // get from API
        [err, res] = await HttpProtocols.to(HttpProtocols.get('assets/data/dashboard.json'));
        if (err) {
            HttpProtocols.TE(err.message, true);
        }
        if (!res.success) {
            HttpProtocols.TE(res.message, true);
        }
        return res.data;
    }
}
