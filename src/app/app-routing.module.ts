import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/services/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'about',
      loadChildren: () =>
        import('./pages/about/about.module').then(m => m.AboutModule)
    },
    {
      path: 'ai-agents',
      loadChildren: () =>
        import('./pages/app-landing/app-landing.module').then(
          m => m.AppLandingModule
        )
    },
    {
      path: 'customer-service',
      loadChildren: () =>
        import('./pages/automate-social/automate-social.module').then(
          m => m.AutomateSocialModule
        )
    },
    {
      path: 'business-solutions',
      loadChildren: () =>
        import('./pages/business-solutions/business-solutions.module').then(
          m => m.BusinessSolutionsModule
        )
    },
    {
      path: 'contact',
      loadChildren: () =>
        import('./pages/contact/contact.module').then(m => m.ContactModule)
    },
    {
      path: 'health',
      loadChildren: () =>
        import('./pages/corporate/corporate.module').then(
          m => m.CorporateModule
        )
    },
    {
      path: 'developers',
      loadChildren: () =>
        import('./pages/developers/developers.module').then(
          m => m.DevelopersModule
        )
    },
    {
      path: 'rpa',
      loadChildren: () =>
        import('./pages/online-payment/online-payment.module').then(
          m => m.OnlinePaymentModule
        )
    },
    {
      path: 'pricing',
      loadChildren: () =>
        import('./pages/pricing/pricing.module').then(m => m.PricingModule)
    },
    {
      path: 'real-estate',
      loadChildren: () =>
        import('./pages/saas/saas.module').then(m => m.SaasModule)
    },
    {
      path: 'startup',
      loadChildren: () =>
        import('./pages/startup/startup.module').then(m => m.StartupModule)
    }
  ]),

  {
    path: 'processes',
    loadChildren: () =>
      import('./pages/app-landing-2/app-landing-2.module').then(
        m => m.AppLanding2Module
      )
  },
  {
    path: 'dataflows',
    loadChildren: () =>
      import('./pages/integration/integration.module').then(
        m => m.IntegrationModule
      )
  },
  {
    path: 'smart-business',
    loadChildren: () =>
      import('./pages/smart-business/smart-business.module').then(
        m => m.SmartBusinessModule
      )
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('./pages/terms/terms.module').then(m => m.TermsModule)
  },
  {
    path: 'social',
    loadChildren: () =>
      import('./pages/social/social.module').then(m => m.SocialModule)
  },

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
