import { SanityContentSource } from '@stackbit/cms-sanity';
import * as path from 'path';

export default {
    stackbitVersion: '0.5.0',
    ssgName: 'nextjs',
    buildCommand: 'npm run build',
    publishDir: 'out',
    nodeVersion: '14',
    mapModels: ({ models, contentSourceType, contentSourceProjectId }) => {
        console.log('XXXXXX - IN MAP MODELS')
        return models.map(model => {
            const isPageModel = ['page', 'landing'].includes(model.name);
            model = {
                ...model,
                ...(isPageModel ? { type: 'page' } : {}),
                urlPath: '/{slug}',
                labelField: 'title'
            };
            return model;
        });
    },

    contentSources: [
        new SanityContentSource({
            rootPath: __dirname,
            studioPath: path.join(__dirname, 'studio'),
            studioUrl: 'https://google.com',
            projectId: process.env.SANITY_PROJECT_ID!,
            token: process.env.SANITY_ACCESS_TOKEN!,
            dataset: process.env.SANITY_DATASET || 'production'
        })
    ]
};
