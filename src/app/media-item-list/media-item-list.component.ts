import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../services/media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss']
})
export class MediaItemListComponent implements OnInit {
  medium = '';
  mediaItems;
  /**
   *
   */
  constructor(private mediaItemService: MediaItemService) { }
  


  ngOnInit() {
    this.getMediaItems(this.medium);
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }

  getMediaItems(medium: string){
    this.medium = medium;
    this.mediaItemService.get(this.medium)
    .subscribe(mediaItems => {
      this.mediaItems = mediaItems;
    });
  }
}
