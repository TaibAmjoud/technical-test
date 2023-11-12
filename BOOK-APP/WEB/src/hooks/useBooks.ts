import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'


export interface Book {
    id: number;
    title: string;
    author: string;
    image: string;
    note: string;
}


const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();


        setLoading(true);
        apiClient.get<Book[]>('/books', { signal: controller.signal })
            .then(res => {
                setBooks(res.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError ) return;
                setError(err.message);
                setLoading(false);
            });
        
        return () => controller.abort();

    }, []);

    return {books, error, isLoading };
}


export default useBooks