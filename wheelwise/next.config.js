/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      swcPlugins: [["next-superjson-plugin", {}]]
    },
    images: {
      domains: [
        //add the stuff for our own thing here might change
        'res.cloudinary.com', 
        'avatars.githubusercontent.com',
        'lh3.googleusercontent.com'
      ]
    }
  }
  
  module.exports = nextConfig