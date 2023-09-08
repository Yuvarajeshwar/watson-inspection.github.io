import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { Paper } from '@mui/material'
import styled from '@emotion/styled'
import { itemData } from './../utils/data'

const ScrollablePaper = styled(Paper)`
  padding: 16px;
`

export default function StandardImageList() {
  return (
    <ScrollablePaper elevation={3}>
        <ImageList sx={{ width: '100%', height: '100vh' }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </ScrollablePaper>
  )
}
