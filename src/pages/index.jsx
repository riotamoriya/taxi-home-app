import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import { Container } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { LocalStorageCRUD } from '../helpers/localStorage';

import * as styles from './index.module.scss';


// This key can be used in only my site
// const GATSBY_GMAPS_API_KEY="AIzaSyAHBXoMvGeglvuefGCDrm_GFjqj3XGS1EA";
const GATSBY_GMAPS_API_KEY="AIzaSyDrz8ohQMq_IDMFWSUbSEqTOiHrZuuu7Ns";



// console.log(GATSBY_GMAPS_API_KEY);

const App = ({
  googleMapsApiKey,
  homeAddress,
  homeAddressLat,
  homeAddressLng,

}) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [directions, setDirections] = useState(null);

  const homeAddressPosition = { lat: parseFloat(homeAddressLat), lng: parseFloat(homeAddressLng) };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        // 現在地が設定された後に経路情報を取得
        setTimeout(() => {
          setDirections({
            origin: currentPosition,
            destination: homeAddressPosition,
            travelMode: 'DRIVING'
          });
        }, 2500);
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );
  }, []);
  

  return (
    <Container>
      <h2>【自動車】帰宅経路</h2>
      <h5>運転者様へ</h5>
      <p>
        私の住所及び現在地からの経路は以下の通りです。<br/>
        この度は運転をどうぞよろしくお願いいたします。<br/>
      </p>
      <u>住所: {homeAddress}</u>
      
      {currentPosition && (
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap center={currentPosition} zoom={14} mapContainerStyle={{ width: '100vw', height: '40vh' }}>
            <Marker position={currentPosition} title="現在地" />
            <Marker position={homeAddressPosition} title="目的地" />

            {directions && (
              <DirectionsService
                options={{
                  origin: currentPosition,
                  destination: homeAddressPosition,
                  travelMode: 'DRIVING'
                }}
                callback={(res) => {
                  if (res.status === 'OK') {
                    setDirections(res);
                  } else {
                    console.error('Directions request failed:', res.status);
                  }
                }}

              />
            )}
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </LoadScript>
      )}
      
    </Container>
  );
}



const IndexPage = () => {
  const [homeAddress, setHomeAddress] = useState('');
  const [homeAddress_XY, setHomeAddress_XY] = useState(['0','0']);


  useEffect(() => {
      const setAddress = async () => {
        const storage = await new LocalStorageCRUD();
        const address_data = await JSON.parse(storage.getItem());

        await setHomeAddress(address_data.field1);
        await setHomeAddress_XY([address_data.field2, address_data.field3]);
        // await setHomeAddress_XY([0, 0]);

    }

    setAddress();

    }, []);

  return (
    <Layout>
      <main className={styles.main}>
        <Link to='/setting' className={styles.setting}/>
        <App
          googleMapsApiKey = {GATSBY_GMAPS_API_KEY}
          homeAddress = {homeAddress}
          homeAddressLat = {homeAddress_XY[0]}
          homeAddressLng = {homeAddress_XY[1]}
        />
      </main>
    </Layout>
  )
}





export const Head = () => <Seo />

export default IndexPage