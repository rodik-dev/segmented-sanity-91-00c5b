import { Document } from '@stackbit/types';
import SanityContentSource from '@stackbit/cms-sanity';

export default {
  stackbitVersion: '0.5.0',
  ssgName: 'next',
  buildCommand: 'npm run build',

  // ... other props ...

  // The siteMap is also a new function that will provide a simpler way
  // for developers to specify all website pages and their respective
  // documents. Using environment variables like SEGMENT,
  // developers will be able to specify which pages are available
  // for each segment
//   siteMap: ({ documents, models }) => {
//       // return sitemap using documents and models based on process.env.SEGMENT
//   },

//   mapModels: ({ models, contentSourceType, contentSourceProjectId }) => {
//     // adjust models based on process.env.SEGMENT
//     return models.map((model) => {
//       if (process.env.SEGMENT === 'marketing' && model.name === 'MarketingPage') {
//         model = {
//           ...model,
//           hidden: true,
//           // OR
//           // readOnly: true
//         }
//       }
      
//       return model;
//     });
//   },

  // contentSources list objects that implement the CSI
  contentSources: [
    new SanityContentSource({
      spaceId: process.env.SANITY_PROJECT_ID,
      accessToken: process.env.SANITY_ACCESS_TOKEN,
      dataset: process.env.SANITY_DATASET,
    })
  ],

  // additional hook functions that customize
  // the behavior of the ContentSources
  // according to the provided segment
  // this function is called by our internal cms
  // engine every time a document is created or updated
//   mapDocuments: (documents: Document[]) {

//     // if we are not in a segment, don't map documents
//     if (!process.env.SEGMENT) {
//       return documents;
//     }

//     // if we are in a segment, mark any documents
//     // that are not part of this segment as readOnly
//     return documents.map((document) => {
//       // if a document's slug doesn't start with
//       // SEGMENT_URL, mark the document as readOnly
//       // so the studio will not allow editing it
//       if (document.fields.slug.startsWith(`/${process.env.SEGMENT}/`))
//         return { ...document, readOnly: true };
//       }
//       return document;
//     });
//   }
}