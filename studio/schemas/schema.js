// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import action from './action';
import landing from './landing';
import section_content from './section_content';
import section_cta from './section_cta';
import section_features from './section_features';
import feature_item from './feature_item';
import section_hero from './section_hero';
import site_config from './site_config';
import header from './header';
import footer from './footer';
import page from './page';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'stackbit-sanity-starter',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    landing,
    page,
    action,
    section_content,
    section_cta,
    section_features,
    feature_item,
    section_hero,
    site_config,
    header,
    footer
  ])
});
