import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "../app/index/index.component";
import { CreateDailyComponent } from "../app/create-daily/create-daily.component";

const routes: Routes = [
  { path: 'index', component: IndexComponent, data: { animation: 'IndexComponent' } },
  { path: 'create', component: CreateDailyComponent, data: { animation: 'CreateDailyComponent' } },
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  { path: '**', component: IndexComponent, data: { animation: 'IndexComponent' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 必须首先初始化路由器，并让它开始监听浏览器中的地址变化。
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
