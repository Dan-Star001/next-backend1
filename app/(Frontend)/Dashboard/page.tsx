"use client"

import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  _id: string;
  name: string;
  age: number;
  email: string;
};

export default function DashboardPage() {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        axios.get("/api/person")
        .then((res) => {
            const data: User[] = res.data;
            console.log(data);
            setUsers(data);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);

    return (
        <>
            {users.map((user) => (
                <div key={user._id}>
                    <h1>{user.name}</h1>
                    <p>Age: {user.age}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </>
    )

}