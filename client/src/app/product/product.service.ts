import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ProductService {

    constructor(private http: Http) {
    }

    loadAll(URL: string) {
        return this.http.get(URL)
            .map(responce => responce.json())
            .catch(ProductService.handleError);
    }

    loadById(URL: string, identifier: number) {
        return this.http.get(URL + "/" + identifier)
            .map((response: Response) => response.json())
            .catch(ProductService.handleError);
    }

    loadByName(URL: string, name: string) {
        return this.http.get(URL + "/name/" + name)
            .map((response: Response) => response.json())
            .catch(ProductService.handleError);
    }

    create(URL: string, body: any) {
        return this.http.post(URL, body)
            .map((response: Response) => response)
            .catch(ProductService.handleError);
    }

    update(URL: string, body: any) {
        return this.http.put(URL, body)
            .map((response: Response) => response)
            .catch(ProductService.handleError);
    }

    remove(URL: string, identifier: number) {
        return this.http.delete(URL + "/" + identifier)
            .map((response) => response)
            .catch(ProductService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}