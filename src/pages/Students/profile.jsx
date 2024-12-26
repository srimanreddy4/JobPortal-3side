import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/students/profile", {
          withCredentials: true,
        });
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError("Failed to load profile data");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="text-center text-blue-600">Loading...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Welcome, {userData.name}!</h1>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-blue-500 font-semibold">Email:</h2>
            <p>{userData.email}</p>
          </div>
          <div>
            <h2 className="text-blue-500 font-semibold">University:</h2>
            <p>{userData.university_name || "Not provided"}</p>
          </div>
          <div>
            <h2 className="text-blue-500 font-semibold">Degree Program:</h2>
            <p>{userData.degree_program || "Not provided"}</p>
          </div>
          <div>
            <h2 className="text-blue-500 font-semibold">Graduation Year:</h2>
            <p>{userData.graduation_year || "Not provided"}</p>
          </div>
          <div className="col-span-2">
            <h2 className="text-blue-500 font-semibold">Profile Summary:</h2>
            <p className="whitespace-pre-wrap">{userData.profile_summary || "No summary available"}</p>
          </div>
          <div>
            <h2 className="text-blue-500 font-semibold">CGPA:</h2>
            <p>{userData.cgpa || "Not provided"}</p>
          </div>
          <div>
            <h2 className="text-blue-500 font-semibold">Referrals:</h2>
            <p>{userData.referral || "Not provided"}</p>
          </div>
          <div>
            <h2 className="text-blue-500 font-semibold">Endorsements:</h2>
            <p>{userData.endorsements || "None"}</p>
          </div>
          <div>
            <h2 className="text-blue-500 font-semibold">Achievements:</h2>
            <p>{userData.achievements || "No achievements yet"}</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => alert("Edit Profile functionality coming soon!")}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
