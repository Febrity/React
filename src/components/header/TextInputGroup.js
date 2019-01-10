import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

const TextInputGroup = ({
                            label,
                            name,
                            type,
                            placeholder,
                            defaultValue,
                            onChange,
                            errors
                        }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className={classnames('form-control form-control-lg',
                {'is-invalid': errors})}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}/>
            {errors && <div className="invalid-feedback">{errors}</div>}
        </div>
    )
};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    defaultValue: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.string.isRequired
};

TextInputGroup.defaultProps = {
    type: 'text'
};

export default TextInputGroup;
