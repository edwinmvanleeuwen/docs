const fetch = require('node-fetch')
const url = 'https://docs-git-migrate-routes.zeit.now.sh'
// const url = 'http://localhost:3000'

const checks = [
  {
    source: '/apiasdfasdf',
    destination: '/docs/api'
  },
  {
    source: '/api/asdfasdf',
    destination: '/docs/api'
  },
  {
    source: '/docs/router-status',
    destination: '/docs/v2/network/status-codes'
  },
  {
    source: '/docs/router-status/hello-world',
    destination: '/docs/v2/network/status-codes#hello-world'
  },
  {
    source: '/docs/builders',
    destination: '/docs/runtimes'
  },
  {
    source: '/docs/github',
    destination: '/docs/v2/advanced/now-for-github'
  },
  {
    source: '/docs/aliasing',
    destination: '/docs/v2/aliasing-a-deployment'
  },
  {
    source: '/docs/v2/routing/asdfasdf',
    destination: '/docs/v2/network/asdfasdf'
  },
  {
    source: '/docs/features/asdfasdf',
    destination: '/docs/v1/features/asdfasdf'
  },
  {
    source: '/docs/static-deployments/asdfasdf',
    destination: '/docs/v1/static-deployments/asdfasdf'
  },
  {
    source: '/docs/deployment-types/asdfasdf',
    destination: '/docs/v1/deployment-types/asdfasdf'
  },
  {
    source: '/docs/guides/updating-now-cli/',
    destination: '/guides/updating-now-cli'
  },
  {
    source: '/docs/v1/guides/updating-now-cli',
    destination: '/guides/updating-now-cli'
  },
  {
    source: '/docs/guides/asdfasdf',
    destination: '/guides'
  },
  {
    source: '/docs/getting-started/asdfasdf',
    destination: '/docs/v1/getting-started/asdfasdf'
  },
  {
    source: '/docs/v2/getting-started/asdfasdf',
    destination: '/docs/v2/introduction'
  },
  {
    source: '/docs/v2/deployments/builders/developer-guides',
    destination:
      'https://github.com/zeit/now/blob/master/DEVELOPING_A_RUNTIME.md'
  },
  {
    source: '/docs/v2/deployments/builders/asdfasdf',
    destination: '/docs/runtimes'
  },
  {
    source: '/docs/v2/advanced/builders/sadf',
    destination: '/docs/runtimes'
  },
  {
    source: '/docs/v2/deployments/environment-variables-and-secrets',
    destination: '/docs/v2/build-step'
  },
  {
    source: '/docs/v2/advanced/conceptss',
    destination: '/docs/v2/platform/deployments'
  },
  {
    source: '/docs/v2/deployments/routess',
    destination: '/docs/configuration#routes'
  },
  {
    source: '/docs/v2/deployments/builds',
    destination: '/docs/runtimes'
  },
  {
    source: '/docs/v2/development/environment-variabless',
    destination: '/docs/v2/serverless-functions/env-and-secrets'
  },
  {
    source: '/docs/v2/development/asdfasdf',
    destination: '/docs/v2/serverless-functions/introduction'
  },
  {
    source: '/docs/v2/deployments/asdfasdf',
    destination: '/docs/v2/introduction'
  },
  {
    source: '/docs/v2/domains-and-aliases/aliasing-a-deployment',
    destination: '/docs/v2/custom-domains#deploying-with-your-domain'
  },
  {
    source: '/docs/v2/domains-and-aliases/aliasing-a-deployment',
    destination: '/docs/v2/custom-domains#deploying-with-your-domain'
  },
  {
    source: '/docs/v2/domains-and-aliases/cdn',
    destination: '/docs/v2/serverless-functions/edge-caching'
  },
  {
    source: '/examples/asdf',
    destination: 'https://github.com/zeit/now-examples'
  },
  {
    source: '/docs/v1/examples/asdf',
    destination: 'https://github.com/zeit/now-examples'
  },
  {
    source: '/docs/other/asdfasdf',
    destination: '/docs/v1/other/asdfasdf'
  },
  {
    source: '/docs/clients/asdfasdf',
    destination: '/docs/v1/clients/asdfasdf'
  },
  {
    source: '/examples/nodejs-express',
    destination: '/examples/express'
  },
  {
    source: '/docs/v2/platform/global-configurationn',
    destination: '/docs/configuration#global'
  },
  {
    source: '/docs/v2/advanced/platform/asdfasdf',
    destination: '/docs/v2/platform/asdfasdf'
  },
  {
    source: '/docs/v2/development/basic/asdfasdf',
    destination: '/docs/v2/deployment/serverless-functions#local-development'
  },
  {
    source: '/docs/v2/integrations/asdfasdf',
    destination: '/docs/v2/more/asdfasdf'
  },
  {
    source: '/docs/v2/domains-and-aliases/asdfasdf',
    destination: '/docs/v2/custom-domains'
  },
  {
    source: '/docs/v2/advanced/asdfasdf',
    destination: '/docs/v2/more/asdfasdf'
  },
  {
    source: '/docs/version-detection',
    destination:
      '/docs/v2/platform/frequently-asked-questions#platform-version-detection'
  }
]

async function main() {
  const failed = []

  for (const check of checks) {
    const res = await fetch(`${url}${check.source}`, {
      redirect: 'manual'
    })
    const actual = (res.headers.get('location') || '').replace(url, '')
    if (actual !== check.destination) {
      console.log('check failed')
      failed.push({
        ...check,
        actual
      })
    } else {
      console.log('check passed')
    }
  }

  console.log('Failed checks:', failed)
}
main()
