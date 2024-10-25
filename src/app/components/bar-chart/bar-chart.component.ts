import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  BarChartOptions: any;
  @Input() dataBarChart: any;
  dateFormat = 'yyyy/MM/dd';

  constructor() {

  }

  ngOnInit(): void {
    this.BarChartOptions = {
      title: {
        text: this.dataBarChart?.title,
      },
      legend: {},
      tooltip: {},
      dataset: {
        source: this.dataBarChart?.data
      },
      xAxis: {
        type: 'category', axisLabel: {interval: 0, rotate: 30}
      },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{type: 'bar'}, {type: 'bar'}, {type: 'bar'}]
    };
  }

}
