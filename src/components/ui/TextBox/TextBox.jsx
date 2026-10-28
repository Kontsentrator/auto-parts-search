import './TextBox.css';

function TextBox({ value, onChange, ...props }) {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <input
            className="form-control"
            value={value}
            onChange={handleChange}
            {...props}
        />
    )
}

export default TextBox;
