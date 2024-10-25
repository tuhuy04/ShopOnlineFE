import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input() dataLineChart: any;
  option2: any;
  dateFormat = 'yyyy/MM/dd';
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.dataLineChart);
    this.option2 = {
      title: {
        text: this.dataLineChart?.title,
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: false
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {
        type: 'value'
      },
      series: this.dataLineChart?.data
    }
  }

}
