/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 12.10.2016.
 */


import {Injectable} from "@angular/core";
import {RequestOptions, Headers} from "@angular/http";
@Injectable()
export class HttpClientService extends RequestOptions{

    constructor(private requestOptionArgs:RequestOptions){
        super();
    }

    addHeader(headerName:string, headerValue:string){
        (this.requestOptionArgs.headers as Headers).set(headerName, headerValue);
    }

}