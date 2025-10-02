import { useState } from 'react';

function Profile() {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        interest: "",
        goodHabits: "",
        badHabits: "",
        futureSelf: "",
    });

    // Updates state
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Profile saved:", formData);
        alaert("Profile saved! (check console for data");
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "item", maxWidth: "400px" }}>
                
                <input 
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                />
                
                <input 
                type="text"
                name="interests"
                placeholder="Interests"
                value={formData.interests}
                onChange={handleChange}
                />

                <input
                type="text"
                name="badHabits"
                placeholder="Bad Habits"
                value={formData.badHabits}
                onChange={handleChange}
                />

                <input
                type="text"
                name="goodHabits"
                placeholder="Good Habits"
                value={formData.goodHabits}
                onChange={handleChange}
                />

                <textarea
                name="futureSelf"
                placeHolder="Who do you want to become?"
                value={formData.futureSelf}
                onChange={handleChange}
                />

                <button type="submit" style={{ padding: "0.5rem", background: "#1f2a44", color: "white", border: "none", curosr: "pointer"}}>
                    Save Profile
                </button>
            </form>
         </div>
    );
    }
    export default Profile;

    /*
    return (
      <div style={{ padding: "2rem" }}>
        <h2>User Profile</h2>
        <p>Form to enter name, DOB, interests, habits...</p>
      </div>
    );
  }
  
  export default Profile;
  */