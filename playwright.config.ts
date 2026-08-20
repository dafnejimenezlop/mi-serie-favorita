import { defineConfig, devices } from '@playwright/test';

// `@playwright/test` estaba instalado como devDependency y la regla 8 exige
// verificación visual con él en dos viewports, pero no había ni configuración
// ni un solo test: la dependencia llevaba meses sin justificar su sitio.
// Estos son los dos viewports (390 y 1440) y las comprobaciones que pide.
export default defineConfig({
  testDir: './e2e',
  timeout: 45_000,
  expect: { timeout: 10_000 },
  // En serie y con un solo worker: el servidor de desarrollo compila y
  // renderiza en servidor un documento de más de 1 MB, y seis pestañas
  // pidiéndolo a la vez lo saturan hasta agotar los tiempos de navegación.
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
    navigationTimeout: 30_000,
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: true,
    timeout: 120_000,
  },
  projects: [
    {
      name: 'escritorio',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
    },
    {
      name: 'movil',
      use: { ...devices['Pixel 5'], viewport: { width: 390, height: 844 } },
    },
  ],
});
