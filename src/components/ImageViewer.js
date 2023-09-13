import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { Paper } from '@mui/material'
import styled from '@emotion/styled'
import { itemData } from './../utils/data'
import './../App.css'

const ScrollablePaper = styled(Paper)`
  padding: 16px;
`

export default function StandardImageList(props) {
  console.log(props.imageId.id)
  const filteredImage = itemData.filter((item) => item.id === props.imageId.id);
  return (
    <ScrollablePaper elevation={3} >
        <ImageList sx={{ width: '100%', height: '100vh' }} cols={3} rowHeight={350} gap={10}>
        {filteredImage.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              className="resizable-image"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </ScrollablePaper>
  )
}