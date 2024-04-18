import './Note.css';

const Note = ({ id, title, description }) => {
    return (
        <div className="note" id={id}>
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