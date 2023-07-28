import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './basic.module.css'


export default function BasicCard({parent, children}) {
  return (
    <Card sx={{ minWidth: 275, borderRadius: 5 }} my-5 px-5 className={styles.basiccard_container}>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign="center" gutterBottom>
          <h2 sx={{fontWeight: 'bolder'}}>{parent}</h2>
        </Typography>
        <Typography variant="body2" textAlign="center">
        {children}
        </Typography>
      </CardContent>
    </Card>
  );
}