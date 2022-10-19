import { toFieldPath } from '@stackbit/annotations';
import { markdownify } from '../../utils';
import CtaButtons from '../CtaButtons';

const FeaturesSection = (props) => {
    const { section: { section_id, background, title, subtitle, features } , annotationPrefix } = props;

    return (
        <section id={section_id} className={`block features-block bg-${background} outer`} {...toFieldPath(annotationPrefix)}>
            <div className="block-header inner-small">
                {title &&
                    <h2 className="block-title" {...toFieldPath('.title')}>{title}</h2>
                }
                {subtitle &&
                    <p className="block-subtitle"  {...toFieldPath('.subtitle')}>
                        {subtitle}
                    </p>
                }
            </div>
            {features &&
                <div className="inner">
                    {features.map((feature, featureIndex) => {
                        const { image, title, content, actions } = feature;

                        return (
                            <div key={featureIndex} className="block-item" {...toFieldPath(`.features.${featureIndex}`)}>
                                <div className="grid">
                                    {image &&
                                        <div className="cell block-preview">
                                            <img src={image} alt={title} {...toFieldPath('.image')}/>
                                        </div>
                                    }
                                    <div className="cell block-content">
                                        <h3 className="block-title underline"  {...toFieldPath('.title')}>{title}</h3>
                                        <div className="block-copy" {...toFieldPath('.content')}>
                                            {markdownify(content)}
                                        </div>
                                        <CtaButtons actions={actions} {...toFieldPath('.actions')} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </section>
    );
}

export default FeaturesSection;
