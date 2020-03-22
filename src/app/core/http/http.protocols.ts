import {Router} from '@angular/router';
import {Injector} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import * as pe from 'parse-error';
import {environment} from '@env';
import { AppInjector } from '../../app.module';


export class HttpProtocols {
    constructor() {

    }
    static get router() {
        return AppInjector.get(Router);
    }

    static get http() {
        return AppInjector.get(HttpClient);
    }

    static get dialog() {
        return AppInjector.get(MatDialog);
    }

    static getUrlParams(route: any) {
        return new Promise(resolve => {
            route.params.subscribe(params => resolve(params));
        });
    }

    // global function that will help use handle promise rejections, this article talks
    static to(promise: any, parse?: any) {
        return promise.then((data: any) => {
            return [null, data];
        }).catch((err: any) => {
            if (parse === false) { return [err]; }
            return [pe(err)];
        });
    }

    // TE stands for Throw Error
    // tslint:disable-next-line:variable-name
    static TE = function (err_message: string, log?: boolean) {
        if (log === true) {
            console.error(err_message);
        }
        const config = {data: {title: 'Alert!', body: err_message}};
        alert(JSON.stringify(config));
        throw new Error(err_message);
    };

    static getApiUrl() {
        return this.getEnvObj();
    }

    static getEnvObj() {
        return environment;
    }

    static apiHeaders(headers: any, isFormData?: any) {
        if (isFormData !== undefined) {
            headers = headers.append('mimeType', 'multipart/form-data');
        } else {
            headers = headers.append('Content-Type', 'application/json');
        }
        headers = headers.append('Authorization', 'CaNew@#');
        console.log(headers);
        return headers;
    }

    static responder(err: any, res: any) {
        let send: any;
        if (err) { send = err; }
        if (res) { send = res; }
        return JSON.parse(JSON.stringify(send));
    }

    static async post(url: any, data: any, isFormData?: any) {
        let headers = new HttpHeaders();
        if (url[0] === '/') {
            url = `${this.getApiUrl()}${url}`;
            headers = this.apiHeaders(headers, isFormData);
        }
        // tslint:disable-next-line:one-variable-per-declaration
        let err: any, res: any;
        [err, res] = await this.to(this.http.post(url, data, {headers}).toPromise(), true);
        return this.responder(err, res);
    }

    static async put(url: any, data: any) {
        let headers = new HttpHeaders();
        if (url[0] === '/') {
            url = `${this.getApiUrl()}${url}`;
            headers = this.apiHeaders(headers);
        }

        // tslint:disable-next-line:one-variable-per-declaration
        let err: any, res: any;
        [err, res] = await this.to(this.http.put(url, data, {headers}).toPromise(), true);
        return this.responder(err, res);
    }

    static async patch(url: any, data: any) {
        let headers = new HttpHeaders();
        if (url[0] === '/') {
            url = this.getApiUrl() + url;
            headers = this.apiHeaders(headers);
        }
        // tslint:disable-next-line:one-variable-per-declaration
        let err: any, res: any;
        [err, res] = await this.to(this.http.patch(url, data, {headers}).toPromise(), true);
        return this.responder(err, res);
    }

    static async delete(url: any, data?: any) {
        const headers = new HttpHeaders();
        const httpOptions = {
            headers: this.apiHeaders(headers),
            body: data
        };
        if (url[0] === '/') {
            url = this.getApiUrl() + url;
        }
        // tslint:disable-next-line:one-variable-per-declaration
        let err: any, res: any;
        [err, res] = await this.to(this.http.delete(url, httpOptions).toPromise(), true);
        return this.responder(err, res);
    }

    static async get(url: any) {
        let headers = new HttpHeaders();
        if (url[0] === '/') {
            url = this.getApiUrl() + url;
            headers = this.apiHeaders(headers);
        }
        console.log(url, headers, this.http);
       // tslint:disable-next-line:one-variable-per-declaration
        let err: any, res: any;
        [err, res] = await this.to(this.http.get(url, {headers}).toPromise(), false);
        return this.responder(err, res);
    }
    static route(uri: any) {
        this.router.navigate([uri]);
    }
}