import { toFieldPath } from '@stackbit/annotations';
import { markdownify } from '../../utils';
import CtaButtons from '../CtaButtons';

const ContentSection = (props) => {
    const { section: { section_id, background, image, title, content, actions }, annotationPrefix } = props;

    return (
        <section id={section_id} className={`block text-block bg-${background} outer`} {...toFieldPath(annotationPrefix)}>
            <div className="inner">
                <div className="grid">
                    {image &&
                        <div className="cell block-preview">
                            <img src={image} alt={title} {...toFieldPath('.image')} />
                        </div>
                    }
                    <div className="cell block-content">
                        {title &&
                            <h2 className="block-title underline" {...toFieldPath('.title')}>{title}</h2>
                        }
                        <div className="block-copy" {...toFieldPath('.content')}>
                            {markdownify(content)}
                        </div>
                        <CtaButtons actions={actions} {...toFieldPath('.actions')} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentSection;
