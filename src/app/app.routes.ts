import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'portfolio-website', loadChildren: () => import('./portfolio-website/module/portfolio-website.module').then(m => m.PortfolioWebsiteModule)}
];
