const EditRegisteredPet = ({ onEditPet }) => {
    const [petId, setPetId] = useState('');
    const [petName, setPetName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [breed, setBreed] = useState('');
    const [eyeColor, setEyeColor] = useState('');
    const [age, setAge] = useState('');
    const [petType, setPetType] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!petId || !petName || !zipCode || !breed || !eyeColor || !age || !petType) return;
  
      const updatedPet = {
        id: petId,
        petName,
        zipCode,
        breed,
        eyeColor,
        age,
        petType
      };
  
      onEditPet(updatedPet);
      setPetId('');
      setPetName('');
      setZipCode('');
      setBreed('');
      setEyeColor('');
      setAge('');
      setPetType('');
    };
  
    return (
      <div>
        <h3>Edit Registered Pet</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pet ID"
            value={petId}
            onChange={(e) => setPetId(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Pet Name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Eye Color"
            value={eyeColor}
            onChange={(e) => setEyeColor(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Pet Type"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            required
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  };
  
  export default EditRegisteredPet;
  