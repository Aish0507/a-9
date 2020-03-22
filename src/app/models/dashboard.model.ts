import {Model} from './model';
export class DashboardModel extends Model {
    constructor(obj: object) {
        super(obj);
    }

    static pageName() {
        return 'Test';
    }

    // static async getDummyData() {
    //     let err, res; // get from API
    //     [err, res] = await HttpProtocols.to(HttpProtocols.get('assets/data/company.json'));
    //     if (err) {
    //         HttpProtocols.TE(err.message, true);
    //     }
    //     if (!res.success) {
    //         HttpProtocols.TE(res.message, true);
    //     }
    //     return res.data;
    // }
}
