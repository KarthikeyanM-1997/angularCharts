import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieComponent } from './pie/pie.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';


const routes: Routes = [{
  path: "line", component: LineChartComponent
},
{
  path: "pie", component: PieComponent
}, {
  path: "scatter", component: ScatterChartComponent
},
{
  path: "radar", component: RadarChartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
