const saveNote = async note => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        };

        const response = await fetch('http://localhost:3000/notes', options);

        if(!response.ok) {
            throw new Error('Erro ao tentar adicionar a nota!');
        }

        const data = await response.json();
        return data;

    } catch(error) {
        throw new Error(error);
    }
}

export { saveNote }