import Action from './Action';

const FooterLinks = ({ links }) => {
    return (
        <ul className="secondary-nav">
            {links.map((action, actionIdx) => (
                <li key={actionIdx}>
                    <Action action={action} />
                </li>
            ))}
        </ul>
    );
}

export default FooterLinks;
