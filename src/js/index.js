//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import Layout from './layout.jsx';
/*import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTw from '@fortawesome/fontawesome-free-brands/faTwitter';
import faFa from '@fortawesome/fontawesome-free-brands/faFacebook';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';*/


//render your react application
ReactDOM.render(
    <Layout />,
    document.querySelector('#app')
);