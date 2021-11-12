import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"    //this provides injection for all app using the root keyword  
})                        //also removes need for providers registration in app.module.ts
export class MediaItemService {
    mediaItems;
    constructor(private http: HttpClient) { }

      get() {
        return this.http.get<MediaItemResponse>('mediaitems')
        .pipe(map(response => { return response.mediaItems;}));
      }
      add(mediaItem) {
        this.mediaItems.push(mediaItem);
      }

      delete(mediaItem) {
        let index = this.mediaItems.indexOf(mediaItem);
        if (index >= 0) {
          this.mediaItems.splice(index, 1);
        }
      }
}

interface MediaItem {
    id: number;
    name: string;
    medium: string;
    category: string;
    year: number;
    watchedOn: number;
    isFavorite: boolean;
}

interface MediaItemResponse {
    mediaItems: MediaItem[];
}