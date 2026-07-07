import { useEffect, useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    city: "",
    degree: ""
  });

  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const res = await fetch("https://learn-5umu.onrender.com/students");
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const saveStudent = async () => {
    await fetch("https://learn-5umu.onrender.com/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    setForm({
      name: "",
      city: "",
      degree: ""
    });

    getStudents();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Student Form</h2>

      <input
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        placeholder="City"
        name="city"
        value={form.city}
        onChange={handleChange}
      />

      <br /><br />

      <input
        placeholder="Degree"
        name="degree"
        value={form.degree}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={saveStudent}>
        Save
      </button>

      <hr />

      <h2>Students</h2>

      {students.map((s) => (
        <div key={s._id}>
          <p>
            {s.name} | {s.city} | {s.degree}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;