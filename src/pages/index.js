import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import HomeSvgAnimation from '../components/HomeSvgAnimation'
import Timeline from '../components/Timeline'
import CountDown from '../components/CountDown'
import Image from '../yosemite.jpeg'
import BackgroundVideo from '../chicago.mp4'
import Background from '../chicago-bg.jpeg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserTie, faIdCard, faGlobeAmericas, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHome);
library.add(faUserTie);
library.add(faIdCard);
library.add(faGlobeAmericas);
library.add(faHandHoldingHeart);


const IndexPage = () => (
  <Layout>
    <div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          height: "100vh",
          backgroundRepeat: "no-repeat center center fixed",
          backgroundSize: 'cover',
        }}
      >

       <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <HomeSvgAnimation />
        <div>
          <div style={{display:'flex', flexDirection:'column', justifyContent: 'space-between'}}>
            <div><CountDown /></div>
            <div><Link to="/page-2/"><button className="btn btn-primary">Go to page 2</button></Link></div>
          </div>
        </div>
        </div>
      </div>

      <div>
        <li className="divider" style={{marginTop: '30pt', marginBottom: '-20px'}} data-content="WELCOME TO MY BLOG - JOIN ME ON MY JOURNEY." />

        <div className="indexInfo" style={{display:'flex', justifyContent:'space-evenly', alignItems: 'center', flexGrow:'1'}}>
          <div className="usa-flag">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512",height: '400px'}} xmlSpace="preserve">
            <g>
              <path style={{fill:"#ABB3B7"}} d="M39.825,181.09c-4.215,0-7.632-3.417-7.632-7.632v-17.3c0-4.215,3.417-7.632,7.632-7.632
                s7.632,3.417,7.632,7.632v17.3C47.457,177.674,44.04,181.09,39.825,181.09z"/>
              <path style={{fill:"#ABB3B7"}} d="M48.475,172.441h-17.3c-4.215,0-7.632-3.417-7.632-7.632s3.417-7.632,7.632-7.632h17.3
                c4.215,0,7.632,3.417,7.632,7.632S52.69,172.441,48.475,172.441z"/>
              <path style={{fill:"#ABB3B7"}} d="M39.825,222.305c-4.215,0-7.632-3.417-7.632-7.632v-17.3c0-4.215,3.417-7.632,7.632-7.632
                s7.632,3.417,7.632,7.632v17.3C47.457,218.888,44.04,222.305,39.825,222.305z"/>
              <path style={{fill:"#ABB3B7"}} d="M48.475,213.655h-17.3c-4.215,0-7.632-3.417-7.632-7.632s3.417-7.632,7.632-7.632h17.3
                c4.215,0,7.632,3.417,7.632,7.632S52.69,213.655,48.475,213.655z"/>
            </g>
            <path style={{fill:"#EF403C"}} d="M153.007,122.184l118.767-0.47c0.656-0.003,1.301,0.177,1.86,0.518l11.89,7.236
              c0.327,0.198,0.683,0.344,1.056,0.428l13.049,2.98c0.285,0.065,0.561,0.165,0.821,0.298l63.068,7.535l44.549,39.202l18.519-13.498
              c0.46-0.408,0.806-0.928,1.005-1.509l6.287-18.391c0.34-0.993,1.101-1.785,2.08-2.163l28.297-10.941
              c1.165-0.451,2.008-1.481,2.219-2.712l4.741-27.608c0.269-1.565,1.544-2.762,3.123-2.931l11.243-1.203
              c1.569-0.168,3.061,0.719,3.661,2.179l5.83,14.158c0.239,0.581,0.629,1.089,1.129,1.47l6.841,5.224
              c1.609,1.228,1.867,3.551,0.568,5.102l-17.925,21.414c-0.566,0.676-0.86,1.538-0.825,2.419l1.006,25.67
              c0.05,1.259-0.572,2.45-1.633,3.13l-18.085,11.582c-0.925,0.592-1.524,1.58-1.622,2.674l-4.03,45.098
              c-0.039,0.434,0.003,0.87,0.122,1.289l4.516,15.858c0.281,0.986,0.122,2.044-0.436,2.904l-28.108,43.372l-11.321,17.469
              l-0.248,0.384l19.722,36.376c0.127,0.235,0.228,0.482,0.299,0.74l8.373,30.062c0.481,1.727-0.4,3.541-2.055,4.231
              c-3.296,1.375-8.278,3.429-8.659,3.457c-0.527,0.038-24.733-21.324-28.547-24.693c-0.336-0.297-0.608-0.65-0.811-1.05l-9.184-18.107
              c-0.623-1.227-1.897-1.984-3.273-1.944l-51.355,1.518c-0.242,0.007-0.482,0.039-0.718,0.095l-10.656,2.538l-23.531,5.605
              l-18.943,4.512c-0.539,0.128-1.04,0.382-1.464,0.738l-27.623,23.256c-0.87,0.733-1.337,1.838-1.255,2.973l1.198,16.594
              c0.141,1.956-1.33,3.656-3.287,3.798l-7.057,0.51c-1.024,0.074-2.03-0.299-2.759-1.023l-37.347-37.101
              c-1.172-1.165-2.994-1.367-4.393-0.486l-9.343,5.875c-1.401,0.881-3.225,0.678-4.397-0.49l-32.5-32.376
              c-0.668-0.665-1.571-1.037-2.513-1.035l-44.152,0.073c-0.394,0.001-0.786-0.064-1.158-0.192l-18.823-6.454l-37.829-12.973
              c-0.651-0.223-1.223-0.631-1.648-1.173l-43.935-56.265c-0.419-0.536-0.675-1.182-0.738-1.86l-2.735-29.685l-4.211-45.706
              c-0.034-0.361-0.011-0.725,0.066-1.079l12.078-55.678c0.357-1.647,1.822-2.815,3.506-2.798l7.263,0.072
              c2.076,0.02,3.728-1.736,3.578-3.807l-0.068-0.948c-0.149-2.052,1.472-3.799,3.528-3.807l80.128-0.159L153.007,122.184z"/>
            <g style={{opacity:"0.2"}}>
              <path d="M118.268,344.95h-0.229c0.226,0.044,0.454,0.073,0.685,0.072h0.256C118.748,344.976,118.509,344.95,118.268,344.95z"/>
              <path d="M503.54,127.116c1.298-1.552,1.041-3.874-0.568-5.102l-6.841-5.224c-0.5-0.382-0.889-0.889-1.129-1.47l-5.83-14.158
                c-0.6-1.459-2.092-2.347-3.661-2.179l-11.242,1.202c-1.579,0.169-2.853,1.366-3.123,2.931l-4.741,27.608
                c-0.212,1.231-1.054,2.261-2.219,2.711l-15.585,6.025l-7.593,9.071c-0.566,0.676-0.86,1.538-0.825,2.419l1.006,25.67
                c0.05,1.259-0.572,2.45-1.633,3.13l-18.085,11.582c-0.925,0.592-1.524,1.58-1.622,2.674l-4.03,45.098
                c-0.039,0.434,0.003,0.87,0.122,1.289l4.516,15.858c0.281,0.986,0.122,2.044-0.436,2.904l-28.108,43.372l-11.321,17.469
                l-0.248,0.384l15.836,29.21l4.637-0.137c1.375-0.041,2.65,0.716,3.273,1.944l9.184,18.107c0.203,0.4,0.474,0.753,0.811,1.05
                c3.814,3.369,28.02,24.731,28.547,24.693c0.381-0.027,5.362-2.083,8.659-3.457c1.655-0.69,2.536-2.503,2.055-4.231l-8.373-30.062
                c-0.071-0.257-0.172-0.505-0.299-0.74l-19.723-36.377l0.248-0.384l11.321-17.469l28.108-43.372c0.558-0.86,0.716-1.918,0.436-2.904
                l-4.516-15.858c-0.119-0.418-0.161-0.856-0.122-1.289l4.03-45.098c0.098-1.095,0.697-2.082,1.622-2.674l18.085-11.582
                c1.061-0.68,1.683-1.87,1.633-3.13l-1.006-25.67c-0.035-0.88,0.26-1.743,0.825-2.419L503.54,127.116z"/>
            </g>
            <g>
              <path style={{fill:"#F2F2F2"}} d="M59.266,324.553c0.423,0.542,0.996,0.95,1.648,1.173l0.244,0.084l366.982,0.424l-3.117-5.639
                l0.178-0.278l11.321-17.469l11.921-18.395H27.954L59.266,324.553z"/>
              <path style={{fill:"#F2F2F2"}} d="M300.38,133.173c-0.261-0.132-0.536-0.233-0.821-0.298l-13.049-2.98
                c-0.372-0.085-0.73-0.23-1.056-0.428l-11.89-7.236c-0.561-0.341-1.205-0.52-1.86-0.518l-118.767,0.47l-75.406,0.299l-39.934,0.159
                c-2.057,0.008-3.677,1.756-3.528,3.807l0.068,0.948c0.15,2.071-1.502,3.827-3.578,3.807l-7.263-0.072
                c-1.684-0.016-3.149,1.152-3.506,2.798l-5.669,26.135h371.394l-21.995-19.355L300.38,133.173z"/>
              <path style={{fill:"#F2F2F2"}} d="M503.54,127.091c1.298-1.552,1.041-3.874-0.568-5.102l-6.841-5.224
                c-0.5-0.382-0.889-0.889-1.129-1.47l-5.83-14.158c-0.6-1.459-2.092-2.347-3.661-2.18l-11.242,1.203
                c-1.579,0.169-2.853,1.366-3.123,2.931l-4.741,27.608c-0.212,1.231-1.054,2.261-2.219,2.711l-28.297,10.941
                c-0.979,0.379-1.74,1.17-2.08,2.164l-6.287,18.391c-0.198,0.582-0.545,1.102-1.005,1.509l-47.527,34.981h1.747H8.633l3.225,34.999
                l0.586,6.357h448.783l-0.679-2.383c-0.119-0.418-0.161-0.856-0.122-1.289l3.367-37.683l0.663-7.414
                c0.098-1.094,0.697-2.082,1.622-2.674l18.085-11.582c1.061-0.68,1.683-1.87,1.633-3.13l-1.006-25.67
                c-0.035-0.88,0.259-1.743,0.825-2.419L503.54,127.091z"/>
            </g>
            <path style={{fill:"#285493"}} d="M181.344,122.112l-28.407,0.113l-75.406,0.298l-39.934,0.159c-2.057,0.008-3.677,1.756-3.528,3.807
              l0.068,0.948c0.15,2.071-1.502,3.827-3.578,3.807l-7.263-0.072c-1.684-0.016-3.149,1.152-3.506,2.799L7.712,189.65
              c-0.077,0.354-0.099,0.718-0.066,1.079l4.211,45.706l0.586,6.357h168.901V122.112z" />
              
            <path d="M511.933,124.319c-0.337-3.018-1.913-5.808-4.327-7.651l-5.963-4.554l-5.411-13.139c-1.88-4.565-6.619-7.39-11.531-6.862
              l-11.243,1.202c-4.948,0.529-8.991,4.324-9.833,9.228l-4.349,25.327l-26.135,10.105c-3.094,1.194-5.482,3.679-6.553,6.814
              l-5.862,17.146l-12.279,8.949l-39.955-35.16c-1.16-1.021-2.602-1.666-4.137-1.848l-62.103-7.421
              c-0.327-0.107-0.657-0.198-0.993-0.276l-12.402-2.831l-11.326-6.893c-1.753-1.065-3.762-1.629-5.814-1.629c-0.014,0-0.029,0-0.043,0
              l-90.329,0.358l0,0l0,0l-28.438,0.113c-4.215,0.017-7.618,3.448-7.602,7.663c0.016,4.215,3.471,7.573,7.663,7.602l20.745-0.082
              v105.383H31.175h-11.77l-4.101-44.504l11.241-51.816l3.939,0.039c3.098,0.045,6.126-1.253,8.26-3.523
              c1.34-1.426,2.271-3.174,2.723-5.046l76.274-0.151c4.215-0.008,7.626-3.432,7.617-7.648c-0.008-4.211-3.423-7.617-7.632-7.617
              c-0.005,0-0.01,0-0.015,0l-80.145,0.158c-3.086,0.013-6.06,1.318-8.158,3.583c-1.3,1.402-2.206,3.112-2.656,4.942l-3.379-0.034
              c-0.038,0-0.074,0-0.112,0c-5.232,0-9.817,3.69-10.929,8.813L0.255,188.733c-0.242,1.113-0.312,2.254-0.209,3.4l4.523,49.091
              c-0.224,0.717-0.344,1.481-0.344,2.272c0,1.284,0.321,2.492,0.881,3.555l1.886,20.471c0.196,2.141,0.999,4.168,2.322,5.861
              l43.935,56.266c0.911,1.166,2.045,2.112,3.317,2.83c0.859,0.596,1.846,1.02,2.912,1.222l55.611,19.072
              c1.17,0.401,2.39,0.604,3.63,0.604c0.005,0,0.01,0,0.014,0l42.463-0.07l31.305,31.184c3.713,3.699,9.407,4.333,13.845,1.543
              l6.596-4.148l35.046,34.815c2.103,2.089,4.939,3.249,7.88,3.249c0.269,0,0.537-0.01,0.807-0.029l7.056-0.51
              c2.98-0.215,5.698-1.577,7.653-3.836s2.914-5.145,2.698-8.124l-1.048-14.519l25.29-21.292l51.78-12.335l48.35-1.429l8.01,15.792
              c0.641,1.268,1.505,2.385,2.566,3.324c1.911,1.688,8.931,7.885,15.539,13.654c15.102,13.186,15.103,13.188,18.607,12.932
              c1.396-0.101,1.687-0.121,11.048-4.026c5.2-2.168,7.982-7.896,6.47-13.324l-8.373-30.062c-0.226-0.809-0.542-1.593-0.942-2.33
              l-16.945-31.254c-0.005-0.009-0.01-0.019-0.015-0.029l-0.601-1.11l37.214-57.422c1.754-2.709,2.253-6.042,1.369-9.143l-4.309-15.129
              l3.785-42.351l16.401-10.503c3.326-2.131,5.297-5.907,5.142-9.856l-0.945-24.098l16.916-20.208
              C511.343,130.405,512.268,127.338,511.933,124.319z M270.581,130.096l10.904,6.637c1.032,0.628,2.151,1.083,3.327,1.35l12.65,2.888
              c0.643,0.266,1.32,0.444,2.014,0.526l60.712,7.254l5.031,4.428H188.977v-22.759L270.581,130.096z M188.977,209.773h266.472
              l-2.331,26.091H188.977V209.773z M43.598,292.484h390.804l-15.605,24.08l0,0c0,0,0,0.001-0.001,0.001l-0.248,0.384
              c-0.333,0.514-0.586,1.062-0.784,1.625H63.971L43.598,292.484z M261.613,382.596c-2.732,2.3-4.209,5.799-3.951,9.361l0.905,12.524
              l-1.135,0.082l-29.588-29.393h42.591L261.613,382.596z M445.024,386.843c-0.372,0.154-0.715,0.294-1.031,0.422
              c-4.465-3.799-13.434-11.628-24.264-21.192l-8.832-17.413c-1.951-3.844-5.977-6.243-10.304-6.118l-51.349,1.517
              c-0.763,0.021-1.526,0.123-2.267,0.299l-53.127,12.655c-1.689,0.402-3.285,1.205-4.615,2.324l-0.671,0.565h-99.114L170.776,341.3
              c-2.111-2.104-4.914-3.264-7.896-3.264c-0.006,0-0.012,0-0.018,0l-43.467,0.072l-12.455-4.271h316.237l14.566,26.868
              L445.024,386.843z M444.294,277.219H31.679l-9.595-12.288l-1.272-13.803h10.364h150.168h274.121l1.751,6.151L444.294,277.219z
              M479.762,144.353c-1.784,2.132-2.707,4.836-2.598,7.616l0.915,23.334l-16.118,10.322c-2.892,1.852-4.8,5.001-5.107,8.422
              l-0.042,0.462H188.977v-26.065h193.589l20.39,17.944c2.685,2.362,6.649,2.544,9.537,0.439l18.519-13.498
              c0.196-0.143,0.386-0.296,0.568-0.457c1.446-1.282,2.54-2.926,3.164-4.751l5.671-16.591l26.524-10.255
              c3.649-1.411,6.328-4.684,6.988-8.538l4.219-24.57l5.134-0.549l4.666,11.33c0.753,1.829,1.982,3.429,3.554,4.629l3.449,2.634
              L479.762,144.353z"/>
            <path d="M48.475,157.176h-1.018v-1.018c0-4.215-3.417-7.632-7.632-7.632s-7.632,3.417-7.632,7.632v1.018h-1.018
              c-4.215,0-7.632,3.417-7.632,7.632s3.417,7.632,7.632,7.632h1.018v1.018c0,4.215,3.417,7.632,7.632,7.632s7.632-3.417,7.632-7.632
              v-1.018h1.018c4.215,0,7.632-3.417,7.632-7.632S52.69,157.176,48.475,157.176z"/>
            <path d="M86.179,157.176h-1.018v-1.018c0-4.215-3.417-7.632-7.632-7.632c-4.215,0-7.632,3.417-7.632,7.632v1.018h-1.018
              c-4.215,0-7.632,3.417-7.632,7.632s3.417,7.632,7.632,7.632h1.018v1.018c0,4.215,3.417,7.632,7.632,7.632
              c4.215,0,7.632-3.417,7.632-7.632v-1.018h1.018c4.215,0,7.632-3.417,7.632-7.632S90.394,157.176,86.179,157.176z"/>
            <path d="M122.864,157.176v-1.018c0-4.215-3.417-7.632-7.632-7.632s-7.632,3.417-7.632,7.632v1.018h-1.018
              c-4.215,0-7.632,3.417-7.632,7.632s3.417,7.632,7.632,7.632h1.018v1.018c0,4.215,3.417,7.632,7.632,7.632s7.632-3.417,7.632-7.632
              v-1.018h1.018c4.215,0,7.632-3.417,7.632-7.632s-3.417-7.632-7.632-7.632H122.864z"/>
            <path d="M144.285,172.441h1.018v1.018c0,4.215,3.417,7.632,7.632,7.632c4.215,0,7.632-3.417,7.632-7.632v-1.018h1.018
              c4.215,0,7.632-3.417,7.632-7.632s-3.417-7.632-7.632-7.632h-1.018v-1.018c0-4.215-3.417-7.632-7.632-7.632
              c-4.215,0-7.632,3.417-7.632,7.632v1.018h-1.018c-4.215,0-7.632,3.417-7.632,7.632S140.07,172.441,144.285,172.441z"/>
            <path d="M39.825,222.305c4.215,0,7.632-3.417,7.632-7.632v-1.018h1.018c4.215,0,7.632-3.417,7.632-7.632s-3.417-7.632-7.632-7.632
              h-1.018v-1.018c0-4.215-3.417-7.632-7.632-7.632s-7.632,3.417-7.632,7.632v1.018h-1.018c-4.215,0-7.632,3.417-7.632,7.632
              s3.417,7.632,7.632,7.632h1.018v1.018C32.193,218.888,35.61,222.305,39.825,222.305z"/>
            <path d="M77.529,222.305c4.215,0,7.632-3.417,7.632-7.632v-1.018h1.018c4.215,0,7.632-3.417,7.632-7.632s-3.417-7.632-7.632-7.632
              h-1.018v-1.018c0-4.215-3.417-7.632-7.632-7.632c-4.215,0-7.632,3.417-7.632,7.632v1.018h-1.018c-4.215,0-7.632,3.417-7.632,7.632
              s3.417,7.632,7.632,7.632h1.018v1.018C69.897,218.888,73.314,222.305,77.529,222.305z"/>
            <path d="M115.232,222.305c4.215,0,7.632-3.417,7.632-7.632v-1.018h1.018c4.215,0,7.632-3.417,7.632-7.632s-3.417-7.632-7.632-7.632
              h-1.018v-1.018c0-4.215-3.417-7.632-7.632-7.632s-7.632,3.417-7.632,7.632v1.018h-1.018c-4.215,0-7.632,3.417-7.632,7.632
              s3.417,7.632,7.632,7.632h1.018v1.018C107.599,218.888,111.017,222.305,115.232,222.305z"/>
            <path d="M144.285,213.655h1.018v1.018c0,4.215,3.417,7.632,7.632,7.632c4.215,0,7.632-3.417,7.632-7.632v-1.018h1.018
              c4.215,0,7.632-3.417,7.632-7.632s-3.417-7.632-7.632-7.632h-1.018v-1.018c0-4.215-3.417-7.632-7.632-7.632
              c-4.215,0-7.632,3.417-7.632,7.632v1.018h-1.018c-4.215,0-7.632,3.417-7.632,7.632S140.07,213.655,144.285,213.655z"/>  
            </svg>
          </div>
          <div className="infoText" style={{alignContent: 'center', padding: '10pt', backgroundColor: 'whitesmoke', opacity: '1', width:'600px', borderRadius: '5pt' }}>
            <div>Info-Text</div>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>  
        
      </div>

      {/* <div style={{display:'flex', justifyContent: 'center', alignContent: 'center', marginTop: '15pt'}}><FontAwesomeIcon icon="hand-holding-heart" size="5x" /></div> */}
      <Timeline />
      {/* <video className='videoTag' autoPlay loop muted>
          <source src={BackgroundVideo} type='video/mp4' />
      </video> */}
    </div>    
  </Layout>
)

export default IndexPage
