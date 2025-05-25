import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const challenges = [
  {
    id: 1,
    title: 'Sum Two Numbers',
    functionName: 'sum',
    level: 'Easy',
    description: 'Write a function `sum(a, b)` that returns the sum of two numbers.',
    solution: `function sum(a, b) {
  return a + b;
}`,
    testCases: [
      { input: [1, 2], expected: 3 },
      { input: [5, 7], expected: 12 },
      { input: [-1, 1], expected: 0 },
    ],
  },
  {
    id: 2,
    title: 'Is Even',
    functionName: 'isEven',
    level: 'Easy',
    description: 'Write a function `isEven(n)` that returns true if n is even, false otherwise.',
    solution: `function isEven(n) {
  return n % 2 === 0;
}`,
    testCases: [
      { input: [2], expected: true },
      { input: [3], expected: false },
      { input: [0], expected: true },
    ],
  },
  {
    id: 3,
    title: 'Factorial',
    functionName: 'factorial',
    level: 'Medium',
    description: 'Write a function `factorial(n)` that returns the factorial of n (n!).',
    solution: `function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}`,
    testCases: [
      { input: [0], expected: 1 },
      { input: [4], expected: 24 },
      { input: [5], expected: 120 },
    ],
  },
  {
    id: 4,
    title: 'Reverse String',
    functionName: 'reverseString',
    level: 'Easy',
    description: 'Write a function `reverseString(str)` that returns the reversed string.',
    solution: `function reverseString(str) {
  return str.split('').reverse().join('');
}`,
    testCases: [
      { input: ['hello'], expected: 'olleh' },
      { input: ['world'], expected: 'dlrow' },
      { input: ['abc'], expected: 'cba' },
    ],
  },
  {
    id: 5,
    title: 'Find Maximum',
    functionName: 'findMax',
    level: 'Medium',
    description: 'Write a function `findMax(arr)` that returns the maximum number in an array.',
    solution: `function findMax(arr) {
  return Math.max(...arr);
}`,
    testCases: [
      { input: [[1, 5, 3, 9, 2]], expected: 9 },
      { input: [[-10, -5, -2]], expected: -2 },
      { input: [[100, 1000, 10000]], expected: 10000 },
    ],
  },
];


export default function Challenges() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/login");
    }
  }, []);

  const startChallenge = (challenge) => {
    setSelectedChallenge(challenge);
    setLanguage('javascript');
    setCode(challenge.solution);
    setResults([]);
  };

  const runTests = () => {
    if (language !== 'javascript') {
      alert('Currently only JavaScript supported');
      return;
    }

    const testResults = selectedChallenge.testCases.map(({ input, expected }) => {
      try {
        const func = new Function(code + `; return ${selectedChallenge.functionName}(${input.join(',')});`);
        const output = func();
        const pass = output === expected;
        return { pass, input, expected, output };
      } catch (error) {
        return { pass: false, input, expected, output: error.message };
      }
    });

    setResults(testResults);
  };

  if (!selectedChallenge) {
    return (
      <section
        className="relative py-16 px-4 sm:px-8 md:px-16 pt-24 min-h-screen"
        style={{
          background: 'linear-gradient(to bottom right, #e0f2fe, #bae6fd)', 
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">Coding Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
  <div
    key={challenge.id}
    className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-semibold text-blue-900">{challenge.title}</h3>
      <button
        onClick={() => startChallenge(challenge)}
        className="ml-4 bg-blue-700 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-transform transform hover:scale-105"
      >
        Try Now
      </button>
    </div>
    <p className="text-blue-700 mt-2">Level: {challenge.level}</p>
  </div>
))}

          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative py-16 px-4 sm:px-8 md:px-16 pt-24 min-h-screen"
      style={{
        background: 'linear-gradient(to bottom right, #e0f2fe, #bae6fd)', 
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <button
          onClick={() => setSelectedChallenge(null)}
          className="mb-4 text-blue-700 underline hover:text-blue-900"
        >
          ← Back to Challenges
        </button>

        <h2 className="text-3xl font-bold text-blue-800 mb-2">{selectedChallenge.title}</h2>
        <p className="mb-6 text-blue-700">{selectedChallenge.description}</p>

        <label className="block mb-2 font-semibold text-blue-800">Select Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="mb-6 p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="javascript">JavaScript</option>
        
        </select>

        <label className="block mb-2 font-semibold text-blue-800">Write your code:</label>
        <textarea
          rows={12}
          className="w-full p-3 border border-blue-300 rounded font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          onClick={runTests}
          className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Run Tests
        </button>

        {results.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Test Results:</h3>
            <ul>
              {results.map(({ pass, input, expected, output }, i) => (
                <li
                  key={i}
                  className={`mb-3 p-3 rounded ${
                    pass ? 'bg-green-200 text-green-900' : 'bg-red-200 text-red-900'
                  }`}
                >
                  <strong>Test {i + 1}:</strong> Input: {JSON.stringify(input)} | Expected: {expected} | Your output: {output} |{' '}
                  {pass ? '✅ Passed' : '❌ Failed'}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
