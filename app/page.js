import React from 'react'
import Hero from '@/components/Hero'
import ResearchProduct from '@/components/ResearchProduct'
import LatestPublish from '@/components/LatestPublish'

const page = () => {
  return (
    <div>
      <Hero />
      <ResearchProduct />
      <LatestPublish />
    </div>
  )
}

export default page