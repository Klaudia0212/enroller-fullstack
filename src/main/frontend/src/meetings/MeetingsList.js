export default function MeetingsList({ meetings, onDelete, onJoin }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Zapis</th>
                <th>Usuwanie</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting) => (
                    <tr key={meeting.id}>
                        <td>{meeting.title}</td>
                        <td>{meeting.description}</td>
                        <td>
                            <button onClick={() => onJoin(meeting)}>
                                Zapisz się
                            </button>
                        </td>
                        <td>
                            <button onClick={() => onJoin(meeting)}>
                                  Wypisz się
                            </button>
                            </td>
                        <td>
                            <button onClick={() => onDelete(meeting)}>
                                Usuń Puste Spotkanie
                            </button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}
