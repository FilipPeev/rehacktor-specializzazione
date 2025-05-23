import { useState, useEffect, useContext } from 'react';
import supabase from '../../supabase/supabase-client';
import SessionContext from '../../context/SessionContext';
import Avatar from '../../components/Avatar';

export default function AccountPage() {
    const { session } = useContext(SessionContext);

    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);
    const [first_name, setFirstName] = useState(null);
    const [last_name, setLastName] = useState(null);
    const [avatar_url, setAvatarUrl] = useState(null);

    useEffect(() => {
        let ignore = false;
        const getProfile = async () => {
            setLoading(true);
            const { user } = session;

            const { data, error } = await supabase
                .from('profiles')
                .select(`username, first_name, last_name, avatar_url`)
                .eq('id', user.id)
                .single();

            if (!ignore) {
                if (error) {
                    console.warn(error);
                } else if (data) {
                    setUsername(data.username);
                    setFirstName(data.first_name);
                    setLastName(data.last_name);
                    setAvatarUrl(data.avatar_url);
                }
            }

            setLoading(false);
        };

        if (session) {
            getProfile();
        }

        return () => {
            ignore = true;
        };
    }, [session]);

    const updateProfile = async (event, avatarUrl) => {
        event.preventDefault();

        setLoading(true);
        const { user } = session;

        const updates = {
            id: user.id,
            username,
            first_name,
            last_name,
            avatar_url: avatarUrl,
            updated_at: new Date(),
        };

        const { error } = await supabase.from('profiles').upsert(updates);

        if (error) {
            alert(error.message);
        } else {
            setAvatarUrl(avatarUrl);
        }

        setLoading(false);
    };

    return (
        <div className="d-flex justify-content-center">

            <form onSubmit={updateProfile} className="profileSettings">
                <h1 className="text-center">Profile Settings</h1>
                <Avatar
                    url={avatar_url}
                    size={150}
                    onUpload={(event, url) => {
                        updateProfile(event, url);
                    }}
                />
                <div >
                    <label htmlFor="first_name">First name</label>
                    <input
                        id="first_name"
                        type="text"
                        value={first_name || ""}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-100 profileInput"
                    />
                </div>

                <div>
                    <label htmlFor="last_name">Last name</label>
                    <input
                        id="last_name"
                        type="text"
                        value={last_name || ""}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-100 profileInput"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" value={session?.user?.email || ""} className="w-100 profileInput" />
                </div>

                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        required
                        value={username || ""}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-100 profileInput"
                    />
                </div>


                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="profileBtn"
                    >
                        {loading ? "Loading ..." : "Update"}
                    </button>
                </div>
            </form>
        </div>
    );
}
