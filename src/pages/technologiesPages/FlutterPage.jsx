import React from 'react'
import FlutterHero from '../../components/technologies/Flutter/FlutterHero'
import FlutterInfoSection from '../../components/technologies/Flutter/FlutterInfoSection'
import SoftwareAuditBanner from '../../components/common/SoftwareAuditBanner'
import FlutterDevelopmentSection from '../../components/technologies/Flutter/FlutterDevelopmentSection'
import TechStackSection from '../../components/technologies/Flutter/TechStackSection'
import FlutterApplicationsSection from '../../components/technologies/Flutter/FlutterApplicationsSection'
import AdvantagesOfFlutterSection from '../../components/technologies/Flutter/AdvantagesOfFlutterSection'
import FlutterAppFeatures from '../../components/technologies/Flutter/FlutterAppFeatures'
import CrossPlatformBenefits from '../../components/technologies/Flutter/CrossPlatformBenefits'

const FlutterPage = () => {
  return (
    <div>
      <FlutterHero/>
      <FlutterInfoSection/>
      <SoftwareAuditBanner/>
      <FlutterDevelopmentSection/>
      <TechStackSection/>
      <FlutterApplicationsSection/>
      <AdvantagesOfFlutterSection/>
      <FlutterAppFeatures/>
      <CrossPlatformBenefits/>
    </div>
  )
}

export default FlutterPage
