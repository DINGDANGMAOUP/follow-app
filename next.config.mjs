/** @type {import('next').NextConfig} */
import { createRequire } from 'module';
const isProd = process.env.NODE_ENV === 'production';
const require = createRequire(import.meta.url);
const internalHost = process.env.TAURI_DEV_HOST || 'localhost';
const { FileSystemIconLoader } = require('unplugin-icons/loaders');
const nextConfig = {
  transpilePackages: ['lucide-react'],
    // 确保 Next.js 使用 SSG 而不是 SSR
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: 'export',
  // 注意：在 SSG 模式下使用 Next.js 的 Image 组件需要此功能。
  // 请参阅 https://nextjs.org/docs/messages/export-image-api 了解不同的解决方法。
  images: {
    unoptimized: true,
  },
  // 配置 assetPrefix，否则服务器无法正确解析您的资产。
  assetPrefix: isProd ? null : `http://${internalHost}:3000`,
  webpack:(config)=>{
    //https://github.com/vercel/next.js/discussions/12810#discussioncomment-1297794
    config.module.rules.push({
      test: /\.(mp3)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    })
    config.plugins.push(require('unplugin-auto-import/webpack').default({
      imports: ['react','ahooks','jotai','jotai/utils'],
      dirs: ['./components/**'],
      dts: './typing/auto-imports.d.ts',
      resolvers: [
        require('unplugin-icons/resolver').default({
          prefix: 'Icon',
          extension: 'jsx',
          customCollections: ['local'],
        })
      ],
      eslintrc: {
        enabled: true,
      },
    }),require('unplugin-icons/webpack').default({
      compiler: 'jsx',
      customCollections: {
        local: FileSystemIconLoader(
          'src/assets/icons',
          svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },
    }))
    return config
  },
};

export default nextConfig;
