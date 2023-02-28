import React from 'react'
import { Typography, Card } from '@mui/material'


type RaceProps = {
  slug: string;
  name: string;
  desc: string;
  age: string;
  alignment: string;
  size: string;
  speed_desc: string;
  languages: string;
  vision: string;
  traits: string;
}

const Racecards = ({slug, name, desc, age, alignment, size, speed_desc, languages, vision, traits}: RaceProps) => {

  return (
    <Card sx={{margin: '50px'}}>
      <Typography variant="h1">{name}</Typography>
      <Typography variant="overline">{desc}</Typography>
      <Typography variant="h3">Age</Typography>
      <Typography variant='body1'>{age}</Typography>
      <Typography variant="h3">Alignment</Typography>
      <Typography variant='body2'>{alignment}</Typography>
      <Typography variant="h3">Size</Typography>
      <Typography variant='caption'>{size}</Typography>
      <Typography variant='body2'>{speed_desc}</Typography>
      <Typography variant='body1'>{languages}</Typography>
      <Typography variant='subtitle2'>{vision}</Typography>
      <Typography variant='subtitle1'>{traits}</Typography>

    </Card>
  )
}

export default Racecards