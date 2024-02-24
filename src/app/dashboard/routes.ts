import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard.page').then((m) => m.DashboardPage),
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full',
      },
      {
        path: 'info',
        loadComponent: () =>
          import('./pages/info/info.page').then((m) => m.InfoPage),
      },
      {
        path: 'clients',
        loadComponent: () =>
          import('./pages/clients/clients.page').then((m) => m.ClientsPage),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./pages/categories/categories.page').then(
            (m) => m.CategoriesPage
          ),
      },
      {
        path: 'category',
        loadComponent: () =>
          import('./pages/category/category.page').then((m) => m.CategoryPage),
      },
      {
        path: 'category/:id',
        loadComponent: () =>
          import('./pages/category/category.page').then((m) => m.CategoryPage),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.page').then((m) => m.ProductsPage),
      },
      {
        path: 'product',
        loadComponent: () =>
          import('./pages/product/product.page').then((m) => m.ProductPage),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('./pages/product/product.page').then((m) => m.ProductPage),
      },
      {
        path: 'raw-materials',
        loadComponent: () =>
          import('./pages/raw-materials/raw-materials.page').then(
            (m) => m.RawMaterialsPage
          ),
      },
      {
        path: 'raw-material',
        loadComponent: () =>
          import('./pages/raw-material/raw-material.page').then(
            (m) => m.RawMaterialPage
          ),
      },
      {
        path: 'raw-material/:id',
        loadComponent: () =>
          import('./pages/raw-material/raw-material.page').then(
            (m) => m.RawMaterialPage
          ),
      },
      {
        path: 'recipes',
        loadComponent: () =>
          import('./pages/recipes/recipes.page').then((m) => m.RecipesPage),
      },
      {
        path: 'recipe',
        loadComponent: () =>
          import('./pages/recipe/recipe.page').then((m) => m.RecipePage),
      },
      {
        path: 'recipe/:id',
        loadComponent: () =>
          import('./pages/recipe/recipe.page').then((m) => m.RecipePage),
      },
      {
        path: 'work-spaces',
        loadComponent: () =>
          import('./pages/work-spaces/work-spaces.page').then(
            (m) => m.WorkSpacesPage
          ),
      },
      {
        path: 'work-flows/:id',
        loadComponent: () =>
          import('./pages/work-flows/work-flows.page').then(
            (m) => m.WorkFlowsPage
          ),
      },
      {
        path: 'work-flows',
        loadComponent: () =>
          import('./pages/work-flows/work-flows.page').then(
            (m) => m.WorkFlowsPage
          ),
      },
      {
        path: 'profiles',
        loadComponent: () =>
          import('./pages/profiles/profiles.page').then((m) => m.ProfilesPage),
      },
      {
        path: 'profile/',
        loadComponent: () =>
          import('./pages/profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'profile/:id',
        loadComponent: () =>
          import('./pages/profile/profile.page').then((m) => m.ProfilePage),
      },
    ],
  },
];
