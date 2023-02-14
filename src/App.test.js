import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('Renders information about project', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    const AboutTitle = screen.getByText(/Сервис по показу Бенгальских кошечек/i);
    const AboutSubTitle = screen.getByText(/Для Альфа-Банка/i);
    const AboutCity = screen.getByText(/г. Санкт-Петербург/i);
    expect(AboutTitle).toBeInTheDocument();
    expect(AboutSubTitle).toBeInTheDocument();
    expect(AboutCity).toBeInTheDocument();
});




