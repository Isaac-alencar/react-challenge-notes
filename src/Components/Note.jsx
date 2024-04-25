import './Note.css';

const Note = ({ title, description, onClick }) => {
    return (
        <div className="note">
            <div className='box-btn-close' onClick={onClick}>
                <img src='/btnClose.svg' />
            </div>
            <h2>{title}</h2>
            <div className='box-content'>
                <p>{description}</p>
            </div>
        </div>
    )
}

export { Note }