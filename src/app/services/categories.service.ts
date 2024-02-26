import { Inject, Injectable } from '@angular/core';
import { Category } from './../pages/category/category';
import { environment } from 'src/environments/environment.development';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
// import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {}

  getCategory() {
    const header = new HttpHeaders({ token: '12439hinkse8u9d2' });

    return this.http.get<any[]>('category', {
      headers: header,
    });
  }
}
