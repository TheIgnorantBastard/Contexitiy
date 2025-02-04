const PetNodeCreation = ({ onAddNode }) => {
    const [petName, setPetName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [breed, setBreed] = useState('');
    const [eyeColor, setEyeColor] = useState('');
    const [age, setAge] = useState('');
    const [petType, setPetType] = useState('');
    const [breedDisabled, setBreedDisabled] = useState(true);
  
    const handlePetTypeChange = (e) => {
      const selectedType = e.target.value;
      setPetType(selectedType);
      setBreedDisabled(!(selectedType === 'Dog' || selectedType === 'Reptile' || selectedType === 'Bird' || selectedType === 'Fish'));
      if (!(selectedType === 'Dog' || selectedType === 'Reptile' || selectedType === 'Bird' || selectedType === 'Fish')) setBreed('');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!petName || !zipCode || (!breed && (petType === 'Dog' || petType === 'Reptile' || petType === 'Bird' || petType === 'Fish')) || !eyeColor || !age || !petType) return;
  
      const newNode = {
        id: Date.now().toString(),
        petName,
        zipCode,
        breed,
        eyeColor,
        age,
        petType,
        position: { x: Math.random() * 400, y: Math.random() * 400 }
      };
  
      onAddNode(newNode);
      setPetName('');
      setZipCode('');
      setBreed('');
      setEyeColor('');
      setAge('');
      setPetType('');
      setBreedDisabled(true);
    };
  
    return (
      <div>
        <h3>Create Pet Node</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pet Name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
          />
          <select
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          >
            <option value="">Select Zip Code</option>
            <option value="89101">89101</option>
            <option value="89102">89102</option>
            <option value="89103">89103</option>
            <option value="89104">89104</option>
            <option value="89106">89106</option>
            <option value="89107">89107</option>
            <option value="89108">89108</option>
            <option value="89109">89109</option>
            <option value="89110">89110</option>
            <option value="89113">89113</option>
            <option value="89115">89115</option>
            <option value="89117">89117</option>
            <option value="89118">89118</option>
            <option value="89119">89119</option>
            <option value="89120">89120</option>
          </select>
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          >
            <option value="">Select Age</option>
            <option value="Newborn">Newborn</option>
            <option value="1-2">1-2</option>
            <option value="3-4">3-4</option>
            <option value="5-6">5-6</option>
            <option value="7-8">7-8</option>
            <option value="9-10">9-10</option>
            <option value="11-12">11-12</option>
            <option value="13-14">13-14</option>
            <option value="15+">15+</option>
          </select>
          <select
            value={petType}
            onChange={handlePetTypeChange}
            required
          >
            <option value="">Select Pet Type</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Fish">Fish</option>
            <option value="Turtle">Turtle</option>
            <option value="Reptile">Reptile</option>
            <option value="Bird">Bird</option>
          </select>
          <input
            type="text"
            placeholder="Eye Color"
            value={eyeColor}
            onChange={(e) => setEyeColor(e.target.value)}
            required
          />
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
  };
  
  export default PetNodeCreation;
  