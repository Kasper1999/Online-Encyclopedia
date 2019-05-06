import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-forum-comment',
  templateUrl: './forum-comment.component.html',
  styleUrls: ['./forum-comment.component.scss']
})
export class ForumCommentComponent implements OnInit {
  @Input() comment;
  ngOnInit() {
  }
}
