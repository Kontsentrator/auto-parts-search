import TextBox from '@/components/ui/TextBox';
import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState('');

  return (
    <main className="container py-5">
      <h1 className="h3">Поиск автозапчастей</h1>

      <TextBox placeholder="Номер автозапчасти" value={number} onChange={setNumber} />
    </main>
  )
};

export default App;
