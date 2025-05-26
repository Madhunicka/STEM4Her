import { useState, useEffect } from 'react';
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
      <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4 sm:px-8 md:px-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4 p-2 leading-[1.3]">
              Coding Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharpen your skills with these fun coding exercises!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge) => (
              <div 
                key={challenge.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-purple-100"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-purple-800">{challenge.title}</h3>
                      <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                        challenge.level === 'Easy' ? 'bg-green-100 text-green-800' : 
                        challenge.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {challenge.level}
                      </span>
                    </div>
                    <button
                      onClick={() => startChallenge(challenge)}
                      className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-lg shadow hover:from-purple-600 hover:to-pink-500 transition-transform transform hover:scale-105"
                    >
                      Start
                    </button>
                  </div>
                  <p className="mt-4 text-gray-600">{challenge.description}</p>
                </div>
                <div className="bg-purple-50 px-6 py-3 border-t border-purple-100">
                  <div className="flex items-center text-sm text-purple-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    JavaScript
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4 sm:px-8 md:px-16 pt-24">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-white">
          <button
            onClick={() => setSelectedChallenge(null)}
            className="flex items-center text-white hover:text-purple-200 mb-4"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Challenges
          </button>
          <h2 className="text-3xl font-bold">{selectedChallenge.title}</h2>
          <div className="flex items-center mt-2">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
              selectedChallenge.level === 'Easy' ? 'bg-green-100 text-green-800' : 
              selectedChallenge.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
              'bg-red-100 text-red-800'
            }`}>
              {selectedChallenge.level}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700">{selectedChallenge.description}</p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
            >
              <option value="javascript">JavaScript</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Solution</label>
            <textarea
              rows={12}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 font-mono text-sm"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          <button
            onClick={runTests}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Run Tests
          </button>

          {results.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Test Results</h3>
              <div className="space-y-3">
                {results.map(({ pass, input, expected, output }, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-lg border ${
                      pass ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 h-5 w-5 ${
                        pass ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {pass ? (
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <div className="ml-3">
                        <h4 className={`text-sm font-medium ${
                          pass ? 'text-green-800' : 'text-red-800'
                        }`}>
                          Test Case {i + 1} {pass ? 'Passed' : 'Failed'}
                        </h4>
                        <div className="mt-1 text-sm text-gray-600">
                          <p>Input: {JSON.stringify(input)}</p>
                          <p>Expected: {JSON.stringify(expected)}</p>
                          <p>Output: {JSON.stringify(output)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}