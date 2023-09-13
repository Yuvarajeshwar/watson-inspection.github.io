import React, { useState } from 'react'
import { Grid, Paper, Divider  } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { styled } from '@mui/system'
import ImageViewer from './components/ImageViewer'
import Questionnaire from './components/Questionnaire'
import CustomerInfoPanel from './components/InfoPanel'
import { questions, customerInfo, gasMeterInfo } from './utils/data'

const StyledGrid = styled(Grid)`
  height: 100vh;
  overflow: hidden;
`

const ScrollablePaper = styled(Paper)`
  max-height: 100vh;
  background-color: #194759;
  padding: 16px;
  overflow-y: auto;
`

const DivisionLine = styled(Divider)`
  margin: 16px 0;
`

export function ReviewPage (props) {
  const [responses, setResponses] = useState({})
  const [load, setLoad] = useState({})
  const location = useLocation()

  const selectedRowData = location.state
  console.log(selectedRowData)
  
  const handleFormSubmit = (selectedOptions) => {
    setResponses(selectedOptions);
  }
  // console.log(JSON.stringify(responses, null, 2))
  return (
    <div>
      <StyledGrid container>
        <Grid item xs={3}>
          <ScrollablePaper elevation={3}>
            <CustomerInfoPanel customerInfo={customerInfo} gasMeterInfo={gasMeterInfo} info={selectedRowData}   />
            <DivisionLine />
            <Questionnaire questions={questions} onSubmit={handleFormSubmit} />
          </ScrollablePaper>
        </Grid>
        <Grid item xs={9}>
          <ImageViewer imageId={selectedRowData} />
        </Grid>
      </StyledGrid>
    </div>
  )
}
