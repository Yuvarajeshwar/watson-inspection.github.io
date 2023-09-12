// CustomerInfoPanel.js
import React from 'react'
import styled from '@emotion/styled'

const InfoPanelWrapper = styled.div`
    text-align: left;
    padding: 20px;
`

const SectionTitle = styled.h2`
    margin-top: 16px;
    color: white;
`

const InfoSection = styled.div`
    margin-top: 8px;
`

const InfoText = styled.p`
    margin: 4px 0;
    color: white;
`

const CustomerInfoPanel = ({ customerInfo, gasMeterInfo, info }) => {
  return (
    <InfoPanelWrapper>
      <SectionTitle>Customer Information</SectionTitle>
      <InfoSection>
        <InfoText>Name: {info.customerName}</InfoText>
        <InfoText>Phone: {info.phoneNumber}</InfoText>
        <InfoText>Address: {customerInfo.address}</InfoText>
      </InfoSection>
      <SectionTitle>Gas Meter Information</SectionTitle>
      <InfoSection>
        <InfoText>Meter ID: {info.connectionNumber}</InfoText>
        <InfoText>Reading: {gasMeterInfo.reading} m³</InfoText>
        <InfoText>Installation Date: {gasMeterInfo.lastUpdated}</InfoText>
        <InfoText>Status: Active</InfoText>
        <InfoText>Last Updated: {gasMeterInfo.lastUpdated}</InfoText>
      </InfoSection>
    </InfoPanelWrapper>
  )
}

export default CustomerInfoPanel
