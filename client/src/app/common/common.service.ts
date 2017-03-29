import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CommonService {

    constructor(private http: Http) {
    }

    loadAll(URL: string) {
        return this.http.get(URL)
            .map(responce => responce.json())
            .catch(CommonService.handleError);
    }

    loadById(URL: string, identifier: number) {
        return this.http.get(URL + "/" + identifier)
            .map((response: Response) => response.json())
            .catch(CommonService.handleError);
    }

    loadByName(URL: string, name: string) {
        return this.http.get(URL + "/name/" + name)
            .map((response: Response) => response.json())
            .catch(CommonService.handleError);
    }

    create(URL: string, body: any) {
        return this.http.post(URL, body)
            .map((response: Response) => response)
            .catch(CommonService.handleError);
    }

    update(URL: string, body: any) {
        return this.http.put(URL, body)
            .map((response: Response) => response)
            .catch(CommonService.handleError);
    }

    remove(URL: string, identifier: number) {
        return this.http.delete(URL + "/" + identifier)
            .map((response) => response)
            .catch(CommonService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}