import React, {useEffect, useState} from 'react';
import style from './ticket.module.css';

const Ticket = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(response => setState(response))
    }, [])


    return (
        state.map(item => (
            <div className={style.page}>
                <div>
                    <h1 className={style.title}>Tickets</h1>
                </div>
                <div className={style.container}>
                    <table className={style.table}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>def@somemail.com</td>
                        </tr>
                        <tr className={style.success}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr className={style.danger}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr className={style.info}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>july@example.com</td>
                        </tr>
                        <tr className={style.warning}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>bo@example.com</td>
                        </tr>
                        <tr className={style.active}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>act@example.com</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ))
    );
};

export default Ticket;