"use client";

import { useEffect, useState } from "react";


type Profile = {
id: number
name: string;
age: number;
email: string;
};


export default function ProfilePage() {

    const [profile, setProfile] = useState<Profile[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
    async function fetchProfile() {
    try {
    const response = await fetch("/api/person");
        const data: Profile[] = await response.json();

        setProfile(data);
    } catch {
        setError("Unable to load profile.");
    } 
    }

    fetchProfile();
    }, []);

    if (error) {
    return <p>{error}</p>;
    }

    return (
        <>
            <main>
                <h1>My profile</h1>
                {profile.map((profile) => (
                    <div key={profile.id}>
                        <h2>{profile.name}</h2>
                        <h2>{profile.age}</h2>
                        <p>Email: {profile.email}</p>
                    </div>
                ))}
            </main>

        </>
    )
}