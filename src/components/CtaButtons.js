import { toFieldPath } from '@stackbit/annotations';
import { classNames } from '../utils';
import Action from './Action';

const CtaButtons = (props) => {
    const { actions, ...rest } = props;

    if (!actions) {
        return null;
    }

    return (
        <p className="block-buttons" {...rest}>
            {actions.map((action, actionIdx) => (
                <Action
                    key={actionIdx}
                    action={action}
                    className={classNames('button', { 'secondary': !action.primary })}
                    {...toFieldPath(`.${actionIdx} .${actionIdx}.label`)}
                />
            ))}
        </p>
    );
}

export default CtaButtons;
