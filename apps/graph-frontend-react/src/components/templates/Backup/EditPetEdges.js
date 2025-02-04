const EditPetEdges = ({ onEditEdge }) => {
    const [edgeId, setEdgeId] = useState('');
    const [sourcePet, setSourcePet] = useState('');
    const [targetPet, setTargetPet] = useState('');
    const [relationship, setRelationship] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!edgeId || !sourcePet || !targetPet || !relationship) return;
  
      const updatedEdge = {
        id: edgeId,
        source: sourcePet,
        target: targetPet,
        relationship
      };
  
      onEditEdge(updatedEdge);
      setEdgeId('');
      setSourcePet('');
      setTargetPet('');
      setRelationship('');
    };
  
    return (
      <div>
        <h3>Edit Pet Edges</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Edge ID"
            value={edgeId}
            onChange={(e) => setEdgeId(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Source Pet ID"
            value={sourcePet}
            onChange={(e) => setSourcePet(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Target Pet ID"
            value={targetPet}
            onChange={(e) => setTargetPet(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Relationship"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            required
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  };
  
  export default EditPetEdges;
  