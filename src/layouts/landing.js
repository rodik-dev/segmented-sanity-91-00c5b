import _ from 'lodash';

import components, { Layout } from '../components';

const Landing = (props) => {
    const { page: { sections } } = props;

    return (
        <Layout {...props}>
            {sections?.map((section, section_idx) => {
                const component = _.upperFirst(_.camelCase(section._type));
                const Component = components[component];

                return (
                    <Component key={section_idx} {...props} section={section} annotationPrefix={`sections.${section_idx}`} />
                )
            })}
        </Layout>
    );
}

export default Landing;