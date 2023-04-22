import React from 'react'
import Layout from '../components/layout/Layout'
import { Container } from 'semantic-ui-react'
import Dashboard from '../features/dashboard/Dashboard'
import SectionHero from '../components/SectionHero/SectionHero'
import SectionFeature from '../components/SectionFeature/SectionFeature'
import SectionMeal from '../components/SectionMeal/SectionMeal'
import SectionTestimonial from '../components/SectionTestimonial/SectionTestimonial'
import SectionCta from '../components/SectionCta/SectionCta'

const HomePage = () => {
  return (
    <Layout>
      <main style={{ height: '80%' }}>
        <SectionHero />
        <SectionFeature />
        <SectionMeal />
        <SectionTestimonial />
        <SectionCta />
        <Container style={{ marginTop: '4em', display: 'flex' }}>
          <Dashboard />
        </Container>
      </main>
    </Layout>
  )
}

export default HomePage
