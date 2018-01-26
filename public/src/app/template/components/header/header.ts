import { Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.sass']
})
export class HeaderComponent {
  
  /**
   *  drops down the body when header toggle is clicked
   */
  dropBody() {
    const body = $('body')
    if ($('#toggleButton').attr('aria-expanded') === 'true') {
      body.removeClass('mobile-body');
    } else {
      body.addClass('mobile-body');
    }
  }


}
