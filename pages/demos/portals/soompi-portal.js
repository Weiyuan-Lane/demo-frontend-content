import Head from 'next/head';
import IFrame from '@helpers/IFrame';
import '@styles/demo/portals/portals.scss';

let portal = null;

const renderPortal = () => {
  if (document && !portal) {
    portal = document.createElement('portal');
    portal.src = `./wikipedia-portal`;
    
    portal.classList.add('portal-transition');
    
    portal.addEventListener('click', () => {
      portal.classList.add('portal-reveal');
    });
    
    portal.addEventListener('transitionend', evt => {
      if (evt.propertyName === 'bottom') {
        portal.activate();
      }
    });

    document.body.append(portal);
    portal.addEventListener('load', () => {
      portal.classList.add('portal-fade-in');
    }, true);
  }
}

const removePortal = () => {
  if (portal) {
    portal.addEventListener('transitionend', _ => {
      document.body.removeChild(portal);
      portal = null;
    });
    portal.classList.remove('portal-fade-in');
  }
}

export default function SoompiPortal() {

  return (
    <React.Fragment>
      <Head>
        <title>Soompi.com portal vs iframe</title>
      </Head>
      <button className='btn' onClick={renderPortal}>Portal to Wikipedia.org</button>
      <button className='btn btn-danger' onClick={removePortal}>Remove Portal</button>
      <IFrame 
        src='https://www.soompi.com'
        className=''
        showSource={true} />
    </React.Fragment>
  );
};
