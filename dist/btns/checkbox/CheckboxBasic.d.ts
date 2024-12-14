import React from 'react';

interface CheckBoxBasicProps {
    text: string;
    onClick: () => void;
}
declare const CheckBoxBasic: React.FC<CheckBoxBasicProps>;

export { CheckBoxBasic as default };
