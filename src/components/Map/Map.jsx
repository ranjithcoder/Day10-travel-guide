import React from 'react'
import {Paper,Typography,useMediaQuery} from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import useStyles from './Styles'

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = {lat:0,lng:0};

    return (
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKey={{ key: 'AIzaSyAyA97WHQAuUugkf_3HhhH5UGu9JzNAS-E' }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={''}
          onChildClick={''}
        ></GoogleMapReact>
      </div>
    )
}

export default Map
