/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  compiler:{
    styledComponents: true,
  },
  images: {
    // domains: ['api.pagar.me'],
    domains:['storage.googleapis.com']
  },
}

