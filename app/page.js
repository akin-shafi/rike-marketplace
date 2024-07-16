import React from 'react'
import Hero from '@/components/Hero'
import ResearchProduct from '@/components/ResearchProduct'
import LatestPublish from '@/components/LatestPublish'
import Features from '@/components/Features'

const page = () => {
  return (
    <div>
      <Hero />
      <ResearchProduct />
      <LatestPublish />
      <Features />
    </div>
  )
}

export default page