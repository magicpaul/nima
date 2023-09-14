import { ComponentType } from 'react';
import HeroSection from '../../../src/components/home/HeroSection';
import FeatureSection from '../../../src/components/home/FeatureSection';

const HomePreview: ComponentType<any> = ({ entry }) => {
  return (
    <>
      <HeroSection
        title_white={entry.getIn(['data', 'hero_title_white'])}
        title_green={entry.getIn(['data', 'hero_title_green'])}
        description={entry.getIn(['data', 'hero_description'])}
        image={entry.getIn(['data', 'hero_image'])}
        cta_text={entry.getIn(['data', 'hero_cta_text'])}
        cta_url={entry.getIn(['data', 'hero_cta_url'])}
      />
      <FeatureSection
        description1={entry.getIn(['data', 'feature_description1'])}
        description2={entry.getIn(['data', 'feature_description2'])}
      />
    </>
  );
};

export default HomePreview;
