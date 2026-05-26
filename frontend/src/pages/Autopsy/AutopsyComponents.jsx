export default function AutopsyComponents() {
  const dummyData = [
    { id: 1, name: 'Case A' },
    { id: 2, name: 'Case B' }
  ];

  return (
    <ul>
      {dummyData.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}