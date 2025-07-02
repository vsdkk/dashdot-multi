import React, { useState, useEffect } from "react"
import axios from "axios";

const Dashboard = () => {
    const [servers, setServers] = useState([]);
    const [activeServer, setActiveServer] = useState(0);

    useEffect(() => {
        axios.get("/servers").then((response) => setServers(response.data));
    }, []);

    return (
        <div>
            <h1>Multi-Server Dashdot</h1>
            <nav>
                {servers.map((server, index) => (
                    <button key={index} onClick={() => setActiveServer(index)}>
                        {server.name}
                    </button>
                ))}
            </nav>
            {servers[activeServer] ? (
                <div>
                    <h2>{servers[activeServer].name}</h2>
                    {servers[activeServer].error ? (
                        <p>{servers[activeServer].error}</p>
                    ) : (
                        <pre>{JSON.stringify(servers[activeServer].data, null, 2)}</pre>
                    )}
                </div>
            ) : (
                <p>Загрузка данных...</p>
            )}
        </div>
    );
};

export default Dashboard;
