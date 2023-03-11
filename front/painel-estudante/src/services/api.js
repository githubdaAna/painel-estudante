import axios from 'axios';
import { getItem } from '../utils/storage';
const token = getItem('token');

export default axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    }
})