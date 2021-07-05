import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
      {
        id: 'e1',
        title: 'Washing Powder',
        amount: 104,
        date: new Date(2021, 6, 4),
      },

      {
        id: 'e2',
        title: 'New TV',
        amount: 501,
        date: new Date(2021, 3, 20),
      },

      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 1101,
        date: new Date(2021, 5, 12),
      },

      {
        id: 'e4',
        title: 'Wooden Desk',
        amount: 800,
        date: new Date(2021, 3, 14),
      }
  ]
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
