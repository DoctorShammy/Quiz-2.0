
const quizQuestions = [
    {
      id: 'question1',
      text: '1. Which customers are considered the best type of customers for Myrspoven’s solutions? (tick all that apply)',
      options: [
        { id: '1a', text: 'A retailer with 200 shops, average sqm 4000 sqm' },
        { id: '1b', text: 'A retailer with 4 shopping malls, average 50000 sqm' },
        { id: '1c', text: 'A real estate owner focusing on offices average 20000 sqm' },
        { id: '1d', text: 'A real estate owner focusing on residential average 10000 sqm' }
    ],
      correctAnswer: ['1b', '1c' ],
      maxChoices: 2
    },
    {
        id: 'question2',
        text: '2. What should you look for in a customer? (tick all that apply)',
        options: [
          { id: '2a', text: 'Big portfolio with small average size of buildings' },
          { id: '2b', text: 'Big average size of buildings in a portfolio' },
          { id: '2c', text: 'Customers who are just starting their digitization journey' },
          { id: '2d', text: 'Customers with clear sustainability goals' }
      ],
        correctAnswer: ['2b', '2d' ],
        maxChoices: 2
      },
      {
        id: 'question3',
        text: '3. What attributes are important when choosing what building to optimize? (tick all that apply)',
        options: [
          { id: '3a', text: 'High number of technical systems' },
          { id: '3b', text: 'Buildings with low number of technical systems          ' },
          { id: '3c', text: 'Buildings with an excessively large proportion of VAV (variable air volume)          ' },
          { id: '3d', text: 'Buildings with varied use' }
      ],
        correctAnswer:['3a', '3d' ],
        maxChoices: 2
      },
      {
        id: 'question4',
        text: '4. Which buildings are the optimal to optimize (tier 1)? (Tick all that apply)',
        options: [
          { id: '4a', text: 'Offices' },
          { id: '4b', text: 'Shops' },
          { id: '4c', text: 'Airports' },
          { id: '4d', text: 'Shopping malls' }
      ],
        correctAnswer: ['4a', '4c', '4d' ],
        maxChoices: 3
      },      
      {
        id: 'question5',
        text: '5. Which buildings need more investigation before proceeding? (tick all that apply)        ',
        options: [
          { id: '5a', text: 'Shopping malls' },
          { id: '5b', text: 'Train stations' },
          { id: '5c', text: 'Logistics facilities' },
          { id: '5d', text: 'Hospitals' }
      ],
        correctAnswer: ['5b', '5c', '5d' ],
        maxChoices: 3
      },      
      {
        id: 'question6',
        text: '6. Which type of building should you avoid? (tick all that apply)        ',
        options: [
          { id: '6a', text: 'Elderly care facilities' },
          { id: '6b', text: 'Schools' },
          { id: '6c', text: 'Ice rinks' },
          { id: '6d', text: 'Swimming pools' }
      ],
        correctAnswer: ['6c', '6d' ],
        maxChoices: 2
      },      
      {
        id: 'question7',
        text: '7. What attributes should you avoid? (tick all that apply)',
        options: [
          { id: '7a', text: 'Building with specific requirements on the indoor climate, like ice rinks or swimming pools' },
          { id: '7b', text: 'Buildings with an excessively large proportion of VAV (variable air volume)' },
          { id: '7c', text: 'Small individual buildings in a portfolio' },
          { id: '7d', text: 'Military facilities' }
      ],
        correctAnswer: ['7a','7b', '7c','7d', ],
        maxChoices: 4
      },
      ]