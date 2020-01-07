const isProd = process.env.NODE_ENV === 'production'

const rehypePrism = require('@mapbox/rehype-prism')
// Adds github.com/mdx-js/mdx to Next.js
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
})

module.exports = withMDX({
  target: 'serverless',

  experimental: {
    css: true,

    rewrites() {
      return [
        {
          source: '/:path*/',
          destination: '/:path*'
        },
        // TODO: test out basePath to replace below rewrites
        {
          source: '/docs/sitemap.xml',
          destination: '/sitemap.xml'
        },
        {
          source: '/docs/_next(.*)',
          destination: '/_next$1'
        },
        {
          source: '/docs/static(.*)',
          destination: '/static$1'
        }
      ]
    },

    redirects() {
      return [
        {
          source: '/api(.*)',
          statusCode: 301,
          destination: '/docs/api'
        },
        {
          source: '/docs/router-status/:code',
          statusCode: 301,
          destination: '/docs/v2/network/status-codes#:code'
        },
        {
          source: '/docs/router-status(|/)',
          statusCode: 301,
          destination: '/docs/v2/network/status-codes'
        },
        {
          source: '/docs/builders',
          statusCode: 301,
          destination: '/docs/runtimes'
        },
        {
          source: '/docs/github',
          statusCode: 301,
          destination: '/docs/v2/advanced/now-for-github'
        },
        {
          source: '/docs/aliasing',
          statusCode: 301,
          destination: '/docs/v2/aliasing-a-deployment'
        },
        {
          source: '/docs/v2/routing/:path*',
          statusCode: 301,
          destination: '/docs/v2/network/:path*'
        },
        {
          source: '/docs/features/:path*',
          statusCode: 301,
          destination: '/docs/v1/features/:path*'
        },
        {
          source: '/docs/static-deployments/:path*',
          statusCode: 301,
          destination: '/docs/v1/static-deployments/:path*'
        },
        {
          source: '/docs/deployment-types/:path*',
          statusCode: 301,
          destination: '/docs/v1/deployment-types/:path*'
        },
        {
          source: '/docs/(|v1/)guides/updating-now-cli(|/)',
          statusCode: 301,
          destination: '/guides/updating-now-cli'
        },
        {
          source: '/docs/guides/:path*',
          statusCode: 301,
          destination: '/guides'
        },
        {
          source: '/docs/getting-started/:path*',
          statusCode: 301,
          destination: '/docs/v1/getting-started/:path*'
        },
        {
          source: '/docs/v2/getting-started/:path*',
          statusCode: 301,
          destination: '/docs/v2/introduction'
        },
        {
          source:
            '/docs/v2/((?:deployments|advanced))/builders/developer-guide(.*)',
          statusCode: 301,
          destination:
            'https://github.com/zeit/now/blob/master/DEVELOPING_A_RUNTIME.md'
        },
        {
          source:
            '/docs/v2/deployments/((?:builders|official-builders))/:path*',
          statusCode: 301,
          destination: '/docs/runtimes'
        },
        {
          source: '/docs/v2/advanced/builders(.*)',
          statusCode: 301,
          destination: '/docs/runtimes'
        },
        {
          source: '/docs/v2/deployments/environment-variables-and-secrets(|/)',
          statusCode: 301,
          destination: '/docs/v2/build-step'
        },
        {
          source: '/docs/v2/advanced/concepts(.*)',
          statusCode: 301,
          destination: '/docs/v2/platform/deployments'
        },
        {
          source: '/docs/v2/deployments/routes(.*)',
          statusCode: 301,
          destination: '/docs/configuration#routes'
        },
        {
          source: '/docs/v2/deployments/builds(|/)',
          statusCode: 301,
          destination: '/docs/runtimes'
        },
        {
          source: '/docs/v2/development/environment-variables(.*)',
          statusCode: 301,
          destination: '/docs/v2/serverless-functions/env-and-secrets'
        },
        {
          source: '/docs/v2/development/(.*)',
          statusCode: 301,
          destination: '/docs/v2/serverless-functions/introduction'
        },
        {
          source: '/docs/v2/deployments/(.*)',
          statusCode: 301,
          destination: '/docs/v2/introduction'
        },
        {
          source: '/docs/v2/domains-and-aliases/aliasing-a-deployment(|/)',
          statusCode: 301,
          destination: '/docs/v2/custom-domains#deploying-with-your-domain'
        },
        {
          source: '/docs/v2/domains-and-aliases/aliasing-a-deployment(|/)',
          statusCode: 301,
          destination: '/docs/v2/custom-domains#deploying-with-your-domain'
        },
        {
          source: '/docs/v2/domains-and-aliases/cdn(|/)',
          statusCode: 301,
          destination: '/docs/v2/serverless-functions/edge-caching'
        },
        {
          source: '/examples(.*)',
          statusCode: 301,
          destination: 'https://github.com/zeit/now-examples'
        },
        {
          source: '/docs/v1/examples/(.*)',
          statusCode: 301,
          destination: 'https://github.com/zeit/now-examples'
        },
        {
          source: '/docs/other/:path*',
          statusCode: 301,
          destination: '/docs/v1/other/:path*'
        },
        {
          source: '/docs/clients/:path*',
          statusCode: 301,
          destination: '/docs/v1/clients/:path*'
        },
        {
          source: '/examples/nodejs-express',
          statusCode: 301,
          destination: '/examples/express'
        },
        {
          source: '/docs/v2/platform/global-configuration(.*)',
          statusCode: 301,
          destination: '/docs/configuration#global'
        },
        {
          source: '/docs/v2/advanced/platform/:path*',
          statusCode: 301,
          destination: '/docs/v2/platform/:path*'
        },
        {
          source: '/docs/v2/development/basic/:path*',
          statusCode: 301,
          destination:
            '/docs/v2/deployment/serverless-functions#local-development'
        },
        {
          source: '/docs/v2/integrations/:path*',
          statusCode: 301,
          destination: '/docs/v2/more/:path*'
        },
        {
          source: '/docs/v2/domains-and-aliases/(.*)',
          statusCode: 301,
          destination: '/docs/v2/custom-domains'
        },
        {
          source: '/docs/v2/advanced/:path*',
          statusCode: 301,
          destination: '/docs/v2/more/:path*'
        },
        {
          source: '/docs/version-detection',
          statusCode: 301,
          destination:
            '/docs/v2/platform/frequently-asked-questions#platform-version-detection'
        }
      ]
    }
  },

  exportTrailingSlash: true,

  // Allow mdx and md files to be pages
  pageExtensions: ['jsx', 'js', 'mdx', 'md'],

  assetPrefix: isProd ? '/docs' : '',

  env: {
    VERSION: require('./package.json').version,
    API_URL: process.env.API_URL,
    IMAGE_ASSETS_URL: 'https://assets.zeit.co/image/upload/front',
    VIDEO_ASSETS_URL: 'https://assets.zeit.co/video/upload/front',
    RAW_ASSETS_URL: 'https://assets.zeit.co/raw/upload/front',
    ASSETS: isProd ? '/docs/static' : '/static'
  },

  webpack(config, { isServer }) {
    if (isServer) {
      require('./scripts/generate-site-map')
    }
    return config
  }
})
