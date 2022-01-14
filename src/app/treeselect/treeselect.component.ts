import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NodeServiceTreeSelect } from './nodeServiceTreeSelect';


@Component({
  selector: 'app-treeselect',
  templateUrl: './treeselect.component.html',
  styleUrls: ['./treeselect.component.css']
 
})

// importe no app.component.ts -> import { TreeSelectModule } from 'primeng/treeselect';
//                                import {PanelModule} from 'primeng/panel';
export class TreeselectComponent implements OnInit {

  nodes1!: any[];

    nodes2!: any[];

    nodes3!: any[];

    selectedNodes1: any[] = [];

    selectedNodes2: any[] = [];

    selectedNode: any;

    constructor(public nodeServiceTreeSelect: NodeServiceTreeSelect) { }

    ngOnInit() {
        this.nodeServiceTreeSelect.getFiles().then(files => this.nodes1 = files);
        this.nodeServiceTreeSelect.getFiles().then(files => this.nodes2 = files);
        this.nodeServiceTreeSelect.getFiles().then(files => this.nodes3 = files);
    }    

}
