import React from 'react';
import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const Field = (props) => {
    return <FieldLayout {...props} />;
};

Field.propTypes = {
    props: PropTypes.object,
};
