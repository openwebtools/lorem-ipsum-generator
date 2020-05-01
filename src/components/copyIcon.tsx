import Icon from '@ant-design/icons';

const CopySvg = () => (
    <svg width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
    </svg>
  );

const CopyIcon = props => <Icon component={CopySvg} {...props} />;

export default CopyIcon;
