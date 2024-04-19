import './Toast.css';

const Toast = ({ dataToast }) => {
    const { message, bgColor } = dataToast;
    return <div className="toast" style={{ backgroundColor: bgColor }}>{message}</div>
}

export { Toast }