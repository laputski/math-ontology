import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { GRAPH } from './graph.data';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GraphComponent implements OnInit {

  @ViewChild('chart') private chartContainer: ElementRef;

  private graph: any;
  private margin: any = { top: 0, bottom: 0, left: 20, right: 20};
  private link:any ={}
  private node:any;
  private width: number;
  private height: number;
  private d: any;


  constructor() {
  	
   }

  ngOnInit() {
  	 this.graph = GRAPH;
  	 this.createChart();
  }

  createChart() {
  	console.log(this.graph.links);
    let element = this.chartContainer.nativeElement;

    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    let svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

     let link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(this.graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d:any) { return Math.sqrt(d.value); });


let simulation = d3.forceSimulation()
    .force("link",  d3.forceLink().id(function(d:any) { return d.id; } ) )
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(this.width / 2, this.height / 2));


 let  node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(this.graph.nodes)
    .enter().append("circle")
      .attr("r", 5)
      .call(d3.drag()
      	.on("start",dragstarted)
      	.on("drag",dragged)
      	.on("end",dragended)
      	);

  node.append("title")
      .text(function(d:any) { return d.id; });
      

  simulation
      .nodes(this.graph.nodes)
      .on("tick", ticked);
 



  let rk:any = simulation.force("link");
      rk.links(this.graph.links);


      function ticked() {
    link
        .attr("x1", function(d:any) { return d.source.x; })
        .attr("y1", function(d:any) { return d.source.y; })
        .attr("x2", function(d:any) { return d.target.x; })
        .attr("y2", function(d:any) { return d.target.y; });

    node
        .attr("cx", function(d:any) { return d.x; })
        .attr("cy", function(d:any) { return d.y; });
  }

  function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

  }



}
