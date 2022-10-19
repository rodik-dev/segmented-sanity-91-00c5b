import { toFieldPath } from '@stackbit/annotations';
import Action from '../Action';

const CtaSection = (props) => {
    const { section: { section_id, title, subtitle, actions }, annotationPrefix } = props;

    return (
        <section id={section_id} className="block cta-block bg-accent outer" {...toFieldPath(annotationPrefix)}>
            <div className="inner-large">
                <div className="grid">
                    <div className="cell block-content">
                        {title &&
                            <h2 className="block-title" {...toFieldPath('.title')}>{title}</h2>
                        }
                        {subtitle &&
                            <p className="block-subtitle" {...toFieldPath('.subtitle')}>{subtitle}</p>
                        }
                    </div>
                    {actions &&
                        <div className="cell block-buttons" {...toFieldPath('.actions')}>
                            {actions.map((action, actionIdx) => (
                                <Action key={actionIdx} action={action} className="button white large" {...toFieldPath(`.${actionIdx} .${actionIdx}.label`)} />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default CtaSection;
