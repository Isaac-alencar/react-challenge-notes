import './Note.css';

const Note = ({ title, description }) => {
    return (
        <div className="note">
            <div className='box-btn-close'>
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