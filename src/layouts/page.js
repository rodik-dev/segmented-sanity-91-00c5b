import { toFieldPath } from '@stackbit/annotations';
import { Layout } from '../components';
import { markdownify } from '../utils';

const Page = (props) => {
    const { page: { title, image, subtitle, content } } = props;

    return (
        <Layout {...props}>
            <div className="outer">
                <div className="inner-medium">
                    <article className="post">
                        <header className="post-header">
                            <h1 className="post-title" {...toFieldPath('title')}>{title}</h1>
                        </header>
                        {image && (
                            <div className="post-thumbnail" {...toFieldPath('image')}>
                                <img src={image} alt={title} />
                            </div>
                        )}
                        {subtitle && (
                            <div className="post-subtitle" {...toFieldPath('subtitle')}>
                                {subtitle}
                            </div>
                        )}
                        {content && (
                            <div className="post-content" {...toFieldPath('content')}>
                                {markdownify(content)}
                            </div>
                        )}
                    </article>
                </div>
            </div>
        </Layout>
    );
}

export default Page;