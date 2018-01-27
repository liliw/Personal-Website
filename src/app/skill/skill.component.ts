import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrolling() {
    var scrollDuration = 500;
        var scrollStep = -window.scrollY / (scrollDuration / 15);
        console.log(scrollStep);

        var scrollInterval = setInterval(function(){
          if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        },15);
  }


}
