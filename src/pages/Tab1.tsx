import React from 'react';
import { IonAvatar, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import water from '../media/icon.png';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className='water-bg'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid ion-no-padding className='pt-3 bg-info'>
          <IonRow>
            <IonCol>
              <div className='center-content'>
                <IonAvatar>
                  <img src={water} alt="User Imge" />
                </IonAvatar>
              </div>
            </IonCol>
          </IonRow>
          <IonRow style={{
            position: 'relative',
            top: '-20px',
          }}>
            <IonCol>
              <div className="center-content text-light pb-2">
                <IonText>
                  <h6>Account Number</h6>
                </IonText>
                <IonText>
                  <h4>2024001A</h4>
                </IonText>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="card-shadow">
          <IonRow>
            <IonCol>
              <div className="iframe-cont">
                <iframe
                  src="http://192.168.127.60:3000/"
                  style={{ width: '100%', height: '500px', border: 'none' }}
                  title="Example Iframe"
                ></iframe>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
