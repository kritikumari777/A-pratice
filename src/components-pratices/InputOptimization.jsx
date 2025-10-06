import { useState } from "react";

const InputOptimization = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    company: "",
    profile: "",
    salary: "",
    joiningDate: "",
    roll: "",
    teammanager: "",
    teamleader: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", user);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {Object.keys(user).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            onChange={handleChange}
            value={user[key]}
            placeholder={key.replace(/([A-Z])/g, " $1").toLowerCase()}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputOptimization;
