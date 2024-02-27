import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Map Tiles',
    Svg: require('@site/static/img/map-tiles.svg').default,
    URL: 'docs/map-tiles/',
    description: (
      <>
        Vector and raster maps with GL styles. Server-side rendering by MapLibre GL Native.
        Map tile server for MapLibre GL JS, Android, iOS, Leaflet, OpenLayers, GIS via WMTS, etc.
      </>
    ),
  },
  {
    title: 'Routing Engine',
    Svg: require('@site/static/img/routing.svg').default,
    URL: 'docs/routing/',
    description: (
      <>
        Routing engine and accompanying libraries includes tools like tour optimization 
        (Travelling Salesman) and isochrones
      </>
    ),
  },
  {
    title: 'Places',
    Svg: require('@site/static/img/geocode.svg').default,
    URL: 'docs/places/',
    description: (
      <>
        Search engine for places. It turns addresses and place names into geographic coordinates, 
        and turns geographic coordinates into places and addresses.
      </>
    ),
  },
];

function Feature({Svg, URL, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={URL}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <a href={URL}>  
          <Heading as="h3">{title}</Heading>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
